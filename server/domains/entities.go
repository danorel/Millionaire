package domains

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