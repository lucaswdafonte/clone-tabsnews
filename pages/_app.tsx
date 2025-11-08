import { JSX } from 'react';
import styles from './index.module.css';
import './globals.css';
import HeaderItem from './components/header-item/header-item';

export default function App(): JSX.Element {
  return (
    <div className={styles.mainContainer}>
      <ul className={styles.header}>
        <HeaderItem title="Investimentos" href="/news" />
        <HeaderItem title="Análise de desempenho" href="/news" />
        <HeaderItem title="Perfil" href="/news" />
        <HeaderItem title="Configurações" href="/news" />
      </ul>
    </div>
  );
}
