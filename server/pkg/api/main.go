package api

import (
	"github.com/danorel/Millionaire/configs"
	"log"
	"net/http"
	"sync"
)

func InitializeHTTPRoutes() {
	http.HandleFunc("/api/game", GameRouteHandler)
}

func InitializeHTTPServer(wg *sync.WaitGroup) *http.Server {
	log.Println("Reading configurations...")

	configs.LoadConfigs()
	serverConfig := (*configs.Config).ServerConfig()

	log.Println("Starting server...")

	srv := &http.Server{Addr: serverConfig.Addr()}

	go func() {
		defer wg.Done() // let main know we are done cleaning up

		log.Printf("Server is running on port %v successfully!", serverConfig.Port())

		// always returns error. ErrServerClosed on graceful close
		if err := srv.ListenAndServe(); err != http.ErrServerClosed {
			// unexpected error. port in use?
			log.Fatalf("Failed to initialize server: %v\n", err)
		}
	}()

	// returning reference so caller can call Shutdown()
	return srv
}