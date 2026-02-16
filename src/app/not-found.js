import { BLOG_TITLE } from '@/constants';
import styles from './homepage.module.css';

// this does not work
export const metadata = {
  title: `404 Not found | ${BLOG_TITLE}`,
};

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>404 Not Found</h1>
      <p>This page does not exist. Please check the URL and try again.</p>
    </div>
  )
}
