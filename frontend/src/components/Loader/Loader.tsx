import React from 'react';
import styles from './Loader.module.css';

const Loader: React.FC = () => (
  <div className={styles.loader}>
    <div className={styles.spinner}></div>
  </div>
);

export default Loader;
