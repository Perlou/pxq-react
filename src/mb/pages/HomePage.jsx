/**
 * home page
 * @author Perlou(perloukevin@gmail.com)
 */

import React from 'react'
import Immutable from 'immutable'

import LoLoMoContainer from '../containers/LoLoMoContainer'

export default class HomePage extends React.PureComponent {
    static propTypes = {
        models: React.PropTypes.objectOf(Immutable.Map)
    }

    render () {
        console.log(this.props)
        const models = {
            name: 'Perlou'
        }

        return (
            <div className="mb-page mb-home-page">
                <LoLoMoContainer models={models}/>
            </div>
        )
    }
}
