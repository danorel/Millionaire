import React from "react"
import styles from "./Container.module.css"

type ContainerProps = {
    children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
    children
}: ContainerProps) => (
    <React.Fragment>
        <div className={styles.div__container}>{children}</div>
    </React.Fragment>
)
