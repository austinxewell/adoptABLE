import React from 'react'
import "./Conversations.css"

export default function Conversation({_id, members}) {
    // console.log(members)

    // members.find(({username}) => {
    //     username != context.username
    // })

    const user = members[0]

    return (
        <div className="conversation">
            <span className="conversationName">{user.username}</span>
        </div>
    )
}
