import React from 'react';
import { Grid, Cell } from 'react-flexr';

import styles from './style';

// import logoURL from './images/react-logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <Grid className={styles.topBar} gutter='0px'>
        <Cell className={styles.menu} size='1/12'>
          menu
        </Cell>
        <Cell className={styles.logo} size='10/12'>
          logo
        </Cell>
        <Cell size='1/12'>
          { }
        </Cell>
      </Grid>
    );
  }
}
