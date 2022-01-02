import React from 'react';
import { useQuery } from '@apollo/client';

import  { QUERY_MY_CONVERSATIONS } from '../../utils/queries'
import Auth from '../../utils/auth';
import './messenger.css';
import Message from "../Message";
import Conversation from "../Conversations";
import ChatOnline from "../ChatOnline";


export default function Messenger() {
    const { loading, data } = useQuery(QUERY_MY_CONVERSATIONS);
    const conversations = data?.myConversations || [];
    const loggedIn = Auth.loggedIn();

    return (
        <div className={`messenger ${loggedIn}`}>
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input
                    type="text"
                    placeholder="Search for Family"
                    className="chatMenuInput"/>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        conversations.map(c => <Conversation _id={c._id} members={c.members} />)
                    )}
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">




                        <Message/>
                        <Message own={true} />
                        <Message />
                        <Message own={true} />
                        <Message/>
                        <Message own={true} />
                        <Message />
                        <Message own={true} />
                        <Message/>
                        <Message own={true} />
                        <Message />
                        <Message own={true} />
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" placeholder="Whats on your mind?"></textarea>
                        <button className="chatSubmitButton">Send</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <p className='onlineText'>Families Online</p>
                    <ChatOnline />
                    <ChatOnline />
                </div>
            </div>
        </div>
    )
}
