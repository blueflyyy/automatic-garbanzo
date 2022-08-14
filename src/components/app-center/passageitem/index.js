import React, { useState, useEffect } from 'react';


import {
    Passageitemstyle
} from './style';


export default function usePassageitem() {

    const [tabs, setTabs] = useState([{
        id: 110,
        name: "初念初恋",
        time: "1月前",
        label: [{
            num: 2,
            contents: ["后端", "java"]
        }],
        title: "面试官：应用上线后Cpu使用率飙升如何排查？",
        content: "大家好，我是飘渺。上次面试官问了个问题：应用上线后Cpu使用率飙升如何排查？其实这是个很常见的问题，也非常简单，那既然如此我为什么还要写呢？因为上次回答的时候我忘记将线程PID转换成16进制的命令了。所以我决定再重温一遍这个问题，当然贴心的我还给大家准备好了测试代码，大家可以实际操作一下，这样下次就不会忘记了。",
        labels: { views: 5907, likes: 13, comments: 0 },
        isLike: false
    }

    ])

    function setlike() {

        const newTabs = [...tabs];
        newTabs[0].isLike = !tabs[0].isLike;
        //点赞图标
        var likes = document.getElementById("likes");
        //点赞数量
        var likespan = document.getElementById("likespan");

        if (newTabs[0].isLike) {
            newTabs[0].labels.likes += 1;
            //更换icon图标
            likes.className = "iconfont icon-dianzan1";
            //添加样式
            likespan.className = "likespans";
        } else {
            newTabs[0].labels.likes -= 1;
            likes.className = "iconfont icon-dianzan"
            likespan.className = "";
        }
        setTabs(newTabs);
    }
    useEffect(() => {
        //点赞图标
        var likes = document.getElementById("likes");
        //点赞数量
        var likespan = document.getElementById("likespan");
        if (tabs[0].isLike) {
            likes.className = "iconfont icon-dianzan1";
            likespan.className = "likespans";
        }
    })

    return (

        <Passageitemstyle className='div' >

            <div className='container' >
                <div className='line' >
                    <div className='i meta' >
                        <div className='name' > <a> {tabs[0].name} </a></div >
                        <div className='time' > {tabs[0].time} </div>
                        <ul className='labal' > {
                            tabs[0].label[0].contents.map((item, index) => {
                                return <li key={index} > < a > {item} </a></li >
                            })
                        } </ul> </div>
                    <div className='i title' >
                        <a className='title-a' href="#" target="_blank" title={tabs[0].title} > {tabs[0].title} </a></div >
                    <div className='i content' > {tabs[0].content} </div>
                    <ul className='i do' >
                        <li className='item item1-view' >
                            <i className='iconfont' > &#xe610; </i> <span > {tabs[0].labels.views} </span>
                        </li>
                        <li className='item item2 like' onClick={e => setlike()} >
                            <i id='likes' className='iconfont icon-dianzan' > </i>
                            <span id='likespan' > {tabs[0].labels.likes == 0 ? "点赞" : tabs[0].labels.likes} </span>
                        </li>
                        <li className='item item2 comment' >
                            <i className='iconfont' > &#xe60e; </i>
                            <span > {tabs[0].labels.comments == 0 ? "评论" : tabs[0].labels.comments} </span>
                        </li>
                    </ul>
                </div>
            </div>
        </Passageitemstyle >)


}