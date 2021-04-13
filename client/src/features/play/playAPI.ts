import { Option, Answer, Question } from "MyModels"

// A mock function to mimic making an async request for data
export function fetchAnswers() {
    return new Promise<{ data: Answer[] }>((resolve) =>
        setTimeout(
            () =>
                resolve({
                    data: [
                        { text: "14 years" },
                        { text: "11 years" },
                        { text: "9 years" },
                        { text: "10 years" }
                    ]
                }),
            500
        )
    )
}

// A mock function to mimic making an async request for data
export function fetchQuestion() {
    return new Promise<{ data: Question }>((resolve) =>
        setTimeout(
            () =>
                resolve({
                    data:
                        "How old your elder brother was 10 years before you was born, mate?"
                }),
            500
        )
    )
}

// A mock function to mimic making an async request for data
export function fetchCheckout(index: number) {
    return new Promise<{ data: Option }>((resolve) =>
        setTimeout(
            () =>
                resolve({
                    data: {
                        correct: index === 0,
                        correctIndex: 0
                    }
                }),
            500
        )
    )
}
