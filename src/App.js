import React, { memo } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './router';


import Nav from './components/app-header/nav';

import {
    CenterWrapper
} from './style';
export default memo(function App() {

    return (<HashRouter >
        <Nav />
        <CenterWrapper className='center' > {renderRoutes(routes)}
        </CenterWrapper>
    </HashRouter>
    )
})