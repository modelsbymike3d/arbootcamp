import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// import Link from './link';
import config from '../../config';
import { Sidebar, ListItem } from './styles/Sidebar';

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              headings(depth: h2) {
                value
                depth
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let navItems = [];

      let finalNavItems;

      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        const navItems = allMdx.edges.map((item, index) => {
          let innerItems;

          if (item !== undefined) {
            if (
              item.node.fields.slug === location.pathname ||
              config.gatsby.pathPrefix + item.node.fields.slug === location.pathname
            ) {
              if (item.node.headings) {
                innerItems = item.node.headings.map((innerItem, index) => {
                  const itemId = innerItem.value
                    ? innerItem.value.replace(/\s+/g, '').toLowerCase()
                    : '#';

                  return (
                    <ListItem key={index} to={`#${itemId}`} level={1}>
                      {innerItem.value}
                    </ListItem>
                  );
                });
              }
            }
          }
          if (innerItems) {
            finalNavItems = innerItems;
          }
        });
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <Sidebar>
            <ul className={'rightSideBarUL'}>
              <li className={'rightSideTitle'}>CONTENTS</li>
              {finalNavItems}
            </ul>
          </Sidebar>
        );
      } else {
        return (
          <Sidebar>
            <ul></ul>
          </Sidebar>
        );
      }
    }}
  />
);

export default SidebarLayout;
