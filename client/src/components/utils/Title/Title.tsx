import React from "react"
import styles from "./Title.module.css"

type TitleProps = {
    readonly text: string
}

export const TitleComponent: React.FC<TitleProps> = ({ text }: TitleProps) => (
    <React.Fragment>
        <span className={styles.title__primary}>{text}</span>
    </React.Fragment>
)
