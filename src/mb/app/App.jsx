/**
 * app jsx
 * @author Perlou(perloukevin@gmail.com)
 */

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Immutable from 'immutable'

import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'
import ProgressBar from '../components/ProgressBar'

export default class App extends React.PureComponent {
    static propType = {
        children: React.PropTypes.element
    }

    static defaultProps = {
        children: []
    }

    render () {
        return (
            <div className="mb-app">
                <AppHeader />
                {this.props.children}
                <AppFooter />
            </div>
        )
    }
}
