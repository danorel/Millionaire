package config

import "os"

type ApplicationConfig struct {
	internalConfig InternalConfig
	serverConfig   ServerConfig
}

func (c *ApplicationConfig) InternalConfig() InternalConfig {
	return c.internalConfig
}
func (c *ApplicationConfig) ServerConfig() ServerConfig {
	return c.serverConfig
}


type InternalConfig struct {
	mode string
}

func (c *InternalConfig) Mode() string {
	return c.mode
}


type ServerConfig struct {
	protocol string
	host 	 string
	port	 string
	addr 	 string
}

func (c *ServerConfig) Protocol() string {
	return c.protocol
}
func (c *ServerConfig) Host() string {
	return c.host
}
func (c *ServerConfig) Port() string {
	return c.port
}
func (c *ServerConfig) Addr() string {
	return c.addr
}

var Config *ApplicationConfig

func Initialize() {
	Config = &ApplicationConfig{
		serverConfig: ServerConfig{
			protocol: os.Getenv("SERVER_PROTOCOL"),
			host:	  os.Getenv("SERVER_HOST"),
			port:	  os.Getenv("SERVER_PORT"),
			addr: 	  os.Getenv("SERVER_HOST") + ":" + os.Getenv("SERVER_PORT"),
		},
		internalConfig: InternalConfig{
			mode: os.Getenv("NODE_ENV"),
		},
	}
}
