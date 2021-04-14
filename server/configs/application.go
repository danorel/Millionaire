package configs

import (
	"fmt"
	"github.com/danorel/Millionaire/configs/env"
	"github.com/danorel/Millionaire/configs/json"
)

type ApplicationConfig struct {
	stateConfig  env.StateConfig
	serverConfig env.ServerConfig
	clientConfig json.ClientConfig
}

func (c *ApplicationConfig) StateConfig() env.StateConfig {
	return c.stateConfig
}
func (c *ApplicationConfig) ServerConfig() env.ServerConfig {
	return c.serverConfig
}
func (c *ApplicationConfig) ClientConfig() json.ClientConfig {
	return c.clientConfig
}

var Config *ApplicationConfig

func LoadConfigs() {
	env.LoadStateConfig()
	env.LoadServerConfig()
	err := json.LoadClientConfig("configs/json/client.json")
	if err != nil {
		fmt.Printf("Error occurred during file reading: %v", err.Error())
		return
	}
	Config = &ApplicationConfig{
		stateConfig:  *env.StateConfigInstance,
		serverConfig: *env.ServerConfigInstance,
		clientConfig: *json.ClientConfigInstance,
	}
}
