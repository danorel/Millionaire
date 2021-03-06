package routes

import (
	"encoding/json"
	"github.com/danorel/Millionaire/configs"
	"net/http"
)

func GameRouteHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/api/game" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

	if r.Method != "GET" {
		http.Error(w, "Method is not supported.", http.StatusNotFound)
		return
	}

	clientConfig := (*configs.Config).ClientConfig()

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)

	err := json.NewEncoder(w).Encode(clientConfig)
	if err != nil {
		return
	}
}
