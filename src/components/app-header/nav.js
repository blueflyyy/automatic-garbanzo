import React from 'react';
import { NavLink } from 'react-router-dom';
import Navright from './nav-right';
import juejinIcon from '../../assets/img/juejin.svg';
import {
    HeaderWrapper,
    HeaderRight
} from './style';

export default function nav() {
    return (
        <HeaderWrapper>
            <img className='juejin' alt='#' src={juejinIcon} />
            <ul className='list'>
                <li className='lis'><NavLink to="/home">首页</NavLink></li>
                <li className='lis'><NavLink to="/boiling">沸点</NavLink></li>
                <li className='lis'><NavLink to="/course">课程</NavLink></li>
                <li className='lis'><NavLink to="/broadcast">直播</NavLink></li>
                <li className='lis'><NavLink to="/activity">活动</NavLink></li>
                <li>商城</li>
                <li>APP</li>
                <li>插件</li>
            </ul>
            <HeaderRight>
                <div className='search'>
                    <input type='search' placeholder='探索稀土掘金' />
                    <div>
                        <i className='iconfont sicon'>&#xe600;</i>
                    </div>
                </div>
                <div className='createrall'>
                    <div className='creater'>创作者中心</div>
                    <div className='createricon'>
                        <i className='iconfont'>&#xe605;</i>
                    </div>
                </div>
                <Navright />
            </HeaderRight>
        </HeaderWrapper>)
}