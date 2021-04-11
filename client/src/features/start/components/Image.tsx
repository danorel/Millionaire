import React from "react"

type ImageProps = {
    alt: string
    src: string
}

export const ImageComponent: React.FC<ImageProps> = ({
    src,
    alt
}: ImageProps) => (
    <React.Fragment>
        <img src={src} alt={alt} />
    </React.Fragment>
)
