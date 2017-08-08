/**
 * MoCover component
 * @author Perlou(perloukevin@gmail.com)
 */

import Immutable from 'immutable'
import React from 'react'

import '../style/mo-cover.less'

export default class MoCover extends React.Component {
    static propTypes = {
        subject: React.PropTypes.objectOf(Immutable.Map).isRequired
    }

    render () {
        const { subject } = this.props

        return (
          <div className="mb-mo-cover">
            <div className="cover-image" style={{ backgroundImage: `url(${subject.getIn(['images', 'large'])})` }} />
          </div>
        )
    }
}
