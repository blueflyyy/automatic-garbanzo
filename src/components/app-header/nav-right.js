import React from 'react';

import vip from '../../assets/img/vip.svg'

import {

    HeaderRRight
} from './style';

export default function navRight() {
    return (<HeaderRRight >
        <div className='vip' >
            <img alt='#' src={vip} ></img>
            <span > 会员 </span>
        </div>
        <div className='icon'> <span className='iconfont icons'>&#xe608;</span></div>
        <div className='img'><img src={require('../../assets/img/avatar.png')}></img></div>
    </HeaderRRight>

    )
}