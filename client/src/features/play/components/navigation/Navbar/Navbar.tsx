import React from "react"
import styles from "./Navbar.module.css"

type NavbarProps = {
    open?: boolean
    onClick: (evt: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
}

export const Navbar: React.FC<NavbarProps> = ({
    open = true,
    onClick
}: NavbarProps) => (
    <React.Fragment>
        <label className={styles.container}>
            <input type="checkbox" onClick={onClick} />
            <span className={styles.toggle__container}>
                <span
                    className={
                        open
                            ? styles.toggle_button_open
                            : styles.toggle__button_close
                    }
                />
            </span>
        </label>
    </React.Fragment>
)
