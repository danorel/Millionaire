package middleware

import (
	"github.com/danorel/Millionaire/configs"
	"net/http"
)

func InitializeView()  {
	stateConfig := (*configs.Config).StateConfig()
	if stateConfig.Mode() != "development" {
		http.Handle("/", http.FileServer(http.Dir("client/build")))
	}
}