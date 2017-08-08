/**
 * lolomo reducer
 * @author Perlou(perloukevin@gmail.com)
 */

import { handleActions } from 'redux-actions'
import Immutable from 'immutable'

import actionCreators from '../actions/lolomo-action-creators'

const initialState = Immutable.fromJs({
    selectedSubject: null,
    selectedModelKey: null
})

export default handleActions({
    [actionCreators.selectedSubject] (state, { payload: selection }) {
        if (selection) {
            const {
                subject,
                modelKey
            } = selection

            return state.merge({
                selectedSubject: subject,
                selectedModelKey: subject ? modelKey : null
            })

            return initialState
        }
    },
    [actionCreators.loadSubject] (state, { payload: subject }) {
        // return s
    }
}, initialState)
