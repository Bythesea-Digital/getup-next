import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
  startCountdown: () => void;
  resetCountdown: () => void;
  selectTime: ({ selectedMinute }: { selectedMinute: number }) => void;
  minutes: number;
  seconds: number;
  timeCompletedPercentage: number;
  isActive: boolean;
  hasFinished: boolean;
}

interface CountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [selectedMinute, setSelectedMinute] = useState<0.1 | 5 | 15 | 25>(25);

  const SELECTED_TIME_SECONDS = selectedMinute * 60;

  const [time, setTime] = useState(SELECTED_TIME_SECONDS);

  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const timeCompletedPercentage =
    100 - Math.round((time * 100) / SELECTED_TIME_SECONDS);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setSelectedMinute(25);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(true);
  }

  function selectTime({ selectedMinute }) {
    setTime(selectedMinute * 60);
    setSelectedMinute(selectedMinute);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(SELECTED_TIME_SECONDS);
    setHasFinished(false);
  }
  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
        timeCompletedPercentage,
        selectTime
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
