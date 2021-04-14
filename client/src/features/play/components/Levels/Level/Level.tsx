import React from "react"
import styles from "./Layout.module.css"

import { Dash } from "./Dash/Dash"
import { Button } from "./Button/Button"

type LevelProps = {
    text: string
    active?: boolean
    complete?: boolean
}

export const LevelComponent: React.FC<LevelProps> = ({
    text,
    active = false,
    complete = false
}: LevelProps) => (
    <React.Fragment>
        <div className={styles.div__grid_layout_container}>
            <div className={styles.div__grid_layout_item_left}>
                <Dash active={active} />
            </div>
            <div className={styles.div__grid_layout_item_middle}>
                <Button text={text} active={active} complete={complete} />
            </div>
            <div className={styles.div__grid_layout_item_right}>
                <Dash active={active} />
            </div>
        </div>
    </React.Fragment>
)
