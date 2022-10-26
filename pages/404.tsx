import copy from '../copy/copy.json';
import Link from 'next/link';
import Image from 'next/image';
import vaderImage from '../public/darth-vader.jpeg';
import styles from '../styles/Custom404.module.css';

export default function Custom404() {
    return (
        <div className={styles.container}>
            <h1>{copy.custom_404_title}</h1>
            <q>{copy.custom_404_copy}</q>
            <button className={styles.button}>
                <Link href="/">{copy.custom_404_link_text}</Link>
            </button>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.darth}
                    width={1280}
                    height={720}
                    alt={copy.custom_404_alt}
                    src={vaderImage}
                />
            </div>
        </div>
    );
}
