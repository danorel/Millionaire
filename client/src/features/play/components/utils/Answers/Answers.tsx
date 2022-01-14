import React, { useEffect } from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"

import styles from "./Layout.module.css"

import { useAppDispatch, useAppSelector } from "../../../../../app/hooks"

import {
    selectFinish,
    selectSuccess,
    setIndicesDefault,
    setIncrementStep
} from "../../../reducers/actionSlice"

import { ButtonIndex, Answer } from "MyModels"

import { AnswerComponent } from "./Answer/Answer"

interface AnswersProps extends RouteComponentProps {
    values: Answer[]
}

const Letters = ["A", "B", "C", "D"]
const LettersStyles = [
    styles.grid__item_A,
    styles.grid__item_B,
    styles.grid__item_C,
    styles.grid__item_D
]

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
                history.push("/over")
            }, 3000)
        }
    }, [finish, dispatch, history])

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                dispatch(setIncrementStep())
                dispatch(setIndicesDefault())
            }, 3000)
        }
    }, [success, dispatch])

    return (
        <React.Fragment>
            <div className={styles.grid__container}>
                {values.map((value, index) => (
                    <div key={index} className={LettersStyles[index]}>
                        <AnswerComponent
                            index={index as ButtonIndex}
                            letter={Letters[index]}
                            text={values[index].text}
                        />
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export const AnswersComponent = withRouter(AnswersComponentNonRouted)
