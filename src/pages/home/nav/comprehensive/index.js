import React, { memo } from "react";
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {
    Centreleftstyle
} from './style';

export default memo(function JJComprehensive(props) {
    const route = props;
    return (

        <Centreleftstyle>
            <div className="centreleft">
                <ul className="header-list">
                    <li className="list"><NavLink to="/home/comprehensive/recommend" >推荐</NavLink></li>
                    <li className="list"><NavLink to="/home/comprehensive/latest" >最新</NavLink></li>
                    <li className="list"><NavLink to="/home/comprehensive/hotlist" >热榜</NavLink></li>
                </ul>
                <div> {renderRoutes(route.route.routes)}</div>
            </div>
        </Centreleftstyle>
    )

})