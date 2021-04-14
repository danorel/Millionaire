package api

import (
	"fmt"
	"github.com/danorel/Millionaire/configs"
	"net/http"
)

func GameRouteHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

	if r.Method != "GET" {
		http.Error(w, "Method is not supported.", http.StatusNotFound)
		return
	}

	clientConfig := (*configs.Config).ClientConfig()
	if _, err := fmt.Fprintf(w, "Server configuration file: %v", clientConfig); err != nil {
		return
	}
}
