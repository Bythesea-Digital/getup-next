import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import styles from '../styles/pages/Home.module.css';
import CompletedChallenges from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
