import React from "react"
import styles from "./GridBox.module.css"

type GridBoxProps = {
    children: React.ReactNode
}

export const GridBoxContainer: React.FC<GridBoxProps> = ({
    children
}: GridBoxProps) => (
    <React.Fragment>
        <div className={styles.grid__box_layout}>{children}</div>
    </React.Fragment>
)

export const GridBoxItemScreen: React.FC<GridBoxProps> = ({
    children
}: GridBoxProps) => (
    <React.Fragment>
        <div className={styles.grid__box_screen}>{children}</div>
    </React.Fragment>
)

export const GridBoxItemLevels: React.FC<GridBoxProps> = ({
    children
}: GridBoxProps) => (
    <React.Fragment>
        <div className={styles.grid__box_levels}>{children}</div>
    </React.Fragment>
)
