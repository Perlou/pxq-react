/**
 * row component
 * @author Perlou(perloukevin@gmail.com)
 */

import cs from 'classnames'
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class LoLoMoRow extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.arrayOf(React.PropTypes.element)]),
        hasSelection: React.PropTypes.bool,
        title: React.PropTypes.string.isRequired
    }

    static defaultProps = {
        children: null,
        hasSelection: false
    }

    render () {
        const {
            title,
            hasSelection
        } = this.props
        const children = React.Children.toArray(this.props.children)

        return (
            <div className={ cs('mb-lolomo-row', { 'no-selection': false }, { 'has-selection': true }) }>
                <div className="row-head">
                    <a className="title h3">{title}</a>
                </div>

                <div className="row-content">
                    <a className="left scroll-button" role="button">
                        <i className="octicon icon-chevron-left" />
                    </a>

                    <div className="scrollable">
                        {children.length > 0 ? children[0] : null}
                    </div>

                    <a className="right scroll-button" role="button">
                        <i className="octicon icon-chevron-right" />
                    </a>
                </div>
            </div>
        )
    }
}
