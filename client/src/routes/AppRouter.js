import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import {
    APIContent,
    Content,
    Footer,
    Header
} from '../components'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
        </div>
        <div>
            <Content />
        </div>
        <div>
            <APIContent/>
        </div>
        <div>
            <Footer/>
        </div>
    </BrowserRouter>

)

export default AppRouter;