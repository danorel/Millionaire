import React from "react"
import styles from "./Title.module.css"

import { ViewFlexRowGroup } from "../../layout/flex"

type TitleProps = {
    readonly text: string
    readonly header?: string
}

export const TitleComponent: React.FC<TitleProps> = ({
    text,
    header
}: TitleProps) =>
    header ? (
        <React.Fragment>
            <ViewFlexRowGroup>
                <span className={styles.span__primary_header}>{header}</span>
                <span className={styles.span__primary_text}>{text}</span>
            </ViewFlexRowGroup>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <span className={styles.span__primary_text}>{text}</span>
        </React.Fragment>
    )
