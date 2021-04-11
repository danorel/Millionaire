import React from "react"

type ButtonProps = {
    readonly path: string
    readonly styles: {
        readonly [key: string]: string
    }
}

export const ButtonComponent: React.FC<ButtonProps> = ({
    path,
    styles
}: ButtonProps) => (
    <React.Fragment>
        <button
            onClick={() => (window.location.href = path)}
            id={styles.button__primary}
        >
            <span id={styles.button__primary_text}>Start</span>
        </button>
    </React.Fragment>
)
