import React from "react"
import src__SVG_StartHand from "../../../assets/containers/start_hand.svg"

import {
    ViewFlexRow,
    ViewFlexColumn,
    ViewFlexColumnGroup
} from "../components/layout/flex"

import {
    LayoutContainer,
    LayoutVerticalContainer
} from "../components/layout/containers"

import {
    TitleComponent,
    ImageComponent,
    ButtonComponent
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
                        <ViewFlexColumnGroup>
                            <TitleComponent
                                text={"$8,000 earned"}
                                header={"Total score:"}
                            />
                            <ButtonComponent
                                text={"Try again"}
                                redirect={"/play"}
                            />
                        </ViewFlexColumnGroup>
                    </ViewFlexColumn>
                </ViewFlexRow>
            </LayoutVerticalContainer>
        </LayoutContainer>
    </React.Fragment>
)
