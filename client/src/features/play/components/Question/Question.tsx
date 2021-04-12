import React from "react"
import styles from "./Question.module.css"

type QuestionProps = {}

export const QuestionComponent: React.FC<QuestionProps> = (
    props: QuestionProps
) => (
    <React.Fragment>
        <span className={styles.span__primary}>
            How old your elder brother was 10 years before you was born, mate?
        </span>
    </React.Fragment>
)
