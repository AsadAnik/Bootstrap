import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HOC from './HOC';

//Components..
import Home from './components/home/Home';
import Layout from './components/layouts/Layout';
import Theming from './components/themings/Theming';

const _ = () => {

    return (
        <HOC>
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/layouts'} exact component={Layout} />
                <Route path={'/themings'} exact  component={Theming} />
            </Switch>
        </HOC>
    )
}

export default _;