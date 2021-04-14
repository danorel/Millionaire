import React from "react"
import styles from "./Frame.module.css"

type DashProps = {
    active: boolean
}

export const Dash: React.FC<DashProps> = ({ active }) => (
    <React.Fragment>
        <div
            className={
                active
                    ? styles.div__image_frame_active
                    : styles.div__image_frame
            }
        />
    </React.Fragment>
)
