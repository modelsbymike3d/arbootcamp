import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import { Layout, Link } from '$components';
import NextPrevious from '../components/NextPrevious';
import config from '../../config';
import { StyledHeading, StyledMainWrapper } from '../components/styles/Docs';
import AuthorInfo from '../components/AuthorInfo';
import SoftwareVersion from '../components/SoftwareVersion';
import NotFound from '../components/404';
import Email from '../components/EmailSignup';
import TutorialList from '../components/TutorialList';

const forcedNavOrder = config.sidebar.forcedNavOrder;

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props;

    if (!data || !data.site) {
      return (
        <Layout {...this.props}>
          <NotFound />
        </Layout>
      );
    }
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation, title },
      },
    } = data;

    const gitHub = require('../components/images/github.svg');

    const navItems = allMdx.edges
      .map(({ node }) => node.fields.sort)
      .filter(slug => slug !== '/')
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find(url => url === cur)) {
            return { ...acc, [cur]: [cur] };
          }

          let prefix = cur.split('/')[1];

          if (config.gatsby && config.gatsby.trailingSlash) {
            prefix = prefix + '/';
          }

          if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
            return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
          } else {
            return { ...acc, items: [...acc.items, cur] };
          }
        },
        { items: [] }
      );

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur]);
      }, [])
      .concat(navItems.items)
      .map(sort => {
        if (sort) {
          const { node } = allMdx.edges.find(({ node }) => node.fields.sort === sort);

          return { title: node.fields.title, url: node.fields.slug };
        }
      });

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle;

    const metaDescription = mdx.frontmatter.metaDescription;

    const metaImage = mdx.frontmatter.metaImage;

    let canonicalUrl = config.gatsby.siteUrl;

    const imageUrl = config.gatsby.siteUrl + metaImage;

    canonicalUrl =
      config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;

    return (
      <Layout {...this.props}>
        <Helmet>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          {metaImage ? <meta property="og:image" content={imageUrl} /> : null}
          {metaImage && metaTitle ? <meta property="og:image:alt" content={metaTitle} /> : null}
          {metaTitle ? (
            <meta property="og:site_name" content={metaTitle} />
          ) : (
            <meta property="og:site_name" content="AR Bootcamp" />
          )}
          {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
          {metaDescription ? (
            <meta property="twitter:description" content={metaDescription} />
          ) : null}
          {metaImage ? <meta property="twitter:image" content={imageUrl} /> : null}
          {metaImage && metaTitle ? (
            <meta property="twitter:image:alt" content={metaTitle} />
          ) : null}
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:url" content={canonicalUrl} />
        </Helmet>
        <div className={'titleWrapper'}>
          <StyledHeading>{mdx.fields.title}</StyledHeading>
        </div>
        {mdx.frontmatter.software && mdx.frontmatter.software_version ? (
          <SoftwareVersion
            software={mdx.frontmatter.software}
            version={mdx.frontmatter.software_version}
          />
        ) : null}
        <AuthorInfo {...mdx.frontmatter} />
        <StyledMainWrapper>
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <TutorialList mdx={mdx} location={this.props.location} />
        </StyledMainWrapper>
        <StyledMainWrapper>
          <Email />
        </StyledMainWrapper>
        <div className={'addPaddTopBottom'}>
          <NextPrevious mdx={mdx} nav={nav} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
        sort
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
        metaImage
        author
        homepage
        snapchat
        twitter
        instagram
        youtube
        software
        software_version
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
            sort
          }
        }
      }
    }
  }
`;
