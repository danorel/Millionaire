package middleware

import (
	"net/http"
	"strconv"
	"time"
)

type responseWriterWithTimer struct {
	http.ResponseWriter

	measured bool
	begin    time.Time
}

func (w *responseWriterWithTimer) WriteHeader(statusCode int) {
	duration := time.Now().Sub(w.begin)
	ms := int(duration.Truncate(time.Microsecond).Microseconds())
	w.Header().Set("X-Response-Time", strconv.Itoa(ms))
	w.ResponseWriter.WriteHeader(statusCode)
	w.measured = true
}

func (w *responseWriterWithTimer) Write(b []byte) (int, error) {
	if !w.measured {
		w.WriteHeader(200)
	}

	return w.ResponseWriter.Write(b)
}

func ResponseTimeTracker(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		h.ServeHTTP(&responseWriterWithTimer{w, false, time.Now()}, r)
	})
}