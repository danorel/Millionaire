import React from "react"
import styles from "./Title.module.css"

type TitleProps = {
    readonly text: string
    readonly header?: string
}

export const TitleComponent: React.FC<TitleProps> = ({
    text,
    header
}: TitleProps) => (
    <React.Fragment>
        {header ? (
            <span className={styles.span__primary_header}>{header}</span>
        ) : null}
        <span className={styles.span__primary_text}>{text}</span>
    </React.Fragment>
)
