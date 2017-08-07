/**
 * home page
 * @author Perlou(perloukevin@gmail.com)
 */

import React from 'react'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import modelActionCreators from '../actions/model-action-creators'
import LoLoMoContainer from '../containers/LoLoMoContainer'

@connect(
    state => ({ models: state.get('models') }),
    dispatch => ({
        actions: bindActionCreators(modelActionCreators, dispatch)
    })
)
export default class HomePage extends React.PureComponent {
    static propTypes = {
        models: React.PropTypes.objectOf(Immutable.Map).isRequired,
        actions: React.PropTypes.shape({
            loadComingSoon: React.PropTypes.func.isRequired,
            loadInTheaters: React.PropTypes.func.isRequired,
            loadTop20: React.PropTypes.func.isRequired          
        }).isRequired
    }

    componentDidMount () {
        this.props.actions.loadInTheaters()
        this.props.actions.loadComingSoon()
        this.props.actions.loadTop20()
    }

    render () {
        const models = Immutable.Map({
            comingSoon: this.props.models.get('comingSoon'),
            comingSoon: this.props.models.get('comingSoon'),
            top20: this.props.models.get('top20')
        })

        return (
            <div className="mb-page mb-home-page">
                <LoLoMoContainer models={models} />
            </div>
        )
    }
}
