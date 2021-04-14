import React from "react"
import styles from "./FlexColumn.module.css"

type FlexColumnProps = {
    children: React.ReactNode
}

export const FlexColumn: React.FC<FlexColumnProps> = ({
    children
}: FlexColumnProps) => (
    <React.Fragment>
        <div className={styles.column}>{children}</div>
    </React.Fragment>
)
