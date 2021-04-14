import React from "react"
import styles from "./Frame.module.css"

type DashProps = {}

export const Dash: React.FC<DashProps> = ({}) => (
    <React.Fragment>
        <div className={styles.div__image_frame} />
    </React.Fragment>
)
