import React from 'react';

export default class Articles {
  render() {
    return (
      <div>{this.props.news.map(n => <p key={n.article_id}>{n.title}</p>)}</div>
    );
  }
}
