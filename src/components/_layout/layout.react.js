import React, { Component, PropTypes } from 'react';

import logo from './msd_logo-symbol-only_white.svg';
import styles from './styles.sass';


export default class Layout extends Component {

  static propTypes = { children: PropTypes.node }

  render() {
    const { children } = this.props.children || '';
    return (
      <div>
        <div className={styles.navbar}>
          <div className={styles.menuButton}>
            menu
          </div>
          <div className={styles.logo}>
            <a href="#">
              <img src={logo} />
            </a>
          </div>
          <div>
            settings
          </div>
        </div>
        {children}
      </div>
    );
  }
}
