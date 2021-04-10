package main

import (
	"fmt"
	"log"
	"net/http"
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

func main() {
	http.HandleFunc("/", rootRouteHandler)
	fmt.Printf("Server is running on port 8081 successfully!\n")
	if err := http.ListenAndServe(":8081", nil); err != nil {
		log.Fatal(err)
	}
}