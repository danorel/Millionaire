package configs

import (
	"github.com/danorel/Millionaire/configs/holders"
	"log"
)

type ApplicationConfig struct {
	stateConfig  holders.StateConfig
	serverConfig holders.ServerConfig
	clientConfig holders.ClientConfig
}

func (c *ApplicationConfig) StateConfig() holders.StateConfig {
	return c.stateConfig
}
func (c *ApplicationConfig) ServerConfig() holders.ServerConfig {
	return c.serverConfig
}
func (c *ApplicationConfig) ClientConfig() holders.ClientConfig {
	return c.clientConfig
}

var Config *ApplicationConfig

func LoadConfigs() {
	holders.LoadStateConfig()
	holders.LoadServerConfig()
	err := holders.LoadClientConfig("configs/json/setup.json")
	if err != nil {
		log.Fatalf("%v", err.Error())
		return
	}
	Config = &ApplicationConfig{
		stateConfig:  *holders.StateConfigSingleton,
		serverConfig: *holders.ServerConfigSingleton,
		clientConfig: *holders.ClientConfigSingleton,
	}
}
