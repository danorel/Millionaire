import React, { useEffect } from "react"
import styles from "./Answer.module.css"

import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"

import { selectCorrectIndex, fetchCheckoutAsync } from "../../../playSlice"

type AnswerProps = {
    index: number
    text: string
    letter: string
}

export const AnswerComponent: React.FC<AnswerProps> = ({
    index,
    text,
    letter
}: AnswerProps) => {
    const dispatch = useAppDispatch()

    const correctIndex = useAppSelector(selectCorrectIndex)

    return (
        <React.Fragment>
            <div
                onClick={() => dispatch(fetchCheckoutAsync(index))}
                className={styles.div__grid_layout_container}
            >
                <div className={styles.div__grid_layout_item_left}>
                    <div className={styles.div__image_dash} />
                </div>
                <div className={styles.div__grid_layout_item_middle}>
                    <div
                        className={
                            correctIndex === index
                                ? styles.div__button_frame_success
                                : styles.div__button_frame
                        }
                    >
                        <div className={styles.div__grid_content_container}>
                            <div className={styles.div__grid_content_item_left}>
                                <span className={styles.button__span_header}>
                                    {letter}
                                </span>
                            </div>
                            <div
                                className={styles.div__grid_content_item_right}
                            >
                                <span className={styles.button__span_content}>
                                    {text}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.div__grid_layout_item_right}>
                    <div className={styles.div__image_dash} />
                </div>
            </div>
        </React.Fragment>
    )
}
