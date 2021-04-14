import React from "react"
import styles from "./FlexColumnGroup.module.css"

type FlexColumnGroupProps = {
    children: React.ReactNode
}

export const FlexColumnGroup: React.FC<FlexColumnGroupProps> = ({
    children
}: FlexColumnGroupProps) => (
    <React.Fragment>
        <div className={styles.column__group}>{children}</div>
    </React.Fragment>
)
