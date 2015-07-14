import React, { PropTypes } from 'react';

import styles from './styles.sass';


export default class Articles extends React.Component {

  static propTypes = {
    news: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className={styles.links}>
        {this.props.news &&
          this.props.news.map(n => <p key={n.article_id}>{n.title}</p>)
        }
      </div>
    );
  }
}
