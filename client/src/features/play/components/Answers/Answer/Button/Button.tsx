import React from "react"
import stylesFrame from "./stylesheets/Frame.module.css"
import stylesLayout from "./stylesheets/Layout.module.css"
import stylesContent from "./stylesheets/Content.module.css"

type ButtonProps = {
    text: string
    letter: string
    fail: boolean
    success: boolean
    loading: boolean
}

export const Button: React.FC<ButtonProps> = ({
    text,
    letter,
    fail,
    success,
    loading
}) => (
    <React.Fragment>
        <div
            className={
                loading
                    ? stylesFrame.div__button_frame_loading
                    : fail
                    ? stylesFrame.div__button_frame_fail
                    : success
                    ? stylesFrame.div__button_frame_success
                    : stylesFrame.div__button_frame
            }
        >
            <div className={stylesLayout.div__grid_content_container}>
                <div className={stylesLayout.div__grid_content_item_left}>
                    <span className={stylesContent.button__span_header}>
                        {letter}
                    </span>
                </div>
                <div className={stylesLayout.div__grid_content_item_right}>
                    <span className={stylesContent.button__span_content}>
                        {text}
                    </span>
                </div>
            </div>
        </div>
    </React.Fragment>
)
