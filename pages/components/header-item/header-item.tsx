import { JSX } from 'react';
import styles from './header-item.module.css';

interface HeaderItemProps {
  title: string;
  href: string;
}

export default function HeaderItem({ title, href }: HeaderItemProps): JSX.Element {
  return (
    <li className={styles.headerItemContainer}>
      <a href={href} className={styles.headerItemLink}>
        {title}
      </a>
    </li>
  );
}
