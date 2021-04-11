import React from "react"
import styles from "../Start.module.css"

type TitleProps = {
    value: string
}

export const TitleComponent: React.FC<TitleProps> = ({ value }: TitleProps) => (
    <React.Fragment>
        <span id={styles.title__primary}>{value}</span>
    </React.Fragment>
)
