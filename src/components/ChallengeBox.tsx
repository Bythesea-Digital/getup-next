import { useContext } from 'react';

import styles from '../styles/components/ChallengeBox.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Gana {activeChallenge.amount}xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
            <strong>Nuevo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              onClick={resetChallenge}
              type="button"
              className={styles.challengedFailedButton}
            >
              Falle
            </button>
            <button type="button" className={styles.challengedDoneButton}>
              Complete
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finaliza un ciclo para recibir un desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avanza el nivel completando los desafios
          </p>
        </div>
      )}
    </div>
  );
}
