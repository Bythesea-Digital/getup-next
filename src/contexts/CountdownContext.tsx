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
  minutes: number;
  seconds: number;
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

  const POMODORO_TIME_SECONDS = 0.1 * 60;

  const [time, setTime] = useState(POMODORO_TIME_SECONDS);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(POMODORO_TIME_SECONDS);
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
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
