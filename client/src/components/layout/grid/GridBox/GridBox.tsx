import React from "react"
import styles from "./GridBox.module.css"

type GridBoxProps = {
    children: React.ReactNode
}

export const GridBoxLayout: React.FC<GridBoxProps> = ({
    children
}: GridBoxProps) => (
    <React.Fragment>
        <div className={styles.grid__box_layout}>{children}</div>
    </React.Fragment>
)

export const GridBoxScreen: React.FC<GridBoxProps> = ({
    children
}: GridBoxProps) => (
    <React.Fragment>
        <div className={styles.grid__box_screen}>{children}</div>
    </React.Fragment>
)

export const GridBoxLevels: React.FC<GridBoxProps> = ({
    children
}: GridBoxProps) => (
    <React.Fragment>
        <div className={styles.grid__box_levels}>{children}</div>
    </React.Fragment>
)
