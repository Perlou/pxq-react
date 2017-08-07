/**
 * container
 * @author Perlou(perloukevin@gmail.com)
 */

import React from 'react'
import Immutable from 'immutable'

import '../style/lolomo.less'

const TITLES = {
  inTheaters: '正在上映的电影',
  comingSoon: '即将上映的电影',
  top20: '豆瓣电影Top20' 
}

export default class LoLoMoContainer extends React.PureComponent {
    static propTypes = {
        models: React.PropTypes.objectOf(Immutable.Map).isRequired
    }

    render () {
        console.log(this.props.models)
        return (
            <div className="mb-lolomo">
                This is container
            </div>
        )
    }
}
