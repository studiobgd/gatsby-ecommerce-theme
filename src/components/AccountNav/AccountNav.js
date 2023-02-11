import { Link, navigate } from 'gatsby';
import React from 'react';
import * as styles from './AccountNav.module.css';

const AccountNav = (props) => {
  const handleLogout = () => {
    window.localStorage.removeItem('key');
    navigate('/');
  };

  return (
    <div className={styles.root}>
      <div className={styles.webRoot}>
        <Link
          activeClassName={styles.activeLink}
          to={'/cont/comenzi'}
          className={styles.webLink}
        >
          Comenzi
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/cont/adresa'}
          className={styles.webLink}
        >
          Adresa
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/cont/setari'}
          className={styles.webLink}
        >
          Setari
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/cont/vizionate'}
          className={styles.webLink}
        >
          Recente
        </Link>
        <span
          role={'presentation'}
          onClick={handleLogout}
          className={styles.webLink}
        >
          iesi
        </span>
      </div>
    </div>
  );
};

export default AccountNav;
