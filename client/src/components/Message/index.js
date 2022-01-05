import React, { useState, useEffect } from 'react'
import {useQuery} from '@apollo/client'
import "./message.css"

import { QUERY_ME_BASIC } from '../../utils/queries';


export default function Message({ messageData}) {
    const [own, setOwn] = useState()

    const { loading, data } = useQuery(QUERY_ME_BASIC);
    const currentUser = data?.me.username

    useEffect(() => {
        if(currentUser === messageData.sender) {
            setOwn(true)
        }
    },[])

    return (
        <div className={own ? "message own" : "message"} id='messageOwnState'>
            <div className="messageTop">
                <p className="messageText"> {messageData.text}
                </p>
            </div>
            <div className="messageBottom">{messageData.createdAt}</div>
        </div>
    )
}
