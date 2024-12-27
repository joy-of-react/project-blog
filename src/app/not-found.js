import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Not Found</h1>
      <p>
        Could not find requested resource. Please try again, or go{" "}
        <Link href="/">home</Link>.
      </p>
      <p></p>
    </div>
  );
}
