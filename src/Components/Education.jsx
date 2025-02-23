import React from 'react';
import styles from './Education.module.css';

const EducationTimeline = () => {
    return (
        <div className={styles.educationContainer}>
            <h1 className={styles.title}>Education</h1>
            <div className={styles.timeline}>

                {/* University Entry */}
                <div className={`${styles.educationEntry} ${styles.educationLeft}`}>
                    <div className={styles.details}>
                        <h2>B.Tech, Computer Science</h2>
                        <p className={styles.institution}>Aditya Engineering College, Surampalem</p>
                        <p>CGPA - 8.9</p>
                    </div>
                    <span className={`${styles.date} ${styles.dateRight}`}>2022 - 2026</span>
                </div>

                {/* High School Entry */}
                <div className={`${styles.educationEntry} ${styles.educationRight}`}>
                    <div className={styles.details}>
                        <h2>Intermediate, MPC</h2>
                        <p className={styles.institution}>Sri Sai Ram Junior College, Ongole</p>
                        <p>Marks - 94.5%</p>
                    </div>
                    <span className={`${styles.date} ${styles.dateLeft}`}>2020 - 2022</span>
                </div>
            </div>
        </div>
    );
};

export default EducationTimeline;
