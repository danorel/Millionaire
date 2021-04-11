import React from "react"
import styles from "./Start.module.css"
import srcStartHand from "../../assets/start_hand.svg"

import { ImageComponent, TitleComponent, ButtonComponent } from "./components"

type StartProps = {}

export const StartComponent: React.FC<StartProps> = () => (
    <React.Fragment>
        <div id={styles.div__container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <ImageComponent alt={"Millionaire"} src={srcStartHand} />
                </div>
                <div className={styles.column}>
                    <TitleComponent
                        value={"Who want's to become a millionaire?"}
                    />
                    <ButtonComponent path={"/play"} />
                </div>
            </div>
        </div>
    </React.Fragment>
)
