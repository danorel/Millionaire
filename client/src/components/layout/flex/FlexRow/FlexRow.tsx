import React from "react"
import styles from "./FlexRow.module.css"

type FlexRowProps = {
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

export const FlexRow: React.FC<FlexRowProps> = ({
    children,
    justifyContent = "space-evenly"
}: FlexRowProps) => (
    <React.Fragment>
        <div
            className={styles.row}
            style={{
                justifyContent: justifyContent
            }}
        >
            {children}
        </div>
    </React.Fragment>
)
