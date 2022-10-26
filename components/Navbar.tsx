import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = () => {
    return (
        <nav className={styles.component}>
            <button className={styles.hamburger} id="hamburger">
                <FontAwesomeIcon icon={faBars} />
            </button>
            <ul className={styles.navUl} id="navUl">
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
