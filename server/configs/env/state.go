package env

import "os"

type StateConfig struct {
	mode string
}

func (c *StateConfig) Mode() string {
	return c.mode
}

var StateConfigInstance *StateConfig

func LoadStateConfig() {
	StateConfigInstance = &StateConfig {
		mode: os.Getenv("NODE_ENV"),
	}
}
