import React from "react"
import src__SVG_Dash from "../../../../../assets/dash.svg"
import styles from "./Answer.module.css"

type AnswerProps = {
    text: string
    letter: string
}

export const AnswerComponent: React.FC<AnswerProps> = ({
    text,
    letter
}: AnswerProps) => (
    <React.Fragment>
        <div className={styles.div__grid_layout_container}>
            <div className={styles.div__grid_layout_item_left}>
                <img alt={"Dash"} src={src__SVG_Dash} />
            </div>
            <div className={styles.div__grid_layout_item_middle}>
                <div className={styles.div__button_frame}>
                    <div className={styles.div__grid_content_container}>
                        <div className={styles.div__grid_content_item_left}>
                            <span className={styles.button__span_header}>
                                {letter}
                            </span>
                        </div>
                        <div className={styles.div__grid_content_item_right}>
                            <span className={styles.button__span_content}>
                                {text}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.div__grid_layout_item_right}>
                <img alt={"Dash"} src={src__SVG_Dash} />
            </div>
        </div>
    </React.Fragment>
)