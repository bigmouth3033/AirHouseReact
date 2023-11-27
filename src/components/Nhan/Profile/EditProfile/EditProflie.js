import React from 'react'
import SideBar from './SideBar'
import Content from './Content'
import styled from 'styled-components'
import { UserQuery } from 'api/userApi'
import Loading from 'components/Loading'

const Box = styled.div`
    & .containerSideBar{
        display: grid;
        grid-template-columns: 1fr 3fr;
    }

`
export default function EditProflie() {    
    const userQuery = UserQuery();
    if(userQuery.isLoading){
        return <Loading/>
    }
    
    return (
        <div>
            <Box>
                <div className='containerSideBar'>
                <SideBar />
                <Content user={userQuery.data}/>
                </div>
            </Box>

        </div>
    )
}
