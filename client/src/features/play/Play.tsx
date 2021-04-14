import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "react-router-dom"

import { useAppSelector, useAppDispatch } from "../../app/hooks"

import {
    fetchConfigAsync,
    selectStatus,
    selectPrizes,
    selectAnswersByStep,
    selectQuestionByStep
} from "./reducers/gameSlice"

import { selectStep, selectWinner } from "./reducers/actionSlice"

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

interface PlayProps extends RouteComponentProps {}

export const PlayComponent: React.FC<PlayProps> = (props) => {
    const [open, setOpen] = useState(true)

    const step = useAppSelector(selectStep)
    const status = useAppSelector(selectStatus)

    const prizes = useAppSelector(selectPrizes)
    const answers = useAppSelector((state) => selectAnswersByStep(state, step))
    const question = useAppSelector((state) =>
        selectQuestionByStep(state, step)
    )

    const winner = useAppSelector((state) => selectWinner(state, prizes.length))

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchConfigAsync())
        }
    }, [status, dispatch])

    useEffect(() => {
        if (winner) props.history.push("/over")
    }, [props.history, winner])

    const onClickOpen = (evt: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
        setOpen(evt.currentTarget.checked)

    if (status === "loading") return <React.Fragment />

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
                                    <LevelsComponent
                                        prizes={prizes}
                                        step={step}
                                    />
                                )}
                            </ViewGridBoxItemPrimary>
                            <ViewGridBoxItemSecondary>
                                <LevelsComponent prizes={prizes} step={step} />
                            </ViewGridBoxItemSecondary>
                        </ViewGridBox>
                    </LayoutGridItemBody>
                </LayoutGridBox>
            </LayoutContainer>
        </React.Fragment>
    )
}
