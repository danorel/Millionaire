import React from "react"
import styles from "./GridBox.module.css"

type GridBoxProps = {
    children: React.ReactNode
}

export const GridBox: React.FC<GridBoxProps> = ({ children }: GridBoxProps) => (
    <React.Fragment>
        <div className={styles.div__grid}>{children}</div>
    </React.Fragment>
)
