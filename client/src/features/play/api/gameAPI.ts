import { Config } from "MyModels"

// A mock function to mimic making an async request for data
export function fetchConfig() {
    return new Promise<{ data: Config }>((resolve) =>
        setTimeout(
            () =>
                resolve({
                    data: {
                        options: [
                            {
                                answers: [
                                    { correct: true, text: "14 years" },
                                    { correct: false, text: "11 years" },
                                    { correct: true, text: "9 years" },
                                    { correct: false, text: "10 years" }
                                ],
                                question:
                                    "How old your elder brother was 10 years before you was born, mate?"
                            },
                            {
                                answers: [
                                    { correct: true, text: "14 years" },
                                    { correct: false, text: "11 years" },
                                    { correct: true, text: "9 years" },
                                    { correct: false, text: "10 years" }
                                ],
                                question:
                                    "How old your elder brother was 10 years before you was born, mate?"
                            },
                            {
                                answers: [
                                    { correct: true, text: "14 years" },
                                    { correct: false, text: "11 years" },
                                    { correct: true, text: "9 years" },
                                    { correct: false, text: "10 years" }
                                ],
                                question:
                                    "How old your elder brother was 10 years before you was born, mate?"
                            },
                            {
                                answers: [
                                    { correct: true, text: "14 years" },
                                    { correct: false, text: "11 years" },
                                    { correct: true, text: "9 years" },
                                    { correct: false, text: "10 years" }
                                ],
                                question:
                                    "How old your elder brother was 10 years before you was born, mate?"
                            },
                            {
                                answers: [
                                    { correct: true, text: "14 years" },
                                    { correct: false, text: "11 years" },
                                    { correct: true, text: "9 years" },
                                    { correct: false, text: "10 years" }
                                ],
                                question:
                                    "How old your elder brother was 10 years before you was born, mate?"
                            },
                            {
                                answers: [
                                    { correct: true, text: "14 years" },
                                    { correct: false, text: "11 years" },
                                    { correct: true, text: "9 years" },
                                    { correct: false, text: "10 years" }
                                ],
                                question:
                                    "How old your elder brother was 10 years before you was born, mate?"
                            },
                            {
                                answers: [
                                    { correct: true, text: "14 years" },
                                    { correct: false, text: "11 years" },
                                    { correct: true, text: "9 years" },
                                    { correct: false, text: "10 years" }
                                ],
                                question:
                                    "How old your elder brother was 10 years before you was born, mate?"
                            },
                            {
                                answers: [
                                    { correct: true, text: "14 years" },
                                    { correct: false, text: "11 years" },
                                    { correct: true, text: "9 years" },
                                    { correct: false, text: "10 years" }
                                ],
                                question:
                                    "How old your elder brother was 10 years before you was born, mate?"
                            },
                            {
                                answers: [
                                    { correct: true, text: "14 years" },
                                    { correct: false, text: "11 years" },
                                    { correct: true, text: "9 years" },
                                    { correct: false, text: "10 years" }
                                ],
                                question:
                                    "How old your elder brother was 10 years before you was born, mate?"
                            },
                            {
                                answers: [
                                    { correct: true, text: "14 years" },
                                    { correct: false, text: "11 years" },
                                    { correct: true, text: "9 years" },
                                    { correct: false, text: "10 years" }
                                ],
                                question:
                                    "How old your elder brother was 10 years before you was born, mate?"
                            },
                            {
                                answers: [
                                    { correct: true, text: "14 years" },
                                    { correct: false, text: "11 years" },
                                    { correct: true, text: "9 years" },
                                    { correct: false, text: "10 years" }
                                ],
                                question:
                                    "How old your elder brother was 10 years before you was born, mate?"
                            },
                            {
                                answers: [
                                    { correct: true, text: "14 years" },
                                    { correct: false, text: "11 years" },
                                    { correct: true, text: "9 years" },
                                    { correct: false, text: "10 years" }
                                ],
                                question:
                                    "How old your elder brother was 10 years before you was born, mate?"
                            }
                        ],
                        prizes: [
                            "$1,000,000",
                            "$500,000",
                            "$250,000",
                            "$125,000",
                            "$64,000",
                            "$32,000",
                            "$16,000",
                            "$8,000",
                            "$4,000",
                            "$2,000",
                            "$1,000",
                            "$500"
                        ]
                    }
                }),
            1000
        )
    )
}
