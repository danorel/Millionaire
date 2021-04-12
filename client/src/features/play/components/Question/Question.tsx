import React from "react"
import styles from "./Question.module.css"

type QuestionProps = {
    text: string
}

export const QuestionComponent: React.FC<QuestionProps> = ({
    text
}: QuestionProps) => (
    <React.Fragment>
        <div className={styles.div__grid_layout}>
            <div className={styles.div__grid_item}>
                <span className={styles.span__primary}>{text}</span>
            </div>
        </div>
    </React.Fragment>
)
