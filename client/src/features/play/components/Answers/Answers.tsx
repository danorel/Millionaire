import React from "react"
import styles from "./Answers.module.css"

import { AnswerComponent } from "./Answer/Answer"

type AnswersProps = {}

export const AnswersComponent: React.FC<AnswersProps> = (
    props: AnswersProps
) => (
    <React.Fragment>
        <div className={styles.grid__container}>
            <div className={styles.grid__item_left}>
                <AnswerComponent letter={"A"} text={"10 years"} />
                <AnswerComponent letter={"B"} text={"12 years"} />
            </div>
            <div className={styles.grid__item_right}>
                <AnswerComponent letter={"C"} text={"11 years"} />
                <AnswerComponent letter={"D"} text={"9 years"} />
            </div>
        </div>
    </React.Fragment>
)
