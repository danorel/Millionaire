package json

import (
	"encoding/json"
	"io/ioutil"
)

type Prize = string

type Question = string

type Answer = struct {
	Text 	string `json:"text"`
	Correct bool   `json:"correct"`
}

type Option struct {
	Question Question `json:"question"`
	Answers  []Answer `json:"answers"`
}

type ClientConfig struct {
	Prizes  []Prize  `json:"prizes"`
	Options []Option `json:"options"`
}

var ClientConfigInstance *ClientConfig

func LoadClientConfig(filename string) error {
	configFile, err := ioutil.ReadFile(filename)
	if err != nil {
		panic(err)
	}
	/**
	 * If everything goes along as planned - read the file.
	 * Convert the json content into config.
	 */
	return json.Unmarshal(configFile, &ClientConfigInstance)
}