import React from "react"
import src__SVG_StartHand from "../../../assets/containers/start_hand.svg"

import { useAppDispatch, useAppSelector } from "../../../app/hooks"

import { selectPrizeByStep, selectPrizes } from "../../play/reducers/gameSlice"

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
import { selectStep } from "../../play/reducers/actionSlice"

export const OverComponent: React.FC<any> = () => {
    const step = useAppSelector(selectStep)

    const prizes = useAppSelector(selectPrizes)
    const prize = useAppSelector((state) =>
        selectPrizeByStep(state, prizes.length - 1 - (step - 1))
    )

    return (
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
                                    text={`${prize} earned`}
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
}
