import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';

export const Navbar = () => {
    const [hamburgerActive, setHamburgerActive] = useState(false);

    const handleHamburgerClick = () => {
        if (hamburgerActive) {
            setHamburgerActive(false);
        } else setHamburgerActive(true);
    };
    return (
        <nav className={styles.component}>
            <button
                className={cx(styles.hamburger, {
                    [styles.show]: hamburgerActive,
                })}
                id="hamburger"
                onClick={handleHamburgerClick}
            >
                {hamburgerActive ? (
                    <FontAwesomeIcon icon={faXmark} />
                ) : (
                    <FontAwesomeIcon icon={faBars} />
                )}
            </button>
            <ul
                className={cx(styles.navUl, {
                    [styles.show]: hamburgerActive,
                })}
                id="navUl"
            >
                <li className={styles.navBarItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navBarItem}>
                    <Link href="/books">Books</Link>
                </li>
                <li className={styles.navBarItem}>
                    <Link href="/album">Album</Link>
                </li>
                <li className={styles.navBarItem}>
                    <Link href="/radio">Radio</Link>
                </li>
                <li className={styles.navBarItem}>
                    <Link href="/theatre">Theatre</Link>
                </li>
                <li className={styles.navBarItem}>
                    <Link href="/events">Events</Link>
                </li>
                <li className={styles.navBarItem}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
