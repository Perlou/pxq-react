/**
 * progress bar component
 * @author Perlou(perloukevin@gmail.com)
 */

import cs from 'classnames'
import React from 'react'

import '../style/progress-bar.less'

export default class ProgressBar extends React.Component {
    static propTypes = {
        isLoading: React.PropTypes.bool
    }

    static defaultProps = {
        isLoading: false
    }

    constructor (props) {
        super(props)
        this.state = {
            percentage: 0
        }
    }

    render () {
        return (
            <div className={
                cs('mb-progress-bar', {
                    loading: this.props.isLoading
                })
            }>
                <div className="percentage" style={{ width: `${this.state.percentage}%` }} />
            </div>
        )
    }
}
