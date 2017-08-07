/**
 * model actions
 * @author Perlou(perloukevin@gmail.com)
 */

import { createAction } from 'redux-actions'

import api from '../../db/api/movie'

export default {
    loadComingSoon: createAction('LOAD_COMING_SOON', api.comingSoon),
    loadInTheaters: createAction('LOAD_IN_THEATERS', api.inTheaters),
    loadTop20: createAction('LOAD_TOP_20', api.top20)
}
