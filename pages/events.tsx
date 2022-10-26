import copy from '../copy/copy.json';
import styles from '../styles/Events.module.css';

const Events = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>{copy.events_title}</h1>
            </div>
            <p>{copy.coming_soon}</p>
        </div>
    );
};

export default Events;
