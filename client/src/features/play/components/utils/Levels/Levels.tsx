import React from "react"
import styles from "./Layout.module.css"

import { LevelComponent } from "./Level/Level"

type LevelProps = {
    step: number
}

const LevelsArrayValues = [
    "$1,000,000",
    "$500,000",
    "$250,000",
    "$125,000",
    "$64,000",
    "$32,000",
    "$16,000",
    "$8,000",
    "$4,000",
    "$2,000",
    "$1,000",
    "$500"
]

const length = LevelsArrayValues.length - 1

export const LevelsComponent: React.FC<LevelProps> = ({ step }: LevelProps) => (
    <React.Fragment>
        <div className={styles.div__container}>
            <div className={styles.grid__container}>
                <div className={styles.grid__item}>
                    {LevelsArrayValues.map((value, index) => (
                        <LevelComponent
                            complete={length - index < step}
                            active={length - index === step}
                            text={value}
                        />
                    ))}
                </div>
            </div>
        </div>
    </React.Fragment>
)
