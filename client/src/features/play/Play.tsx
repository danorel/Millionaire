import React, { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import styles from "./Play.module.css"

import { useAppSelector, useAppDispatch } from "../../app/hooks"

import {
    fetchAnswersAsync,
    fetchQuestionAsync,
    selectStatus,
    selectFinish,
    selectAnswers,
    selectQuestion
} from "./reducers/playSlice"

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

    const status = useAppSelector(selectStatus)
    const finish = useAppSelector(selectFinish)
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

    if (finish) return <Redirect to={"/summary"} />

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
                                    <LevelsComponent />
                                )}
                            </GridBoxItemScreen>
                            <GridBoxItemLevels>
                                <LevelsComponent />
                            </GridBoxItemLevels>
                        </GridBoxContainer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
