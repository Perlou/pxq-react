/**
 * app entry
 * @author Perlou(perloukevin@gmail.com)
 */

import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import { configRoutes } from './routes'

import './style/index.less'

$(() => {
    render(
        <Router history={browserHistory}>
            {configRoutes()}
        </Router>,
        document.getElementById('mbMountPoint')
    )
})
