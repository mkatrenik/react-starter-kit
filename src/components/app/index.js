import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Header from '../header';
import { Grid, Cell } from 'react-flexr';
import styles from './style.sass';

import Articles from '../articles';
import { fetchAll } from '../articles/api';

import MyWorkbench from '../my-workbench';

import Highlights from '../highlights';
import { fetchHighlights } from '../highlights/api';


export class Application extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
    'articles_highlights': PropTypes.array.isRequired
  }

  render() {
    // console.log('Application: ', this.props);
    return (
      <div>
        <div className='articles'>
          <Header />
          <Grid className={styles.personalizedContent} gutter='0px'>
            <Cell size='4/12'>
              <MyWorkbench />
              <Link to="?channel=cz">cz</Link>
              <Link to="?channel=en">en</Link>
            </Cell>
            <Cell size='4/12'>
              <div className="link-window">
                <ul>
                  <li>
                    <a href="http://finance.yahoo.com/q?s=MRK" target="_blank">
                      <img src="/assets/icon-favicon-default-390f193c27f6ec484d87700030373a9c.png" />
                      Merck News (Yahoo)
                    </a>
                  </li>
                  <li>
                    <a href="http://teamspace.merck.com/sites/CoGov/Pages/Home.aspx" target="_blank">
                      <img src="/assets/icon-favicon-teamsite-dd3ab9eb6a1dec91c4619dc766ed2b0a.png" />
                      EC/PVOC Team Space
                    </a>
                  </li>
                  <li>
                    <a href="https://orgchart.merck.com/OrgChart/Login_Form.aspx">
                      <img src="/assets/icon-favicon-teamsite-dd3ab9eb6a1dec91c4619dc766ed2b0a.png" />
                      OrgChart
                    </a>
                  </li>
                  <li>
                    <a href="http://cometportal.merck.com" target="_blank">
                      <img src="/assets/icon-favicon-teamsite-dd3ab9eb6a1dec91c4619dc766ed2b0a.png" />
                      COMET Portal
                    </a>
                  </li>
                  <li>
                    <a href="http://one.merck.com">
                      <img src="/assets/icon-favicon-teamsite-dd3ab9eb6a1dec91c4619dc766ed2b0a.png" />
                      Sync
                    </a>
                  </li>
                </ul>
              </div>
            </Cell>
            <Cell size='4/12'>
              <Articles news={this.props.articles}/>
            </Cell>
          </Grid>
          {//<Highlights highlights={this.props.articles_highlights} />
          }
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
      </div>
    );
  }
}


export default class ApplicationContainer extends React.Component {

  static loadProps(params, cb) {
    console.log('Application::loadProps(%s)', JSON.stringify(params));
    Promise.all([
      fetchAll(),
      fetchHighlights()
    ])
    .then(result => {
      cb(null, {
        articles: result[0].articles,
        'articles_highlights': result[1].articles_highlights
      });
    })
    .catch(err => cb(err))
    ;
  }

  // componentWillUpdate(nextProps) {
  //   const nextChannel = nextProps.location.query.channel;
  //   const currChannel = this.props.location.query.channel;
  //   if (nextChannel !== currChannel) { fetchHighlights({ channel: nextChannel }); }
  // }

  render() {
    // console.log(this.props);
    return (
      <Application articles={this.props.articles} articles_highlights={this.props.articles_highlights} />
    );
  }
}
