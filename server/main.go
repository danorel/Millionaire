package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"

	"github.com/danorel/Millionaire/config"
)

func rootRouteHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

	if r.Method != "GET" {
		http.Error(w, "Method is not supported.", http.StatusNotFound)
		return
	}

	if _, err := fmt.Fprintf(w, "Hello, Root Route!"); err != nil {
		return
	}
}

func startHttpServer(wg *sync.WaitGroup) *http.Server {
	log.Println("Reading configurations...")

	config.Initialize()
	httpConfig := *config.Config

	log.Println("Starting server...")

	srv := &http.Server{Addr: httpConfig.Addr()}

	http.HandleFunc("/api", rootRouteHandler)

	go func() {
		defer wg.Done() // let main know we are done cleaning up

		log.Printf("Server is running on port %v successfully!", httpConfig.Port())

		// always returns error. ErrServerClosed on graceful close
		if err := srv.ListenAndServe(); err != http.ErrServerClosed {
			// unexpected error. port in use?
			log.Fatalf("Failed to initialize server: %v\n", err)
		}
		}()

	// returning reference so caller can call Shutdown()
	return srv
}

func startViewServing() {
	http.Handle("/", http.FileServer(http.Dir("client/build")))
}

func main() {
	httpServerExitDone := &sync.WaitGroup{}
	httpServerExitDone.Add(1)

	server := startHttpServer(httpServerExitDone)
	startViewServing()

	// Wait for kill signal of channel
	quit := make(chan os.Signal)

	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)

	// This blocks until a signal is passed into the quit channel
	<- quit

	// The context is used to inform the server it has 3 seconds to finish
	// the request it is currently handling
	ctx, cancel := context.WithTimeout(context.Background(), 3 * time.Second)
	defer cancel()

	// Shutdown server
	log.Println("Shutting down server...")
	if err := server.Shutdown(ctx); err != nil {
		log.Fatalf("Server forced to shutdown: %v\n", err)
	}

	httpServerExitDone.Wait()
}