import React from "react"

import styles from "./Layout.module.css"

import { useAppDispatch, useAppSelector } from "../../../../../../app/hooks"

import {
    fetchActionAsync,
    selectStep,
    selectIndexFail,
    selectIndexLoading,
    selectIndicesCorrect,
    setIndexLoading
} from "../../../../reducers/actionSlice"

import { selectAnswerCorrectIndicesByStep } from "../../../../reducers/gameSlice"

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

    const step = useAppSelector(selectStep)

    const indicesCorrectByStep = useAppSelector((state) =>
        selectAnswerCorrectIndicesByStep(state, step)
    )

    const indexFail = useAppSelector(selectIndexFail)
    const indexLoading = useAppSelector(selectIndexLoading)
    const indicesCorrect = useAppSelector(selectIndicesCorrect)

    return (
        <React.Fragment>
            <div
                onClick={() => {
                    dispatch(setIndexLoading(index))
                    dispatch(
                        fetchActionAsync({
                            indices: indicesCorrectByStep,
                            success: indicesCorrectByStep.includes(index)
                        })
                    )
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
                        success={indicesCorrect.includes(index)}
                    />
                </div>
                <div className={styles.div__grid_layout_item_right}>
                    <Dash />
                </div>
            </div>
        </React.Fragment>
    )
}
