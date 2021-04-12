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
    justifyContent = "center"
}: FlexColumnProps) => (
    <React.Fragment>
        <div
            style={
                {
                    // justifyContent: justifyContent
                }
            }
            className={styles.column}
        >
            {children}
        </div>
    </React.Fragment>
)
