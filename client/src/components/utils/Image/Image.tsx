import React from "react"

type ImageProps = {
    readonly alt: string
    readonly src: string
    readonly styles: {
        readonly [key: string]: string
    }
}

export const ImageComponent: React.FC<ImageProps> = ({
    src,
    alt,
    styles
}: ImageProps) => (
    <React.Fragment>
        <img src={src} alt={alt} id={styles.img__primary} />
    </React.Fragment>
)
