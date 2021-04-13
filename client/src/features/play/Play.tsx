import React, { useState } from "react"
import styles from "./Play.module.css"

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

    const onClick = (evt: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
        setOpen(evt.currentTarget.checked)

    return (
        <React.Fragment>
            <div className={styles.div__container}>
                <Navbar open={open} onClick={onClick}>
                    <GridBoxContainer>
                        <GridBoxItemScreen>
                            <div className={styles.div__flex_screen}>
                                <QuestionComponent
                                    text={
                                        "How old your elder brother was 10 years before you was born, mate?"
                                    }
                                />
                                <AnswersComponent />
                            </div>
                        </GridBoxItemScreen>
                        <GridBoxItemLevels>
                            <LevelsComponent />
                        </GridBoxItemLevels>
                    </GridBoxContainer>
                </Navbar>
            </div>
        </React.Fragment>
    )
}
