import React from "react";
import { useQuery } from "@apollo/client";
import "./conversationLink.css"

import { QUERY_ME_BASIC } from "../../utils/queries";



export default function ConversationLink({adoptedFamilyData}){

    return(
        <a href="#">{adoptedFamilyData.username}</a>
    )
}