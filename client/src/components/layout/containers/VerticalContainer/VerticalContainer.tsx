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
            <div className={styles.container__centrify}>{props.children}</div>
        </React.Fragment>
    )
}
