import React from "react"
import styles from "./Level.module.css"

type LevelProps = {
    text: string
    active?: boolean
}

export const LevelComponent: React.FC<LevelProps> = ({
    text,
    active = false
}: LevelProps) => (
    <React.Fragment>
        <div className={styles.div__grid_layout_container}>
            <div className={styles.div__grid_layout_item_left}>
                <div
                    className={
                        active
                            ? styles.div__image_dash_active
                            : styles.div__image_dash
                    }
                />
            </div>
            <div className={styles.div__grid_layout_item_middle}>
                <div
                    className={
                        active
                            ? styles.div__button_frame_active
                            : styles.div__button_frame
                    }
                >
                    <div className={styles.div__grid_content_container}>
                        <div className={styles.div__grid_content_item}>
                            <span className={styles.button__span_content}>
                                {text}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.div__grid_layout_item_right}>
                <div
                    className={
                        active
                            ? styles.div__image_dash_active
                            : styles.div__image_dash
                    }
                />
            </div>
        </div>
    </React.Fragment>
)
