import React from "react"
import { AnswerComponent } from "./Answer/Answer"

type AnswersProps = {}

export const AnswersComponent: React.FC<AnswersProps> = (
    props: AnswersProps
) => (
    <React.Fragment>
        <AnswerComponent />
        <AnswerComponent />
        <AnswerComponent />
        <AnswerComponent />
    </React.Fragment>
)
