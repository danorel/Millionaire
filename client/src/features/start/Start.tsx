import React from "react"
import src__SVG_StartHand from "../../assets/containers/start_hand.svg"

import {
    FlexRow,
    FlexColumn,
    FlexColumnGroup
} from "../../components/layout/flex"
import {
    Container,
    VerticalContainer
} from "../../components/layout/containers"
import {
    ImageComponent,
    TitleComponent,
    ButtonComponent
} from "../../components/utils"

type StartProps = {}

export const StartComponent: React.FC<StartProps> = () => (
    <React.Fragment>
        <Container background>
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
                                text={"Who wants to be a millionaire?"}
                            />
                            <ButtonComponent
                                text={"Start"}
                                redirect={"/play"}
                            />
                        </FlexColumnGroup>
                    </FlexColumn>
                </FlexRow>
            </VerticalContainer>
        </Container>
    </React.Fragment>
)
