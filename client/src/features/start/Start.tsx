import React from "react"
import styles from "./Start.module.css"
import srcStartHand from "../../assets/start_hand.svg"

import { ImageComponent, TitleComponent, ButtonComponent } from "./components"

type StartProps = {}

export const StartComponent: React.FC<StartProps> = () => (
    <React.Fragment>
        <div id={styles.div__container}>
            <div id={styles.div__container_centrify}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <ImageComponent
                            styles={styles}
                            alt={"Millionaire"}
                            src={srcStartHand}
                        />
                    </div>
                    <div className={styles.column}>
                        <TitleComponent
                            styles={styles}
                            text={"Who wants to be a millionaire?"}
                        />
                        <ButtonComponent
                            styles={styles}
                            text={"Start"}
                            redirect={"/play"}
                        />
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)
