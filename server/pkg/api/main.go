package api

import (
	"github.com/danorel/Millionaire/configs"
	"github.com/danorel/Millionaire/pkg/api/routes"
	"github.com/danorel/Millionaire/pkg/middleware"
	"log"
	"net/http"
	"sync"
)

func InitializeHTTPServer(wg *sync.WaitGroup) *http.Server {
	log.Println("Setup server configurations files...")
	configs.LoadConfigs()
	serverConfig := (*configs.Config).ServerConfig()

	log.Println("Setup server routes...")
	h := http.NewServeMux()
	h.HandleFunc("/api/game", routes.GameRouteHandler)

	log.Println("Setup server...")
	srv := &http.Server{
		Addr: serverConfig.Addr(),
		Handler: middleware.ResponseCORS(
			middleware.ResponseHostTracker(
				middleware.ResponseTimeTracker(h),
			),
		),
	}

	log.Println("Setup server static build...")
	middleware.InitializeStatic()

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