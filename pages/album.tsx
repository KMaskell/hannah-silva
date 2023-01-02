import copy from '../copy/copy.json';
import Link from 'next/link';
import styles from '../styles/Album.module.css';

const Album = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{copy.talk_in_a_bit}</h1>
            </div>
            <div className={styles.albumCopy}>
                <p>
                    <Link href="https://humankindrecords.bandcamp.com/album/talk-in-a-bit">
                        <em className={styles.link}>{copy.talk_in_a_bit}</em>
                    </Link>{' '}
                    is the debut record by Hannah Silva, an award-winning writer
                    and sound poet known for her innovative and virtuosic vocal
                    performances. Swiss producer Alan Alpenfelt saw Silva
                    perform at the <em>Edinburgh Book Festival</em>, and,
                    inspired by her rhythmical energy and vocal skills, invited
                    her to be the flagship artist on his new label.{' '}
                </p>
                <br />
                <p>
                    <em>Talk in a bit</em> was recorded during a week of free
                    improvisation at the beautiful La Sauna Recording Studio on
                    Lake Varese, Italy. Silva&apos;s lyrical tapestries are
                    woven together with the acrobatic drummery of Swiss
                    percussionist Julian Sartorius, the electro- acoustic
                    virtuosity of Italian composer Luca Martegani and the noise
                    distortions of Swiss cellist Zeno Gabaglio.
                </p>
                <br />
                <p>{copy.album_artist}</p>
            </div>
            <br />
            <div className={styles.embeddedAlbum}>
                <iframe
                    src={copy.albumSrc}
                    width="100%"
                    height="520"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
            <section className={styles.tableContainer}>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td className={styles.rowLeft}>
                                {copy.drums_beats_percussions}
                            </td>
                            <td className={styles.rowRight}>
                                {copy.julian_sartorius}
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.rowLeft}>
                                Korg MS20, Memory Moog, Doepfer A100 modular,
                                Rhodes mark II, Sintetika Musika Makina custom
                                modular system
                            </td>
                            <td className={styles.rowRight}>
                                Luca Xelius Martegani
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.rowLeft}>
                                Disciple one synthesizer
                            </td>
                            <td className={styles.rowRight}>Riccardo Monti</td>
                        </tr>
                        <tr>
                            <td className={styles.rowLeft}>
                                Electric five strings cello
                            </td>
                            <td className={styles.rowRight}>Zeno Gabaglio</td>
                        </tr>
                        <tr>
                            <td className={styles.rowLeft}>
                                Additional production
                            </td>
                            <td className={styles.rowRight}>
                                Luca Xelius Martegani
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.rowLeft}>
                                Recorded and Mixed by
                            </td>
                            <td className={styles.rowRight}>
                                Enrico Mangione - La Sauna New Recording Studio,
                                Varese (I)
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.rowLeft}>Mastering</td>
                            <td className={styles.rowRight}>
                                Henning Schmitz (member of Kraftwerk) at X
                                Punkte 1 Studio, Köln (D)
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.rowLeft}>Artwork</td>
                            <td className={styles.rowRight}>Alfio Mazzei</td>
                        </tr>
                        <tr>
                            <td className={styles.rowLeft}>
                                Project curated by
                            </td>
                            <td className={styles.rowRight}>Alan Alpenfelt</td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.creditFooter}>
                    <p>HK001</p>
                    <p>(P) &amp; (C) Human Kind Records 2018</p>
                    <p>Supported by The Arts Council England</p>
                    <p>
                        Development supported by the Artists&apos; International
                        Development Fund
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Album;
