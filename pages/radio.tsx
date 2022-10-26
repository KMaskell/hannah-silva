import copy from '../copy/copy.json';
import Image from 'next/image';
import cockChaferImage from '../public/cockchafer.jpeg';
import indigoChildrenImage from '../public/indigo-children.jpeg';
import jumpBlueImage from '../public/jump-blue.jpeg';
import loveThySynthImage from '../public/love-thy-synth.jpeg';
import beastImage from '../public/beast.jpeg';
import marathonTalesImage from '../public/marathon-tales.jpeg';
import musicLessonImage from '../public/music-lesson.jpeg';
import solitaryImage from '../public/solitary.jpeg';
import Link from 'next/link';
import styles from '../styles/Radio.module.css';

const Radio = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{copy.radio_title}</h1>
            </div>
            <section className={styles.radioSection}>
                <Image
                    className={styles.image}
                    src={cockChaferImage}
                    alt="Cockchafer picture"
                    sizes="320 640 750"
                    width={360}
                    height={203}
                />
                <div className={styles.sectionCopy}>
                    <Link href="https://www.bbc.co.uk/programmes/m0014frl">
                        <h4 className={styles.link}>
                            {copy.intelligent_guide_title}
                        </h4>
                    </Link>
                    <p>{copy.intelligent_guide}</p>
                </div>
            </section>
            <section className={styles.radioSection}>
                <Image
                    className={styles.image}
                    src={loveThySynthImage}
                    alt="Love thy synth picture"
                    sizes="320 640 750"
                    width={360}
                    height={203}
                />
                <div className={styles.sectionCopy}>
                    <Link href="https://www.bbc.co.uk/programmes/m0002zmt">
                        <h4 className={styles.link}>
                            {copy.love_thy_synth_title}
                        </h4>
                    </Link>
                    <p>{copy.love_thy_synth}</p>
                </div>
            </section>
            <section className={styles.radioSection}>
                <Image
                    className={styles.image}
                    src={indigoChildrenImage}
                    alt="Indigo children picture"
                    sizes="320 640 750"
                    width={360}
                    height={203}
                />
                <div className={styles.sectionCopy}>
                    <Link href="https://www.bbc.co.uk/programmes/b0bfxw6q">
                        <h4 className={styles.link}>
                            {copy.indigo_children_title}
                        </h4>
                    </Link>
                    <p>{copy.indigo_children}</p>
                </div>
            </section>
            <section className={styles.radioSection}>
                <Image
                    className={styles.image}
                    src={beastImage}
                    alt="The beast picture"
                    sizes="320 640 750"
                    width={360}
                    height={203}
                />
                <div className={styles.sectionCopy}>
                    <Link href="https://www.bbc.co.uk/programmes/m0000ykf">
                        <h4 className={styles.link}>{copy.beast_title}</h4>
                    </Link>
                    <p>{copy.beast}</p>
                </div>
            </section>
            <section className={styles.radioSection}>
                <Image
                    className={styles.image}
                    src={musicLessonImage}
                    alt="The music lesson picture"
                    sizes="320 640 750"
                    width={360}
                    height={203}
                />
                <div className={styles.sectionCopy}>
                    <Link href="https://www.bbc.co.uk/programmes/b08x9bhw">
                        <h4 className={styles.link}>
                            {copy.music_lesson_title}
                        </h4>
                    </Link>
                    <p>{copy.music_lesson}</p>
                </div>
            </section>
            <section className={styles.radioSection}>
                <Image
                    className={styles.image}
                    src={solitaryImage}
                    alt="Solitary picture"
                    sizes="320 640 750"
                    width={360}
                    height={203}
                />
                <div className={styles.sectionCopy}>
                    <Link href="https://www.bbc.co.uk/programmes/b0977f93">
                        <h4 className={styles.link}>{copy.solitary_title}</h4>
                    </Link>
                    <p>{copy.solitary}</p>
                </div>
            </section>
            <section className={styles.radioSection}>
                <Image
                    className={styles.image}
                    src={jumpBlueImage}
                    alt="Jump blue picture"
                    sizes="320 640 750"
                    width={360}
                    height={203}
                />
                <div className={styles.sectionCopy}>
                    <Link href="https://www.bbc.co.uk/programmes/b07z43ss">
                        <h4 className={styles.link}>{copy.jump_blue_title}</h4>
                    </Link>
                    <p>{copy.jump_blue}</p>
                </div>
            </section>
            <section className={styles.radioSection}>
                <Image
                    className={styles.image}
                    src={marathonTalesImage}
                    alt="Marathon tales picture"
                    sizes="320 640 750"
                    width={360}
                    height={203}
                />
                <div className={styles.sectionCopy}>
                    <Link href="https://www.bbc.co.uk/programmes/b01lsz43">
                        <h4 className={styles.link}>
                            {copy.marathon_tales_title}
                        </h4>
                    </Link>
                    <p>{copy.marathon_tales_sub}</p>
                    <br />
                    <p>{copy.marathon_tales}</p>
                </div>
            </section>
        </div>
    );
};

export default Radio;
