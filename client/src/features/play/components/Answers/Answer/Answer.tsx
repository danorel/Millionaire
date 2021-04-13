import React from "react"
import styles from "./Answer.module.css"

import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"

import {
    selectStatus,
    selectCorrectIndex,
    fetchActionAsync
} from "../../../reducers/actionSlice"

import { Dash } from "./Dash/Dash"
import { Button } from "./Button/Button"

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

    const status = useAppSelector(selectStatus)
    const correctIndex = useAppSelector(selectCorrectIndex)

    return (
        <React.Fragment>
            <div
                onClick={() => dispatch(fetchActionAsync(index))}
                className={styles.div__grid_layout_container}
            >
                <div className={styles.div__grid_layout_item_left}>
                    <Dash />
                </div>
                <div className={styles.div__grid_layout_item_middle}>
                    <Button
                        text={text}
                        letter={letter}
                        success={correctIndex === index}
                    />
                </div>
                <div className={styles.div__grid_layout_item_right}>
                    <Dash />
                </div>
            </div>
        </React.Fragment>
    )
}
