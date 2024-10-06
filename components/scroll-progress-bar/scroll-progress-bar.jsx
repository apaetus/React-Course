import { useEffect, useState } from 'react';
import styles from './scroll-progress-bar.module.css';

export const ScrollProgressBar = () => {
    const [progress, setProgress] = useState('0%');

    const getNewValue = () => {
        return Math.floor(
            (window.scrollY /
                (document.documentElement.scrollHeight -
                    window.innerHeight)) *
                100
        );
    };

    useEffect(() => {
        const onScroll = () => {
            setProgress(getNewValue());
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <>
            <div
                className={styles.scrollProgressBar}
                style={{ width: `${progress}%` }}
            ></div>
        </>
    );
};
