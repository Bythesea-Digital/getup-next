import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export default function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/wolfmaster8.png" alt="Felipe Lobo" />
      <div>
        <strong>Felipe Lobo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
