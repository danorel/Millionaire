import React from "react"
import styles from "./Container.module.css"

type PlayContainerProps = {
    children: React.ReactNode
}

export const Container: React.FC<PlayContainerProps> = ({
    children
}: PlayContainerProps) => (
    <React.Fragment>
        <div className={styles.div__container}>{children}</div>
    </React.Fragment>
)
