import React from "react"
import styles from "./FlexRowGroup.module.css"

type FlexRowGroupProps = {
    children: React.ReactNode
}

export const FlexRowGroup: React.FC<FlexRowGroupProps> = ({
    children
}: FlexRowGroupProps) => (
    <React.Fragment>
        <div className={styles.row__group}>{children}</div>
    </React.Fragment>
)
