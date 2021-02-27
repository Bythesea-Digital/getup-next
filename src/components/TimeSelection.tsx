import styles from '../styles/components/TimeSelection.module.css';
import { useContext, useState } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

export default function TimeSelection() {
  const { selectTime, isActive } = useContext(CountdownContext);

  const [selectedMinute, setSelectedMinute] = useState<string>(String(25));

  function selectOption(e) {
    const value = e.target.value;
    setSelectedMinute(value);
    selectTime({ selectedMinute: value });
  }

  if (isActive) return null;
  return (
    <div className={styles.timeSelectionContainer}>
      <p>¿De cuantos minutos quieres el ciclo?</p>
      <div className={styles.timeSelection}>
        <button
          className={selectedMinute === String(5) ? styles.selected : ''}
          onClick={selectOption}
          value={5}
          type="button"
        >
          5
        </button>
        <button
          className={selectedMinute === String(15) ? styles.selected : ''}
          onClick={selectOption}
          value={15}
          type="button"
        >
          15
        </button>
        <button
          className={selectedMinute === String(25) ? styles.selected : ''}
          onClick={selectOption}
          value={25}
          type="button"
        >
          25
        </button>
      </div>
    </div>
  );
}
