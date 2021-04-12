import React from "react"
import styles from "./Start.module.css"
import srcStartHand from "../../assets/start_hand.svg"

import { FlexRow, FlexColumn } from "../../components/alignment/flex"
import {
    ImageComponent,
    TitleComponent,
    ButtonComponent
} from "../../components/utils"

type StartProps = {}

export const StartComponent: React.FC<StartProps> = () => (
    <React.Fragment>
        <div id={styles.div__container}>
            <div id={styles.div__container_centrify}>
                <FlexRow>
                    <FlexColumn>
                        <ImageComponent
                            styles={styles}
                            alt={"Millionaire"}
                            src={srcStartHand}
                        />
                    </FlexColumn>
                    <FlexColumn>
                        <TitleComponent
                            styles={styles}
                            text={"Who wants to be a millionaire?"}
                        />
                        <ButtonComponent
                            styles={styles}
                            text={"Start"}
                            redirect={"/play"}
                        />
                    </FlexColumn>
                </FlexRow>
            </div>
        </div>
    </React.Fragment>
)
