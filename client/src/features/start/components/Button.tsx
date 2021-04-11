import React from "react"

type ButtonProps = {
    readonly text: string
    readonly redirect: string
    readonly styles: {
        readonly [key: string]: string
    }
}

export const ButtonComponent: React.FC<ButtonProps> = ({
    text,
    redirect,
    styles
}: ButtonProps) => (
    <React.Fragment>
        <button
            onClick={() => (window.location.href = redirect)}
            id={styles.button__primary}
        >
            <span id={styles.button__primary_text}>{text}</span>
        </button>
    </React.Fragment>
)
