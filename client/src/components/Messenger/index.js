import React, { useState, useEffect }  from 'react';
import { useQuery, useMutation } from '@apollo/client';

import  { QUERY_MY_CONVERSATIONS, QUERY_ME_BASIC } from '../../utils/queries'
import { CREATE_MESSAGE, ADD_CONVERSATION } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './messenger.css';
import Message from "../Message";
import Conversation from "../Conversations";
import ChatOnline from "../ChatOnline";
import {useHistory, useRouteMatch} from "react-router-dom";

export default function Messenger() {  
    const loggedIn = Auth.loggedIn();
    const {params} = useRouteMatch();
    const [currentChat, setCurrentChat] = useState(params.id);
    const [messages, setMessages] = useState([]);
    const newId = conversationId => {setCurrentChat(conversationId)}
    const { loading, data } = useQuery(QUERY_MY_CONVERSATIONS);
    const conversations = data?.myConversations;
    const [newMessage, setNewMessage] = useState({text: ""});
    const [sendMessage] = useMutation(CREATE_MESSAGE)
    const [addConversation] = useMutation(ADD_CONVERSATION)
    const { loading: secondLoading, data : meData } = useQuery(QUERY_ME_BASIC);
    const adoptedFamilyData = meData?.me.adoptedFamily

    const history = useHistory()

    function refreshPage() {
        history.go(0)  
    }

    useEffect(() => {
        if(currentChat !== params.id) {
            setCurrentChat(params.id)
        }
    },[params.id])

    const addNewConversation = async (event) => {
        const addingConversation = await addConversation({
            variables: {
                receiverId: event._id
            }
        })
        refreshPage()
    }
   
    useEffect(() => {
        if(!loading && conversations && conversations.length){
            var conversationData = conversations.filter(obj => {
                return obj._id===currentChat
            })
            var conversationObj = conversationData.pop();
            if(conversationObj){
                var messageArry = conversationObj.messages
                setMessages(messageArry)
            }

        }
    },[currentChat, loading])

    const saveMessage = async() => {
        const pushMessage = await sendMessage({
            variables: {
                text: newMessage.text,
                conversationId: currentChat
            }
        })
        refreshPage()
    }

    const  handleMessageInput = (event) => {
        const {name, value} = event.target;
        setNewMessage({
            ...newMessage, 
            [name]: value
        })
    }
    
    return (
        <section>
                <div className='container columns has-text-centered is-centered mt-3 titleWrapper'>
                    <h1>
                    Messenger
                    </h1>
                </div>
            <div id='messageBox' className='columns' className={`messenger ${loggedIn}`}>
                <div className="chatMenu column">
                    <div className="chatMenuWrapper">
                    <p className='onlineText'>Current Conversations</p>
                        <div className="dropdown">
                            <button className="dropbtn">Start a Conversation</button>
                            <div className="dropdown-content">
                                {secondLoading ? (
                                <div>Loading...</div>
                                ) : (      
                                    adoptedFamilyData.map(c => <a key={c._id} onClick={() => addNewConversation(c)} href="#">{c.username}</a>)              
                                )}
                            </div>
                        </div>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (      
                            <div className='conversationsWrapper'>
                            {conversations.map(c =>  <Conversation _id={c._id} members={c.members} conversationId={newId} />)}
                            </div>                           
                        )}
                    </div>
                </div>
                <div className="chatBox column is-6">
                    <div className="chatBoxWrapper">
                        {
                            currentChat ?
                        <>
                        <div className="chatBoxTop">
                            {loading ? (
                                <div>Loading...</div>
                        ) : messages && messages.length?(                     
                                messages.map(c => <Message messageData={c}  />)                               
                        ): ''}
                        </div>
                        <div className="chatBoxBottom">
                            <textarea onChange={handleMessageInput} name="text" className="chatMessageInput" placeholder="Whats on your mind?"></textarea>
                            <button onClick={saveMessage} className="chatSubmitButton">Send</button>
                        </div>
                        </> : <span className='noConversationText'>Click on a user in the "Current Conversations" to view a conversation</span>}
                    </div>
                </div>  
                <div className="chatOnline column">
                    <div className="chatOnlineWrapper">
                        <p className='onlineText'>Families Online</p>
                        <ChatOnline />
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </section>
    )
}

