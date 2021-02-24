import styles from '../styles/components/Header.module.css';
export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src="GetUp.svg" alt="GetUp - Bythesea Digital" />
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Bythesea-Digital/getup-next"
      >
        <img src="icons/github.svg" alt="Repo" />
      </a>
    </div>
  );
}
