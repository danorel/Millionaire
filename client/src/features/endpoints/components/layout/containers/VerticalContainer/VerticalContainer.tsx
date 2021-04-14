import React from "react"
import styles from "./VerticalContainer.module.css"

type VerticalContainerProps = {
    children: React.ReactNode
}

export const VerticalContainer: React.FC<VerticalContainerProps> = (
    props: VerticalContainerProps
) => {
    return (
        <React.Fragment>
            <div className={styles.div__container}>{props.children}</div>
        </React.Fragment>
    )
}
