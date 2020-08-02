import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const RouteWithLayoutStore = props => {
  const { layout: Layout, component: Component, ...rest } = props;
  const theme = createMuiTheme({});
  return (
    <ThemeProvider theme={theme}>
      <Route
        {...rest}
        render={matchProps => (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )}
      />
    </ThemeProvider>
  );
};

RouteWithLayoutStore.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayoutStore;
