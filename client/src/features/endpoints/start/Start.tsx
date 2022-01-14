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

export const StartComponent: React.FC<any> = (props) => (
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
                        <ViewFlexColumnGroup>
                            <TitleComponent
                                text={"Who wants to be a millionaire?"}
                            />
                            <ButtonComponent
                                text={"Start"}
                                redirect={"/play"}
                            />
                        </ViewFlexColumnGroup>
                    </ViewFlexColumn>
                </ViewFlexRow>
            </LayoutVerticalContainer>
        </LayoutContainer>
    </React.Fragment>
)
