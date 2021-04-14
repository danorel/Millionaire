import React from "react"
import src__SVG_StartHand from "../../../assets/containers/start_hand.svg"

import { Container, VerticalContainer } from "../components/layout/containers"

import { FlexColumn, FlexColumnGroup, FlexRow } from "../components/layout/flex"

import {
    ButtonComponent,
    ImageComponent,
    TitleComponent
} from "../components/utils"

type OverProps = {}

export const OverComponent: React.FC<OverProps> = () => (
    <React.Fragment>
        <Container>
            <VerticalContainer>
                <FlexRow>
                    <FlexColumn>
                        <ImageComponent
                            alt={"Millionaire"}
                            src={src__SVG_StartHand}
                        />
                    </FlexColumn>
                    <FlexColumn>
                        <FlexColumnGroup>
                            <TitleComponent
                                text={"$8,000 earned"}
                                header={"Total score:"}
                            />
                            <ButtonComponent
                                text={"Try again"}
                                redirect={"/play"}
                            />
                        </FlexColumnGroup>
                    </FlexColumn>
                </FlexRow>
            </VerticalContainer>
        </Container>
    </React.Fragment>
)
