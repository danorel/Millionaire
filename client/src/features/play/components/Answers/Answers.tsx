import React, { useEffect } from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"

import styles from "./Layout.module.css"

import { useAppDispatch, useAppSelector } from "../../../../app/hooks"

import {
    selectFinish,
    selectSuccess,
    setDefaultIndex,
    setIncrementStep
} from "../../reducers/actionSlice"

import { ButtonIndex, Answer } from "MyModels"

import { AnswerComponent } from "./Answer/Answer"

interface AnswersProps extends RouteComponentProps {
    values: Answer[]
}

const LettersLeft = ["A", "B"]
const LettersRight = ["C", "D"]

const AnswersComponentNonRouted: React.FC<AnswersProps> = ({
    values,
    history
}: AnswersProps) => {
    const dispatch = useAppDispatch()

    const finish = useAppSelector(selectFinish)
    const success = useAppSelector(selectSuccess)

    useEffect(() => {
        if (finish) {
            setTimeout(() => {
                history.push("/summary")
            }, 3000)
        }
    }, [finish, dispatch])

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                dispatch(setIncrementStep())
                dispatch(setDefaultIndex())
            }, 3000)
        }
    }, [success, dispatch])

    return (
        <React.Fragment>
            <div className={styles.grid__container}>
                <div className={styles.grid__item_left}>
                    {values
                        .slice(0, 2)
                        .map((answer) => answer.text)
                        .map((value, index) => (
                            <AnswerComponent
                                index={index as ButtonIndex}
                                letter={LettersLeft[index]}
                                text={value}
                            />
                        ))}
                </div>
                <div className={styles.grid__item_right}>
                    {values
                        .slice(2, values.length)
                        .map((answer) => answer.text)
                        .map((value, index) => (
                            <AnswerComponent
                                index={(index + 2) as ButtonIndex}
                                letter={LettersRight[index]}
                                text={value}
                            />
                        ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export const AnswersComponent = withRouter(AnswersComponentNonRouted)
