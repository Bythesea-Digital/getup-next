import styles from '../styles/components/Countdown.module.css';
import { useEffect, useState } from 'react';

export function Countdown() {
  const POMODORO_TIME_SECONDS = 25 * 60;
  const [time, setTime] = useState(POMODORO_TIME_SECONDS);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes)
    .padStart(2, '0')
    .split('');
  const [secondLeft, secondRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  function startCountdown() {
    setActive(!active);
  }

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

      <button
        onClick={startCountdown}
        type="button"
        className={styles.countdownButton}
      >
        {active ? 'Pausar el ciclo' : 'Iniciar un ciclo'}
      </button>
    </div>
  );
}
