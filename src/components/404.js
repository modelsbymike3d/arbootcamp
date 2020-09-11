import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { Layout, Link } from '$components';

export default class MDXRuntimeTest extends Component {
  render() {

    return (
      <>
        <div>
          <h1  className={'titleWrapper'}>Page not found</h1>
          <p>{`Uh oh, it looks like that page doesn't exist :(`}</p>
        </div>
      </>
    );
  }
}


