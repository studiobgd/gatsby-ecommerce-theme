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
          Orders
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/cont/adresa'}
          className={styles.webLink}
        >
          Addresses
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/cont/setari'}
          className={styles.webLink}
        >
          Settings
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/cont/vizionate'}
          className={styles.webLink}
        >
          Recently Viewed
        </Link>
        <span
          role={'presentation'}
          onClick={handleLogout}
          className={styles.webLink}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default AccountNav;
