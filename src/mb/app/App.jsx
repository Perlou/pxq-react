/**
 * app jsx
 * @author Perlou(perloukevin@gmail.com)
 */

import React from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import { browserHistory } from 'react-router'

import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'

export default class App extends React.PureComponent {
    render () {
        return (
            <div className="mb-app">
                <AppHeader />

                <AppFooter />
            </div>
        )
    }
}
