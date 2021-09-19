import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Shop from './Pages/Shop';
import Product from './Pages/Product';

const App = (): JSX.Element => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Shop</Link>
                    </li>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/product/:id">
                    <Product />
                </Route>
                <Route path="/">
                    <Shop />
                </Route>
            </Switch>
        </div>
    </Router>
);
export default App;
