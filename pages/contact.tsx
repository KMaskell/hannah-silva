import copy from '../copy/copy.json';
import Image from 'next/image';
import Link from 'next/link';
import contactImage from '../public/contact-image.jpeg';
import { SocialMediaBar } from '../components/SocialMediaBar';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{copy.contact_title}</h1>
            <SocialMediaBar />
            <div className={styles.contactInfo}>
                <div className={styles.imageAndCredit}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src={contactImage}
                            alt="Profile picture"
                            sizes="320 640 750"
                            width={360}
                            height={239}
                        />
                        <p className={styles.photoCredit}>
                            {copy.contact_credit}
                        </p>
                    </div>
                </div>
                <div className={styles.enquiries}>
                    <h4>{copy.book_enquiries}</h4>
                    <p>
                        {copy.laetitia_rutherford}{' '}
                        <Link
                            className={styles.link}
                            href={copy.watson_little_client_href}
                        >
                            {copy.watson_little_ltd}
                        </Link>
                    </p>
                    <br />
                    <p>
                        {copy.email}{' '}
                        <a
                            className={styles.link}
                            href={copy.watson_little_href}
                        >
                            {copy.watson_little_email}
                        </a>
                    </p>
                    <br />
                    <p>{copy.watson_little_tel}</p>
                    <br />
                    <h4>{copy.poetry_performance}</h4>
                    <p>
                        <a className={styles.link} href={copy.silva_danca_href}>
                            {copy.silva_danca_email}
                        </a>
                    </p>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Contact;
