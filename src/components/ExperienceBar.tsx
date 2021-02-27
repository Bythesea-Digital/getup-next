import React, { useContext } from 'react';

import styles from '../styles/components/ExperienceBar.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );
  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        {currentExperience ? (
          <>
            <div style={{ width: `${Number(percentToNextLevel)}%` }} />
            <span
              style={{ left: `${percentToNextLevel}%` }}
              className={styles.currentExperience}
            >
              {currentExperience} xp
            </span>
          </>
        ) : null}
      </div>

      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
