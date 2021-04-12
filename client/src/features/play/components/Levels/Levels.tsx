import React from "react"
import styles from "./Levels.module.css"

import { LevelComponent } from "./Level/Level"

type LevelProps = {}

export const LevelsComponent: React.FC<LevelProps> = (props: LevelProps) => (
    <React.Fragment>
        <div className={styles.div__container}>
            <div className={styles.grid__container}>
                <div className={styles.grid__item}>
                    <LevelComponent text={"$1,000,000"} />
                    <LevelComponent text={"$500,000"} />
                    <LevelComponent text={"$250,000"} />
                    <LevelComponent text={"$125,000"} />
                    <LevelComponent text={"$64,000"} />
                    <LevelComponent text={"$32,000"} />
                    <LevelComponent text={"$16,000"} />
                    <LevelComponent text={"$8,000"} />
                    <LevelComponent text={"$4,000"} />
                    <LevelComponent text={"$2,000"} />
                    <LevelComponent text={"$1,000"} />
                    <LevelComponent text={"$500"} />
                </div>
            </div>
        </div>
    </React.Fragment>
)
