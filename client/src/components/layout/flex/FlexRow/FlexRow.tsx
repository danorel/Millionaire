import React from "react"
import styles from "./FlexRow.module.css"

type FlexRowProps = {
    children: React.ReactNode
}

export const FlexRow: React.FC<FlexRowProps> = (props: FlexRowProps) => {
    return (
        <React.Fragment>
            <div className={styles.row}>{props.children}</div>
        </React.Fragment>
    )
}
