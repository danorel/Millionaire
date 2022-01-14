import React from "react"
import styles from "./Layout.module.css"

import { LevelComponent } from "./Level/Level"

type LevelProps = {
    step: number
    prizes: string[]
}

export const LevelsComponent: React.FC<LevelProps> = ({
    prizes,
    step
}: LevelProps) => (
    <React.Fragment>
        <div className={styles.div__container}>
            <div className={styles.grid__container}>
                <div className={styles.grid__item}>
                    {prizes.map((value, index) => (
                        <LevelComponent
                            key={index}
                            complete={prizes.length - 1 - index < step}
                            active={prizes.length - 1 - index === step}
                            text={value}
                        />
                    ))}
                </div>
            </div>
        </div>
    </React.Fragment>
)
