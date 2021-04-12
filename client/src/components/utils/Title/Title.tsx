import React from "react"

type TitleProps = {
    readonly text: string
    readonly styles: {
        readonly [key: string]: string
    }
}

export const TitleComponent: React.FC<TitleProps> = ({
    text,
    styles
}: TitleProps) => (
    <React.Fragment>
        <span id={styles.title__primary}>{text}</span>
    </React.Fragment>
)
