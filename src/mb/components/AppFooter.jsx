/**
 * app footer component
 * @author Perlou(perloukevin@gmail.com)
 */

import React from 'react'

import '../style/app-footer.less'

export default class AppFooter extends React.PureComponent {
    render () {
        return (
            <footer className="mb-app-footer">
                <div className="copyright">© 2016-2017 <a rel="noopener noreferrer" target="_blank" href="https://github.com/MagicCube">MagicCube</a>. Designed and implemented by <a href="mailto:henry1943@163.com">Henry Li</a>.</div>
                <a className="github" href="http://github.com/MagicCube/movie-board">Fork on Github</a>       
            </footer>
        )
    }
}
