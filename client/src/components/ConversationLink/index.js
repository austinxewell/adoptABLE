import React, { useState, useEffect } from "react";
import "./conversationLink.css"

export default function ConversationLink({adoptedFamilyData}){

    const [adoptedFamilyId, setAdoptedFamilyId] =  useState();

    console.log('conversations link level: ', adoptedFamilyData)

    useEffect(() => {
        if(adoptedFamilyId !== ""){
        setAdoptedFamilyId("")
        }
    },)

    return(
        <a onClick={() => setAdoptedFamilyId(adoptedFamilyData._id)} href="#">{adoptedFamilyData.username}</a>
    )
}