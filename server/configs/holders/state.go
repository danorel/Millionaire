package holders

import "os"

type StateConfig struct {
	mode string
}

func (c *StateConfig) Mode() string {
	return c.mode
}

var StateConfigSingleton *StateConfig

func LoadStateConfig() {
	StateConfigSingleton = &StateConfig {
		mode: os.Getenv("NODE_ENV"),
	}
}
