import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Account from '../../containers/Account/Account.js';
import Display from '../../containers/Display/Display.js';
import Welcome from '../Welcome/Welcome.js';
const routes =() =>
(
    <div>
                <Switch>
                    <Route path="/account" component={Account} />
                    <Route path="/display" component={Display}/>
                    <Route path="/" exact component={Welcome}/>
                </Switch>

    </div>
);
export default routes;