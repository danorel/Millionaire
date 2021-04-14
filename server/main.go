package main

import (
	"context"
	"github.com/danorel/Millionaire/pkg/api"
	"github.com/danorel/Millionaire/pkg/middleware"
	"log"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"
)

func main() {
	httpServerExitDone := &sync.WaitGroup{}
	httpServerExitDone.Add(1)

	server := api.InitializeHTTPServer(httpServerExitDone)
	api.InitializeHTTPRoutes()

	middleware.InitializeView()

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