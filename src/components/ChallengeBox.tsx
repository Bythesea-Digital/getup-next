import { useContext } from 'react';

import styles from '../styles/components/ChallengeBox.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeDone() {
    resetCountdown();
    completeChallenge();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Gana {activeChallenge.amount}xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
            <strong>Nuevo desafío</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              onClick={handleChallengeFailed}
              type="button"
              className={styles.challengedFailedButton}
            >
              Falle
            </button>
            <button
              onClick={handleChallengeDone}
              type="button"
              className={styles.challengedDoneButton}
            >
              Completé
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finaliza un ciclo para recibir un desafío</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avanza el nivel completando los desafíos
          </p>
        </div>
      )}
    </div>
  );
}
