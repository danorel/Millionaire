declare module "MyModels" {
    /*
     * User action holder.
     * Meant for storing the index of the button clicked.
     */
    export type ButtonIndex = 0 | 1 | 2 | 3

    /* Entity meant for serving server answer. */
    export type Answer = {
        text: string
        correct: boolean
    }

    /* Entity meant for serving server questions. */
    export type Question = string

    /*
     * Receiving value from the server.
     *
     * Meant for storing the server one option answers and questions.
     * Also includes the predicate for declaring the answer to correct or not.
     *
     * ServerOption: {
     *     question: "Hello, is it correct?",
     *     answers: [
     *         { correct: true, text: "Yes it is" },
     *         { correct: false, text: "Not it is not" },
     *         ...
     *     ]
     * }
     *
     * Meant for storing the prize per level.
     * String value.
     *
     * ServerPrize: "$1,000,000"
     */
    export type ServerOption = {
        question: Question
        answers: Answer[]
    }

    export type ServerPrize = string

    /* Server-side validation of the correct answers */
    export type UserChoice = {
        success: boolean
        indexCorrect: ButtonIndex
    }

    /**
     * Full config structure receiving from the server side.
     *
     * {
            "options": [
                {
                    "question": "Hello, is it correct?",
                    "answers": [
                        { correct: true, text: "Yes it is" },
     *                  { correct: false, text: "Not it is not" },
     *                  ...
                    ]
                },
                ...
            ],
            "prizes": [
                "$1,000,000",
                "$500,000",
                ...
            ]
        }
      *
     */
    export type Config = {
        options: ServerOption[]
        prizes: ServerPrize[]
    }
}
