import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const TutorialList = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      const links = allMdx.edges.filter((item) => {
        if (item) {
          if (item.node.fields.slug === location.pathname) {
            return false;
          }
          if (item.node.fields.slug.includes(location.pathname)) {
            return true
          }
        }
        return false;
      }).map((item, index) => {
        return (
          <li key={index}>
            <a href={item.node.fields.slug}>{item.node.fields.title}</a>
            </li>
        )
      })

      if (links.length > 0 && location.pathname !=='/') {
        return (
          <div>
            {`Here's what we'll be covering:`}
            <ul>{links}</ul>
          </div>
        )
      } else {
        return <div></div>
      }

      // if (finalNavItems && finalNavItems.length) {
      //   return (
      //     <Sidebar>
      //       <ul className={'rightSideBarUL'}>
      //         <li className={'rightSideTitle'}>CONTENTS</li>
      //         {finalNavItems}
      //       </ul>
      //     </Sidebar>
      //   );
      // } else {
      //   return (
      //     <Sidebar>
      //       <ul></ul>
      //     </Sidebar>
      //   );
      // }
    }}
  />
);

export default TutorialList;
