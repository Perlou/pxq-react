/**
 * app entry
 * @author Perlou(perloukevin@gmail.com)
 */

import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import { render } from 'react-dom'



import './style/index.less'

$(() => {
    render(
        <h1>Hello</h1>,
        document.getElementById('mbMountPoint')
    )
})
