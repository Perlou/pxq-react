/**
 * app header component
 * @author Perlou(perloukevin@gmail.com)
 */

import { browserHistory } from 'react-router'
import cn from 'classnames'
import React from 'react'

export default class AppHeader extends React.PureComponent {
    render () {
        return (
            <header className="mb-app-header">
                <div className="mb-logo" />
                <div className="navbars">
                    app header
                </div>
            </header>
        )
    }
}
