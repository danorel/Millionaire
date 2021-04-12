import React from "react"
import src__SVG_StartHand from "../../assets/start_hand.svg"

import { FlexRow, FlexColumn } from "../../components/layout/flex"
import {
    Container,
    VerticalContainer
} from "../../components/layout/containers"
import {
    ImageComponent,
    TitleComponent,
    ButtonComponent
} from "../../components/utils"

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
                        <TitleComponent
                            text={"$8,000 earned"}
                            header={"Total score:"}
                        />
                        <ButtonComponent
                            text={"Try again"}
                            redirect={"/play"}
                        />
                    </FlexColumn>
                </FlexRow>
            </VerticalContainer>
        </Container>
    </React.Fragment>
)
