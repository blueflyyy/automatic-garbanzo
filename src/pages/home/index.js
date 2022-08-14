import React, { memo } from "react";
import { NavLink } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import {
    Centrestyle
} from './style';
import {
    Nav
} from './style';

export default memo(function JJHome(props) {
    const route = props;
    return (
        <HashRouter>
            <Nav >
                <div className="nav">
                    <div className="lis"><NavLink to="/home/comprehensive" >综合</NavLink></div>
                    <div className="lis"><NavLink to="/home/follow" >关注</NavLink></div>
                    <div className="lis"><NavLink to="/home/backend" >后端</NavLink></div>
                    <div className="lis"><NavLink to="/home/front" >前端</NavLink></div>
                    <div className="lis"><NavLink to="/home/android" >Android</NavLink></div>
                    <div className="lis"><NavLink to="/home/ios" >iOS</NavLink></div>
                    <div className="lis"><NavLink to="/home/artificial" >人工智能</NavLink></div>
                    <div className="lis"><NavLink to="/home/tools" >开发工具</NavLink></div>
                    <div className="lis"><NavLink to="/home/codelife" >代码人生</NavLink></div>
                    <div className="lis"><NavLink to="/home/read">阅读</NavLink></div>
                    <div className="lis last"><NavLink to="/home/tags">标签管理</NavLink></div>
                </div>

            </Nav>
            <Centrestyle>
                <div className="centre">
                    <div className="centreleft">
                        {renderRoutes(route.route.routes)}
                    </div>
                    <div className="centreright">
                        <h2>siveright</h2>
                    </div>
                </div>
            </Centrestyle>
        </HashRouter >
    )

})