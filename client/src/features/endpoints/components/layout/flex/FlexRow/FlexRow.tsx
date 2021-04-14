import React from "react"
import styles from "./FlexRow.module.css"

type FlexRowProps = {
    children: React.ReactNode
}

export const FlexRow: React.FC<FlexRowProps> = ({ children }: FlexRowProps) => (
    <React.Fragment>
        <div className={styles.div__row}>{children}</div>
    </React.Fragment>
)
