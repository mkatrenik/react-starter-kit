import React, { PropTypes } from 'react';
import { Grid, Cell } from 'react-flexr';

import styles from './style.sass';

const TMP_IMG = 'https://stg-mywork.merck.com/api/v1/proxy/https%3A%2F%2Fmyworkcontent-dev.merck.com%2Fsites%2Fnews%2FSample%2FPublishingImages%2F2010_GovAwardSafetyRY180.jpg%3FRenditionID%3D8';


export default class Highlights extends React.Component {

  static propTypes = {
    highlights: PropTypes.array.isRequired
  }

  render() {
    const { highlights } = this.props;

    return (
      <Grid className={styles.main} gutter='0px'>
        <Cell size='3/12'>
          <img src={TMP_IMG} />
          <h3>{highlights[0].title}</h3>
          <p>{highlights[0].abstract}</p>
        </Cell>
        <Cell size='3/12'>
          <img src={TMP_IMG} />
          <h3>{highlights[1].title}</h3>
          <p>{highlights[1].abstract}</p>
        </Cell>
        <Cell size='3/12'>
          <img src={TMP_IMG} />
          <h3>{highlights[2].title}</h3>
          <p>{highlights[2].abstract}</p>
        </Cell>
        <Cell size='3/12'>
          <img src={TMP_IMG} />
          <h3>{highlights[3].title}</h3>
          <p>{highlights[3].abstract}</p>
        </Cell>
      </Grid>
    );
  }
}
