import React from 'react'
import {useQuery} from '@apollo/client'
import "./Conversations.css"

import  { QUERY_ME_BASIC } from '../../utils/queries'

export default function Conversation({_id, members, conversationId}) {
    const { loading, data } = useQuery(QUERY_ME_BASIC);
    const currentUser = data?.me.username
    const otherUser = members.find((m) => m.username !== currentUser)

    return (
        <div onClick={() => conversationId(_id)} className="conversation">
            <span className="conversationName">{otherUser?.username}</span>
        </div>

    )
}
