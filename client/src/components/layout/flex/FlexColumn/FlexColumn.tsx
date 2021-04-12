import React from "react"
import styles from "./FlexColumn.module.css"

type FlexColumnProps = {
    children: React.ReactNode
}

export const FlexColumn: React.FC<FlexColumnProps> = (
    props: FlexColumnProps
) => {
    return (
        <React.Fragment>
            <div className={styles.column}>{props.children}</div>
        </React.Fragment>
    )
}
