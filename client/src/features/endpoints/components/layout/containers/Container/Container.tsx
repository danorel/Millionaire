import React from "react"
import styles from "./Container.module.css"

type ContainerProps = {
    children: React.ReactNode
    background?: boolean
}

export const Container: React.FC<ContainerProps> = ({
    children,
    background = false
}: ContainerProps) => {
    return (
        <React.Fragment>
            <div
                style={{
                    background: background
                        ? "linear-gradient(to right bottom, #ffffff 50%, #fff3eb 50%)"
                        : "undefined"
                }}
                className={styles.container}
            >
                {children}
            </div>
        </React.Fragment>
    )
}
