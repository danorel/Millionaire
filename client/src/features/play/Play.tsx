import React from "react"
import styles from "./Play.module.css"

import {
    GridBoxItemScreen,
    GridBoxContainer,
    GridBoxItemLevels
} from "../../components/layout/grid"
import { QuestionComponent } from "./components/Question/Question"
import { AnswersComponent } from "./components/Answers/Answers"
import { LevelsComponent } from "./components/Levels/Levels"

type PlayProps = {}

export const PlayComponent: React.FC<PlayProps> = () => {
    return (
        <React.Fragment>
            <div className={styles.div__container}>
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
            </div>
        </React.Fragment>
    )
}
