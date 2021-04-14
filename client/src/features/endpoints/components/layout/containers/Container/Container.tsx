import React from "react"
import styles from "./Container.module.css"

type ContainerProps = {
    children: React.ReactNode
    background?: boolean
    backgroundColor?: string
}

export const Container: React.FC<ContainerProps> = ({
    children,
    background = false,
    backgroundColor = "linear-gradient(to right bottom, #ffffff 50%, #fff3eb 50%)"
}: ContainerProps) => {
    return (
        <React.Fragment>
            <div
                style={{
                    background: background ? backgroundColor : "undefined"
                }}
                className={styles.container}
            >
                {children}
            </div>
        </React.Fragment>
    )
}
