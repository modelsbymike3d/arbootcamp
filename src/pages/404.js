import React, { Component } from 'react';
import { Layout } from '$components';

import NotFound from '../components/404';

export default class PageNotFound extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <NotFound />
      </Layout>
    );
  }
}
