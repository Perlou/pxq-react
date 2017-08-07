/**
 * app routes
 * @author Perlou(perloukevin@gmail.com)
 */

import React from 'react';
import { IndexRoute, Route } from 'react-router'

import App from './app/App'
import HomePage from './pages/HomePage'

export function configRoutes () {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}></IndexRoute>
        </Route>
    )
}
