import React from "react"

type TitleProps = {
    readonly value: string
    readonly styles: {
        readonly [key: string]: string
    }
}

export const TitleComponent: React.FC<TitleProps> = ({
    value,
    styles
}: TitleProps) => (
    <React.Fragment>
        <span id={styles.title__primary}>{value}</span>
    </React.Fragment>
)
