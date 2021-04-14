import React from "react"
import styles from "./FlexColumnGroup.module.css"

type FlexColumnGroupProps = {
    children: React.ReactNode
}

export const FlexColumnGroup: React.FC<FlexColumnGroupProps> = ({
    children
}: FlexColumnGroupProps) => (
    <React.Fragment>
        <div className={styles.div__column}>{children}</div>
    </React.Fragment>
)
