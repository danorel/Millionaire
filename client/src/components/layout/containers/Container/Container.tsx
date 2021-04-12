import React from "react"
import styles from "./Container.module.css"

type ContainerProps = {
    children: React.ReactNode
    backgroundColor?: string
}

export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    return (
        <React.Fragment>
            <div className={styles.container}>{props.children}</div>
        </React.Fragment>
    )
}

export const ColoredContainer: React.FC<ContainerProps> = (
    props: ContainerProps
) => {
    return (
        <React.Fragment>
            <div className={styles.container__background}>{props.children}</div>
        </React.Fragment>
    )
}
