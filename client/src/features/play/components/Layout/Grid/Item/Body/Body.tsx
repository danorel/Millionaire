import React from "react"
import styles from "./Body.module.css"

type GridItemBodyProps = {
    children: React.ReactNode
}

export const GridItemBody: React.FC<GridItemBodyProps> = ({
    children
}: GridItemBodyProps) => (
    <React.Fragment>
        <div className={styles.div__grid_item}>{children}</div>
    </React.Fragment>
)
