import React from "react"
import styles from "./Button.module.css"

type ButtonProps = {
    readonly text: string
    readonly redirect: string
}

export const ButtonComponent: React.FC<ButtonProps> = ({
    text,
    redirect
}: ButtonProps) => (
    <React.Fragment>
        <button
            onClick={() => (window.location.href = redirect)}
            className={styles.button__primary}
        >
            <span className={styles.button__primary_text}>{text}</span>
        </button>
    </React.Fragment>
)
