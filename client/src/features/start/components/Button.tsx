import styles from "../Start.module.css"
import React from "react"

type ButtonProps = {
    path: string
}

export const ButtonComponent: React.FC<ButtonProps> = ({
    path
}: ButtonProps) => (
    <React.Fragment>
        <button
            onClick={() => (window.location.href = path)}
            id={styles.button__primary}
        >
            Start
        </button>
    </React.Fragment>
)
