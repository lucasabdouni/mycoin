import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Moeda from '../pages/moeda';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/moeda/:moeda+" component={Moeda} />
    </Switch>
);

export default Routes;
