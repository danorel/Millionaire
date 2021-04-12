import React from "react"
import styles from "./FlexColumn.module.css"

type FlexColumnProps = {
    children: React.ReactNode
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "start"
        | "end"
        | "left"
        | "right"
        | "safe"
        | "unsafe"
}

export const FlexColumn: React.FC<FlexColumnProps> = ({
    children,
    justifyContent = "space-evenly"
}: FlexColumnProps) => (
    <React.Fragment>
        <div
            className={styles.column}
            style={{
                justifyContent: justifyContent
            }}
        >
            {children}
        </div>
    </React.Fragment>
)
