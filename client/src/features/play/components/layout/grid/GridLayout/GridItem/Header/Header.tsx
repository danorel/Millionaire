import React from "react"
import styles from "./Header.module.css"

type GridItemHeaderProps = {
    children: React.ReactNode
}

export const GridItemHeader: React.FC<GridItemHeaderProps> = ({
    children
}: GridItemHeaderProps) => (
    <React.Fragment>
        <div className={styles.div__grid_item}>{children}</div>
    </React.Fragment>
)
