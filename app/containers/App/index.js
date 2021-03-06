/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
//custom
import SideBar from 'containers/SideBar/Loadable';
import Navbar from 'containers/Navbar/Loadable';
import CustomFooter from 'containers/CustomFooter/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import Login from 'containers/Login/Loadable';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(100% + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <div>
      <SideBar />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <AppWrapper>
              <Helmet
                titleTemplate="%s - React.js Boilerplate"
                defaultTitle="React.js Boilerplate"
              >
                <meta name="description" content="A React.js Boilerplate application" />
              </Helmet>
              {/* <Header /> */}
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route path="/features" component={FeaturePage} />
                <Route path="" component={NotFoundPage} />
              </Switch>
              {/* <Footer /> */}
              <GlobalStyle />
            </AppWrapper>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}
