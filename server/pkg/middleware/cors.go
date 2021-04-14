package middleware

import (
	"net/http"
)

type responseWriterWithCORS struct {
	http.ResponseWriter
}

func (w *responseWriterWithCORS) WriteHeader(statusCode int) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func (w *responseWriterWithCORS) Write(b []byte) (int, error) {
	return w.ResponseWriter.Write(b)
}

func ResponseCORS(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if (*r).Method == "OPTIONS" {
			return
		}

		h.ServeHTTP(&responseWriterWithCORS{w}, r)
	})
}
