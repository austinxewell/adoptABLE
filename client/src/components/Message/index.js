import React from 'react'
import "./Message.css"

export default function Message({own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quod iusto dolorem, esse pariatur</p>
            </div>
            <div className="messageBottom">1 Hour ago</div>
        </div>
    )
}
