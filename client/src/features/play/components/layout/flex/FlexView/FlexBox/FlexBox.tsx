import React from "react"
import styles from "./FlexBox.module.css"

type FlexBoxProps = {
    children: React.ReactNode
}

export const FlexBox: React.FC<FlexBoxProps> = ({ children }: FlexBoxProps) => (
    <React.Fragment>
        <div className={styles.div__flexbox}>{children}</div>
    </React.Fragment>
)
