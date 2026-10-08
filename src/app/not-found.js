import styles from "./not-found.module.css";
export default function NotFound() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1>404 Not Found</h1>
        <p>Page does not exist. Check the URL and try again.</p>
      </div>
    </>
  );
}
