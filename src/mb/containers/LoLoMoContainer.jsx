/**
 * container
 * @author Perlou(perloukevin@gmail.com)
 */

import React from 'react'
import Immutable from 'immutable'

import LoLoMoRow from '../components/LoLoMoRow'
import LoMoCoversContainer from './LoMoCoversContainer'

import '../style/lolomo.less'

const TITLES = {
  inTheaters: '正在上映的电影',
  comingSoon: '即将上映的电影',
  top20: '豆瓣电影Top20' 
}

export default class LoLoMoContainer extends React.PureComponent {
    static propTypes = {
        models: React.PropTypes.objectOf(Immutable.Map).isRequired,
        selectedModelKey: React.PropTypes.string
    }

    render () {
        const {
            models,
            selectedModelKey
        } = this.props

        const rows = models.map((model, key) => {
            const title = TITLES[key]
            const hasSelection = selectedModelKey === key

            let jawBone = null

            return (
                <LoLoMoRow
                    key={key}
                    hasSelection={hasSelection}
                    title={title}
                    modelKey={key}>
                    <LoMoCoversContainer 
                        subjects={model.get('subjects')}
                        hasSelection={hasSelection}
                        modelKey={key} />
                </LoLoMoRow>
            )
        }).toArray()


        return (
            <div className="mb-lolomo">
                {rows}
            </div>
        )
    }
}
