package holders

import (
	"encoding/json"
	"github.com/danorel/Millionaire/domains"
	"io/ioutil"
)

type ClientConfig struct {
	Prizes  []domains.Prize  `json:"prizes"`
	Options []domains.Option `json:"options"`
}

var ClientConfigSingleton *ClientConfig

func LoadClientConfig(filename string) error {
	file, err := ioutil.ReadFile(filename)
	if err != nil {
		panic(err)
	}
	/**
	 * If everything goes along as planned - read the file.
	 * Convert the json content into config.
	 */
	return json.Unmarshal(file, &ClientConfigSingleton)
}