import React from "react"
import src__SVG_StartHand from "../../../assets/containers/start_hand.svg"

import {
    ViewFlexRow,
    ViewFlexColumn,
    FlexColumnGroup
} from "../components/layout/flex"

import {
    LayoutContainer,
    LayoutVerticalContainer
} from "../components/layout/containers"

import {
    ImageComponent,
    TitleComponent,
    ButtonComponent
} from "../components/utils"

type StartProps = {}

export const StartComponent: React.FC<StartProps> = (props: StartProps) => (
    <React.Fragment>
        <LayoutContainer background>
            <LayoutVerticalContainer>
                <ViewFlexRow>
                    <ViewFlexColumn>
                        <ImageComponent
                            alt={"Millionaire"}
                            src={src__SVG_StartHand}
                        />
                    </ViewFlexColumn>
                    <ViewFlexColumn>
                        <FlexColumnGroup>
                            <TitleComponent
                                text={"Who wants to be a millionaire?"}
                            />
                            <ButtonComponent
                                text={"Start"}
                                redirect={"/play"}
                            />
                        </FlexColumnGroup>
                    </ViewFlexColumn>
                </ViewFlexRow>
            </LayoutVerticalContainer>
        </LayoutContainer>
    </React.Fragment>
)
