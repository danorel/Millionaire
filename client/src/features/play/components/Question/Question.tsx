import React from "react"
import stylesLayout from "./stylesheets/Layout.module.css"
import stylesContent from "./stylesheets/Content.module.css"

type QuestionProps = {
    text: string
}

export const QuestionComponent: React.FC<QuestionProps> = ({
    text
}: QuestionProps) => (
    <React.Fragment>
        <div className={stylesLayout.div__grid_layout}>
            <div className={stylesLayout.div__grid_item}>
                <span className={stylesContent.span__primary}>{text}</span>
            </div>
        </div>
    </React.Fragment>
)
