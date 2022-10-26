import React from 'react';
import copy from '../copy/copy.json';
import Link from 'next/link';
import {
    faYoutube,
    faInstagram,
    faTwitter,
    faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/SocialMediaBar.module.css';

export const SocialMediaBar = () => {
    return (
        <div className={styles.component}>
            <div className={styles.icons}>
                <Link href={copy.twitterUrl}>
                    <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                </Link>
                <Link href={copy.instagramUrl}>
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className={styles.icon}
                    />
                </Link>
                <Link href={copy.spotifyUrl}>
                    <FontAwesomeIcon icon={faSpotify} className={styles.icon} />
                </Link>
                <Link href={copy.youtubeUrl}>
                    <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
                </Link>
            </div>
        </div>
    );
};

export default SocialMediaBar;
