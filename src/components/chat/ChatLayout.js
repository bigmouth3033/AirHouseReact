import React from 'react'
import Chat from './Chat'
import styled from 'styled-components'
import { UserQuery } from 'api/userApi';
import Loading from 'components/Loading';
import { Navigate } from 'react-router-dom';


const Box = styled.div`
/* height: 500px; */

`
export default function ChatLayout() {
    const userQuery = UserQuery();
    if(userQuery.isLoading){
        return <Loading/>
    }
    if (userQuery.isError) {
        return <Navigate to="/admin_login"/>;
    }
    

    return (
        <Box>
            <Chat userInfor={userQuery}/>
        </Box>

    )
}
