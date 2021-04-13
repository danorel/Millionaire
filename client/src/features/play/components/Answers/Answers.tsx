import React from "react"
import styles from "./Answers.module.css"

import { AnswerComponent } from "./Answer/Answer"

type Answer = {
    text: string
}

type AnswersProps = {
    values: Answer[]
}

const LettersLeft = ["A", "B"]
const LettersRight = ["C", "D"]

export const AnswersComponent: React.FC<AnswersProps> = ({
    values
}: AnswersProps) => (
    <React.Fragment>
        <div className={styles.grid__container}>
            <div className={styles.grid__item_left}>
                {values
                    .slice(0, 2)
                    .map((answer) => answer.text)
                    .map((value, index) => (
                        <AnswerComponent
                            index={index}
                            letter={LettersLeft[index]}
                            text={value}
                        />
                    ))}
            </div>
            <div className={styles.grid__item_right}>
                {values
                    .slice(2, values.length)
                    .map((answer) => answer.text)
                    .map((value, index) => (
                        <AnswerComponent
                            index={index + 2}
                            letter={LettersRight[index]}
                            text={value}
                        />
                    ))}
            </div>
        </div>
    </React.Fragment>
)
