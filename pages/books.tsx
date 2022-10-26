import copy from '../copy/copy.json';
import formsOfProtestImage from '../public/forms-of-protest.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import comingSoonImage from '../public/coming-soon.jpeg';
import styles from '../styles/Books.module.css';

const Books = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{copy.books_title}</h1>
            </div>
            <section className={styles.bookSection}>
                <Image
                    className={styles.image}
                    src={comingSoonImage}
                    alt="Placeholder cover"
                    sizes="320 640 750"
                    width={213}
                    height={333}
                />
                <div className={styles.bookCopy}>
                    <div className={styles.titleCopy}>
                        <h3>{copy.my_child_the_algorithm}</h3>
                        <h4>{copy.my_child_the_algorithm_sub}</h4>
                    </div>
                    <p>{copy.my_child_the_algorithm_p1}</p>
                    <br />

                    <p>{copy.my_child_the_algorithm_p2}</p>
                    <br />
                    <p>
                        Queer, honest, thoughtful, sexy and compassionate,{' '}
                        <em>{copy.my_child_the_algorithm_title}</em> is
                        non-fiction at its finest.
                    </p>
                    <Link href="https://www.footnotepress.com/books/my-child-the-algorithm">
                        <h4 className={styles.link}>
                            {copy.my_child_the_algorithm_link}
                        </h4>
                    </Link>
                </div>
            </section>
            <section className={styles.bookSection}>
                <Image
                    className={styles.image}
                    src={formsOfProtestImage}
                    alt="Forms of protest cover"
                    sizes="320 640 750"
                    width={213}
                    height={333}
                />
                <div className={styles.bookCopy}>
                    <div className={styles.titleCopy}>
                        <h3>{copy.forms_of_protest_title}</h3>
                        <h4>{copy.forms_of_protest_sub}</h4>
                    </div>
                    <p>{copy.forms_of_protest_p1}</p>
                    <br />

                    <p>
                        <em>{copy.forms_of_protest_title_2}</em> collects
                        together for the first time the work of Hannah Silva, a
                        poet and playwright known for her fearless and wholly
                        original vocal performances. These poems and
                        experimental texts oscillate between sense and nonsense,
                        meaning and music, always testing the limits of language
                        to represent the lived world. Words are felt both as
                        arbitrary signs and as urgent physiological acts.
                        Ranging in form from sound poems to collaged spam email,
                        from monologues to lists of insults, and embracing
                        subjects as diverse as war, sexuality and giant squid,
                        Silva&apos;s poetry is like nothing else you&apos;ve
                        read. Deconstructing the defunct languages of political
                        and literary discourse,{' '}
                        <em>{copy.forms_of_protest_title_2}</em> claims a new
                        space, a liminal zone between things as they sound - and
                        things as they are.
                    </p>
                    <br />
                    <p>
                        <em>“{copy.john_field_quote}”</em> {copy.john_field}
                    </p>
                    <Link href="https://www.footnotepress.com/books/my-child-the-algorithm">
                        <h4 className={styles.link}>
                            {copy.penned_in_the_margins}
                        </h4>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Books;
