/* @flow */

import React from 'react';
import Header from '../header';
import { Grid, Cell } from 'react-flexr';
import styles from './style.sass';

import Articles from '../articles';
import { fetchAll } from '../articles/api';

export default class Application {

  static loadProps(params, cb) {
    console.log(params);
    fetchAll().then(data => {
      setTimeout(() => cb(null, data), 3000);
    });
  }

  render() {
    console.log(this.props.loading);
    return (
      <div>
        <Header />
        <Grid className={styles.personalizedContent} gutter='0px'>
          <Cell size='4/12'>
            <Articles news={this.props.news}/>
          </Cell>
          <Cell size='4/12'>
            2
          </Cell>
          <Cell size='4/12'>
            3
          </Cell>
        </Grid>
        <Grid className={styles.border} gutter='0px'>
          <Cell size='3/12'>
            1
          </Cell>
          <Cell size='3/12'>
            2
          </Cell>
          <Cell size='3/12'>
            3
          </Cell>
          <Cell size='3/12'>
            4
          </Cell>
        </Grid>
      </div>
    );
  }
}
