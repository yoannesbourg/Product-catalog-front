import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Shop from './Pages/Shop/Shop';
import Product from './Pages/Product/Product';
import New from './Pages/New/New';

import { AppBackground, AppContainer, NavBar, Ul } from './AppStyledComponents';

const App = (): JSX.Element => {
    return (
        <Router>
            <AppBackground>
                <NavBar>
                    <Ul>
                        <Link to="/">Shop</Link>
                        <Link to="/new">New Product</Link>
                    </Ul>
                </NavBar>

                <AppContainer>
                    {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/product/:id">
                            <Product />
                        </Route>
                        <Route path="/new">
                            <New />
                        </Route>
                        <Route path="/">
                            <Shop />
                        </Route>
                    </Switch>
                </AppContainer>
            </AppBackground>
        </Router>
    );
};
export default App;
