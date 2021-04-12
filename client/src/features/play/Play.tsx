import React from "react"
import styles from "./Play.module.css"

import { Container } from "../../components/layout/containers"
import {
    GridBoxItemScreen,
    GridBoxContainer,
    GridBoxItemLevels
} from "../../components/layout/grid"
import { QuestionComponent } from "./components/Question/Question"
import { AnswersComponent } from "./components/Answers/Answers"

type PlayProps = {}

export const PlayComponent: React.FC<PlayProps> = () => {
    return (
        <React.Fragment>
            <Container>
                <GridBoxContainer>
                    <GridBoxItemScreen>
                        <div className={styles.div__flex_screen}>
                            <QuestionComponent />
                            <AnswersComponent />
                        </div>
                    </GridBoxItemScreen>
                    <GridBoxItemLevels>
                        Something to the right
                    </GridBoxItemLevels>
                </GridBoxContainer>
            </Container>
        </React.Fragment>
    )
}
