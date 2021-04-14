import React, { useEffect, useState } from "react"

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
    ViewGridBox,
    ViewGridBoxItemPrimary,
    ViewGridBoxItemSecondary
} from "./components/layout/grid"

import { ViewFlexBox } from "./components/layout/flex"

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
                        <ViewGridBox>
                            <ViewGridBoxItemPrimary>
                                {open ? (
                                    <ViewFlexBox>
                                        <QuestionComponent text={question} />
                                        <AnswersComponent values={answers} />
                                    </ViewFlexBox>
                                ) : (
                                    <LevelsComponent step={step} />
                                )}
                            </ViewGridBoxItemPrimary>
                            <ViewGridBoxItemSecondary>
                                <LevelsComponent step={step} />
                            </ViewGridBoxItemSecondary>
                        </ViewGridBox>
                    </LayoutGridItemBody>
                </LayoutGridBox>
            </LayoutContainer>
        </React.Fragment>
    )
}
