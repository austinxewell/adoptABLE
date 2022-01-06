import React from 'react'
import {useQuery} from '@apollo/client'
import "./conversations.css"
import {Link} from "react-router-dom"

import  { QUERY_ME_BASIC } from '../../utils/queries'

export default function Conversation({_id, members, conversationId}) {
    const { loading, data } = useQuery(QUERY_ME_BASIC);
    const currentUser = data?.me.username
    const otherUser = members.find((m) => m.username !== currentUser)

    return (

        <Link to={`/messenger/${_id}`}>
            <div className="conversation">
                <span className="conversationName">{otherUser?.username}</span>
            </div>
        </Link>


    )
}
