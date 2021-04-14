import React from "react"
import stylesFrame from "./stylesheets/Frame.module.css"
import stylesLayout from "./stylesheets/Layout.module.css"
import stylesContent from "./stylesheets/Content.module.css"

type ButtonProps = {
    text: string
    active: boolean
    complete: boolean
}

export const Button: React.FC<ButtonProps> = ({
    text,
    active,
    complete
}: ButtonProps) => (
    <React.Fragment>
        <div
            className={
                active
                    ? stylesFrame.div__button_frame_active
                    : stylesFrame.div__button_frame
            }
        >
            <div className={stylesLayout.div__grid_content_container}>
                <div className={stylesLayout.div__grid_content_item}>
                    <span
                        className={
                            complete
                                ? stylesContent.button__span_content_complete
                                : active
                                ? stylesContent.button__span_content_active
                                : stylesContent.button__span_content
                        }
                    >
                        {text}
                    </span>
                </div>
            </div>
        </div>
    </React.Fragment>
)
