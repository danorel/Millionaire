package holders

import "os"

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

var ServerConfigSingleton *ServerConfig

func LoadServerConfig() {
	ServerConfigSingleton = &ServerConfig {
		protocol: os.Getenv("SERVER_PROTOCOL"),
		host:	  os.Getenv("SERVER_HOST"),
		port:	  os.Getenv("SERVER_PORT"),
		addr: 	  ":" + os.Getenv("SERVER_PORT"),
	}
}