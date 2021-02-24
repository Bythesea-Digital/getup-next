import { useContext } from 'react';

import styles from '../styles/components/CompletedChallenges.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafíos Completados</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
