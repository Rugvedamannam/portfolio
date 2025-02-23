import React from "react";
import styles from "./About.module.css";  
import imagePath from "../assets/profile.jpg";

const About = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.about}>About</h2>
            <div className={styles.body}>
                <div className={styles.left}>
                    <p>
                    I am a passionate and skilled software developer specializing in JavaScript, React, and MongoDB. With a strong background in front-end development, I focus on building responsive, user-friendly web applications that provide seamless experiences.
                    </p>
                    <p>
                    My focus is on making web applications fast, efficient, and easy to scale. I’ve built real-time dashboards and event management platforms, working closely with teams to bring great ideas to life.
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.imageWrapper}>
                        <img src={imagePath} alt="About Me" className={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
