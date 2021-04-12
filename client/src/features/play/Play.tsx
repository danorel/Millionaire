import React from "react"

import { Container } from "../../components/layout/containers"
import {
    GridBoxScreen,
    GridBoxLayout,
    GridBoxLevels
} from "../../components/layout/grid"
import { QuestionComponent } from "./components/Question/Question"
import { AnswersComponent } from "./components/Answers/Answers"

type PlayProps = {}

export const PlayComponent: React.FC<PlayProps> = () => {
    return (
        <React.Fragment>
            <Container>
                <GridBoxLayout>
                    <GridBoxScreen>
                        <QuestionComponent />
                        <AnswersComponent />
                    </GridBoxScreen>
                    <GridBoxLevels>Something to the right</GridBoxLevels>
                </GridBoxLayout>
            </Container>
        </React.Fragment>
    )
}
