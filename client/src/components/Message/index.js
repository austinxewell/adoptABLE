import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import "./message.css"


import { QUERY_CONVERSATION_BY_ID, QUERY_MY_CONVERSATIONS } from '../../utils/queries';


export default function Message({own, conversationData, currentChatId}) {



    const { loading, data } = useQuery(currentChatId ? QUERY_CONVERSATION_BY_ID : QUERY_MY_CONVERSATIONS, {
        variables: { _id: currentChatId }
    });

    const messageArry = data.conversationById.messages



    console.log(messageArry)
// console.log(data)


    // var updatedMessages = (messages)

//     const [messages, setCurrentMessages] = useState([]);

// console.log('conversationData: ', conversationData)
// console.log('currentChatId: ', currentChatId)
 
    // const test1 = messages._id
    // console.log('messages._id: ', test1, 'currentChat: ', currentChat)

    
    // useEffect(() => {
    //     if (conversationData._id === currentChatId) {
    //      setCurrentMessages(messages)       
    //     }
    // })
    
    // console.log('messages: ', messages)

        // console.log(updatedMessages._id, currentChat)
    
    


        // console.log(message)
    



    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <p className="messageText"> Should only render 1 time
                </p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    )
}
