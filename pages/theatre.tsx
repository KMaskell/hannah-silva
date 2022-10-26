import copy from '../copy/copy.json';
import Image from 'next/image';
import Link from 'next/link';
import oppositionImage from '../public/opposition.jpeg';
import schlockImage from '../public/schlock.jpeg';
import styles from '../styles/Theatre.module.css';

const Theatre = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{copy.theatre_title}</h1>
            </div>
            <section className={styles.theatreSection}>
                <Image
                    className={styles.image}
                    src={schlockImage}
                    alt="Schlock picture"
                    sizes="320 640 750"
                    width={368}
                    height={246}
                />
                <div className={styles.sectionCopy}>
                    <Link href={copy.schlockUrl}>
                        <h3 className={styles.link}>{copy.schlock_title}</h3>
                    </Link>
                    <p>
                        Silva&apos;s latest performance <em>Schlock!</em>{' '}
                        spliced <em>Fifty Shades of Grey</em> with a novel by
                        Kathy Acker, celebrating &apos;the slipperiness of
                        words, reinventing them so that none of them are
                        safe&apos; (The Guardian). Her solo performance{' '}
                        <em>Total Man</em> was shortlisted for the Ted Hughes
                        Award for New Work in Poetry. Other theatre work
                        includes <em>The Disappearance of Sadie Jones</em>,
                        written and directed by Silva and funded by the Jerwood
                        Charitable Foundation and the Arts Council England.
                    </p>
                </div>
            </section>
            <section className={styles.theatreSection}>
                <Image
                    className={styles.image}
                    src={oppositionImage}
                    alt="Opposition picture"
                    sizes="320 640 750"
                    width={368}
                    height={246}
                />
                <div className={styles.sectionCopy}>
                    <Link href={copy.oppositionUrl}>
                        <h3 className={styles.link}>{copy.opposition_title}</h3>
                    </Link>
                    <p>
                        Silva&apos;s first solo performance <em>Opposition</em>{' '}
                        cut up, re-wrote and subverted political rhetoric and
                        was described in a five star review by What&apos;s on
                        Stage as &apos;radical, political, courageous&apos;.{' '}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Theatre;
