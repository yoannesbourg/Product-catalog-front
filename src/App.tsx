import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Shop from './Pages/Shop/Shop';
import Product from './Pages/Product/Product';
import New from './Pages/New/New';

import { AppBackground, AppContainer, NavBar } from './AppStyledComponents';

const App = (): JSX.Element => {
    return (
        <Router>
            <AppBackground>
                <NavBar>
                    <Link to="/">Shop</Link>
                    <Link to="/new">New Product</Link>
                </NavBar>

                <AppContainer>
                    <Switch>
                        <Route path="/product/:id">
                            <Product />
                        </Route>
                        <Route path="/new">
                            <New />
                        </Route>
                        <Route exact path="/">
                            <Shop />
                        </Route>
                        <Redirect
                            to={{
                                pathname: '/',
                            }}
                        />
                    </Switch>
                </AppContainer>
            </AppBackground>
        </Router>
    );
};
export default App;
