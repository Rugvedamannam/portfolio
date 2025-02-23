import styles from "./Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      date: "june 2024 - july 2024",
      role: "Full Stack Development",
      company: "Technical Hub",
      type: "Internship",
      description: [
        " Completed a three-month full-stack internship after the 2nd year, gaining hands on Experience in building full-stack applications"
      ],
    },
    {
      date: " Dec 2024– Jan 2025",
      role: " Junior Developer",
      company: "TechnicalHub",
      description: [
        " Developed a live bus monitoring web app using React, Express.js, and MongoDB, featuring real-time tracking and Chart.js-based analytics. Optimized backend queries for faster data retrieval, enhancing system performance."
      ],
    },
    
  ];

  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <div className={styles.dateBox}>
              <div className={styles.date}>{exp.date}</div>
            </div>
            <div className={styles.details}>
              <h3 className={styles.role}>{exp.role}</h3>
              <p className={styles.company}>
                <span className={styles.companyName}>{exp.company}</span> · {exp.type}
              </p>
              <ul>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
