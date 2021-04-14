import React, { useEffect, useState } from "react"
import styles from "./Layout.module.css"

import { useAppSelector, useAppDispatch } from "../../app/hooks"

import {
    fetchAnswersAsync,
    fetchQuestionAsync,
    selectStatus,
    selectAnswers,
    selectQuestion
} from "./reducers/playSlice"

import { selectStep } from "./reducers/actionSlice"

import { LayoutContainer } from "./components/layout/container"

import {
    LayoutGridBox,
    LayoutGridItemBody,
    LayoutGridItemHeader
} from "./components/layout/grid"

import {
    GridBoxItemScreen,
    GridBoxContainer,
    GridBoxItemLevels
} from "../endpoints/components/layout/grid"

import {
    LevelsComponent,
    AnswersComponent,
    QuestionComponent
} from "./components"

import { Navbar } from "./components/navigation/Navbar/Navbar"

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
            <LayoutContainer>
                <LayoutGridBox>
                    <LayoutGridItemHeader>
                        <Navbar open={open} onClick={onClickOpen} />
                    </LayoutGridItemHeader>
                    <LayoutGridItemBody>
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
                    </LayoutGridItemBody>
                </LayoutGridBox>
            </LayoutContainer>
        </React.Fragment>
    )
}
