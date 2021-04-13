import React from "react"
import styles from "./stylesheets/Dash.module.css"

type DashProps = {}

export const Dash: React.FC<DashProps> = ({}) => (
    <React.Fragment>
        <div className={styles.div__image_dash} />
    </React.Fragment>
)
