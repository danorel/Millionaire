import React, { useEffect, useState } from "react"
import styles from "./Play.module.css"

import { useAppSelector, useAppDispatch } from "../../app/hooks"

import {
    fetchAnswersAsync,
    fetchQuestionAsync,
    selectStatus,
    selectAnswers,
    selectQuestion
} from "./reducers/playSlice"

import { selectStep } from "./reducers/actionSlice"

import {
    GridBoxItemScreen,
    GridBoxContainer,
    GridBoxItemLevels
} from "../../components/layout/grid"
import { QuestionComponent } from "./components/Question/Question"
import { AnswersComponent } from "./components/Answers/Answers"
import { LevelsComponent } from "./components/Levels/Levels"
import { Navbar } from "../../components/navigation/Navbar/Navbar"

type PlayProps = {}

export const PlayComponent: React.FC<PlayProps> = () => {
    const [open, setOpen] = useState(true)

    const step = useAppSelector(selectStep)

    const status = useAppSelector(selectStatus)
    const answers = useAppSelector(selectAnswers)
    const question = useAppSelector(selectQuestion)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchQuestionAsync())
            dispatch(fetchAnswersAsync())
        }
    }, [status, dispatch])

    const onClickOpen = (evt: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
        setOpen(evt.currentTarget.checked)

    return (
        <React.Fragment>
            <div className={styles.div__container}>
                <div className={styles.div__grid__magic}>
                    <div className={styles.div__grid_magic_up}>
                        <Navbar open={open} onClick={onClickOpen} />
                    </div>
                    <div className={styles.div__grid_magic_down}>
                        <GridBoxContainer>
                            <GridBoxItemScreen>
                                {open ? (
                                    <div className={styles.div__flex_screen}>
                                        <QuestionComponent text={question} />
                                        <AnswersComponent values={answers} />
                                    </div>
                                ) : (
                                    <LevelsComponent step={step} />
                                )}
                            </GridBoxItemScreen>
                            <GridBoxItemLevels>
                                <LevelsComponent step={step} />
                            </GridBoxItemLevels>
                        </GridBoxContainer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
