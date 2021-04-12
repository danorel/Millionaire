import React from "react"
import styles from "./Title.module.css"

import { FlexRowGroup } from "../../layout/flex"

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
            <FlexRowGroup>
                <span className={styles.span__primary_header}>{header}</span>
                <span className={styles.span__primary_text}>{text}</span>
            </FlexRowGroup>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <span className={styles.span__primary_text}>{text}</span>
        </React.Fragment>
    )
