/**
 * lolomo actions
 * @author Perlou(perloukevin@gmail.com)
 */

import { createAction } from 'redux-actions'

import api from '../../db/api/movie'

export default {
    selectSubject: createAction('SELECT_SUBJECT'),
    loadSubject: createAction('LOAD_SUBJECT', api.subject)
}
