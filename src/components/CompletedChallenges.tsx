import styles from '../styles/components/CompletedChallenges.module.css';
export default function CompletedChallenges() {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafíos Completados</span>
      <span>5</span>
    </div>
  );
}
