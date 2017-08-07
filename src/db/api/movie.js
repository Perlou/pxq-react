/**
 * movie api
 * @author Perlou(perloukevin@gmail.com)
 */

import { get } from './utils'

export default {
    comingSoon: get('/data/coming_soon.json'),
    inTheaters: get('/data/in_theaters.json'),
    top20: get('/data/top20.json')
}
