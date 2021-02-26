import { useContext, useEffect, useState } from 'react';

import styles from '../styles/components/Countdown.module.css';

import { CountdownContext } from '../contexts/CountdownContext';

export default function Countdown() {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes)
    .padStart(2, '0')
    .split('');
  const [secondLeft, secondRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo Finalizado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountdown}
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              onClick={startCountdown}
              type="button"
              className={styles.countdownButton}
            >
              Iniciar un ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
