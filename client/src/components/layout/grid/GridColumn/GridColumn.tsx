import React from "react"

type GridColumnProps = {
    children: React.ReactNode
}

export const GridColumn: React.FC<GridColumnProps> = ({
    children
}: GridColumnProps) => <React.Fragment>{children}</React.Fragment>
