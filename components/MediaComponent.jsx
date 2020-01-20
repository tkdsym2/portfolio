import React, { Fragment } from 'react';
import Media from 'react-media';

const withMediaComponent = (MobileComponent, TabletComponent, DesktopComponent) => {
  return props => {
    return (
      <Media queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)"
      }}>
        {matches => (
          <Fragment>
            {matches.small && <MobileComponent {...props}/>}
            {matches.medium && <TabletComponent {...props}/>}
            {matches.large && <DesktopComponent {...props}/>}
          </Fragment>
        )}
      </Media>
    )
  }
}

export default withMediaComponent;