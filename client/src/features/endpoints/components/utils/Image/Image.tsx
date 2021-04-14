import React from "react"
import styles from "./Image.module.css"

type ImageProps = {
    readonly alt: string
    readonly src: string
}

export const ImageComponent: React.FC<ImageProps> = ({
    src,
    alt
}: ImageProps) => (
    <React.Fragment>
        <img src={src} alt={alt} className={styles.img__primary} />
    </React.Fragment>
)
