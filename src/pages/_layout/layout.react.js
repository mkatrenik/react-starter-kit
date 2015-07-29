import React, { Component } from 'react';

import logo from '../../assets/images/msd_logo-symbol-only_white.svg';
import 'flexboxgrid/dist/flexboxgrid';
import styles from './styles.sass';


export default class Layout extends Component {
  render() {
    return (
      <div className={`${styles.navbar} row middle-xs`}>
        <div className="col-lg-4">
          <div className="box">
            menu, app name
          </div>
        </div>
        <div className="col-lg-4">
          <div className="box center-xs">
            <a className={styles.logo} href="#">
              <img src={logo} />
            </a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="box end-xs">
            settings
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
