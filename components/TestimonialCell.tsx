import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ITestimonialCell } from './types';
import styles from '../styles/TestimonialCell.module.css';

export const TestimonialCell = ({ quote, footer, stars }: ITestimonialCell) => {
    const getStars = (stars: number) => {
        switch (stars) {
            case 5:
                return (
                    <div className={styles.stars}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                );
            case 4:
                return (
                    <div className={styles.stars}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.component}>
            <div className={styles.quote}>
                <q>{quote}</q>
            </div>
            <div className={styles.footer}>
                <p>{footer}</p>
                {stars ? getStars(stars) : null}
            </div>
        </div>
    );
};

export default TestimonialCell;
