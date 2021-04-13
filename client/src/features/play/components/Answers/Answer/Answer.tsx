import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"

import styles from "./Answer.module.css"

import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"

import {
    fetchActionAsync,
    selectIndexCorrect,
    selectIndexFail,
    selectIndexLoading,
    setLoadingIndex
} from "../../../reducers/actionSlice"

import { ButtonIndex } from "MyModels"

import { Dash } from "./Dash/Dash"
import { Button } from "./Button/Button"

type AnswerProps = {
    index: ButtonIndex
    text: string
    letter: string
}

export const AnswerComponent: React.FC<AnswerProps> = ({
    index,
    text,
    letter
}: AnswerProps) => {
    const dispatch = useAppDispatch()

    const indexFail = useAppSelector(selectIndexFail)
    const indexCorrect = useAppSelector(selectIndexCorrect)
    const indexLoading = useAppSelector(selectIndexLoading)

    return (
        <React.Fragment>
            <div
                onClick={() => {
                    dispatch(setLoadingIndex(index))
                    dispatch(fetchActionAsync(index))
                }}
                className={styles.div__grid_layout_container}
            >
                <div className={styles.div__grid_layout_item_left}>
                    <Dash />
                </div>
                <div className={styles.div__grid_layout_item_middle}>
                    <Button
                        text={text}
                        letter={letter}
                        fail={indexFail === index}
                        loading={indexLoading === index}
                        success={indexCorrect === index}
                    />
                </div>
                <div className={styles.div__grid_layout_item_right}>
                    <Dash />
                </div>
            </div>
        </React.Fragment>
    )
}
