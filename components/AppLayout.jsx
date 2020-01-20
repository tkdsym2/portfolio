import React, { Component, Fragment } from 'react';
import Media from 'react-media';

import Navigator from './Navigator';
import Footer from './Footer';

const withAppLayout = (PassedComponent) => {
  return class extends Component {
    render() {
      return (
        <div>
          <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}>
            {matches => (
              <Fragment>
                {matches.small && <p>small</p>}
                {matches.medium && <p>medium</p>}
                {matches.large && <Navigator />}
              </Fragment>
            )}
          </Media>
          <PassedComponent {...this.children} />
          <Footer />
        </div>
      )
    }
  }
}

export default withAppLayout;