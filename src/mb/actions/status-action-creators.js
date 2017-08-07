/**
 * status actions
 * @author Perlou(perloukevin@gmail.com)
 */

import { createAction } from 'redux-actions'

export default {
    load: createAction('LOAD'),
    loadComplete: createAction('LOAD_COMPLETE')
}
