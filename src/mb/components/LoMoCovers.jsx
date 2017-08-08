/**
 * covers component
 * @author Perlou(perloukevin@gmail.com)
 */

import cs from 'classnames'
import React from 'react'
import Immutable from 'immutable'

import MoCover from '../components/MoCover'

import '../style/lomo-covers.less'

export default class LoMoCovers extends React.Component {
    static propTypes = {
        hasSelection: React.PropTypes.bool,
        selectedSubjectId: React.PropTypes.string,
        subjects: React.PropTypes.objectOf(Immutable.List).isRequired
    }

    static defaultProps = {
        hasSelection: false,
        selectedSubjectId: null
    }

    render () {
        const {
            subjects,
            selectedSubjectId
        } = this.props

        const items = subjects.map(subject => (
            <li
                key={subject.get('id')}
                className={cs('mb-lomo-covers-cell', { selected: selectedSubjectId === subject.get('id') })}>
                <MoCover subject={subject} />
            </li>
        )).toArray()

        return (
            <ul className="mb-lomo-covers">
                {items}
            </ul>
        )
    }
}
