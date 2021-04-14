package middleware

import (
	"github.com/danorel/Millionaire/configs"
	"log"
	"net/http"
)

type responseWriterWithHostname struct {
	http.ResponseWriter
}

func (w *responseWriterWithHostname) WriteHeader(statusCode int) {
	serverConfig := (*configs.Config).ServerConfig()
	log.Printf("X-Server-Name %v", serverConfig.Host())
	w.Header().Set("X-Server-Name", serverConfig.Host())
	w.ResponseWriter.WriteHeader(statusCode)
}

func (w *responseWriterWithHostname) Write(b []byte) (int, error) {
	return w.ResponseWriter.Write(b)
}

func ResponseHostTracker(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		h.ServeHTTP(&responseWriterWithHostname{w}, r)
	})
}