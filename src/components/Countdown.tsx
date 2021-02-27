import { useContext, useEffect, useState } from 'react';

import styles from '../styles/components/Countdown.module.css';

import { CountdownContext } from '../contexts/CountdownContext';
import TimeSelection from './TimeSelection';

export default function Countdown() {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdown,
    resetCountdown,
    timeCompletedPercentage
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes)
    .padStart(2, '0')
    .split('');
  const [secondLeft, secondRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  return (
    <div>
      <TimeSelection />
      <div className={styles.countdownContainer}>
        <div className={styles.timeCard}>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div className={styles.timeCard}>
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
            <>
              <button
                onClick={resetCountdown}
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              >
                Abandonar ciclo
              </button>
              <span
                style={{ width: `${timeCompletedPercentage}%` }}
                className={styles.progressBarButton}
              />
            </>
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
