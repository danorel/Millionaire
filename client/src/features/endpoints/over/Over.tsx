import React from "react"
import src__SVG_StartHand from "../../../assets/containers/start_hand.svg"

import {
    LayoutContainer,
    LayoutVerticalContainer
} from "../components/layout/containers"

import {
    ViewFlexRow,
    ViewFlexColumn,
    FlexColumnGroup
} from "../components/layout/flex"

import {
    ButtonComponent,
    ImageComponent,
    TitleComponent
} from "../components/utils"

type OverProps = {}

export const OverComponent: React.FC<OverProps> = () => (
    <React.Fragment>
        <LayoutContainer>
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
                                text={"$8,000 earned"}
                                header={"Total score:"}
                            />
                            <ButtonComponent
                                text={"Try again"}
                                redirect={"/play"}
                            />
                        </FlexColumnGroup>
                    </ViewFlexColumn>
                </ViewFlexRow>
            </LayoutVerticalContainer>
        </LayoutContainer>
    </React.Fragment>
)
