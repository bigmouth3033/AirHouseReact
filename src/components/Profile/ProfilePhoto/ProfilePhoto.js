import React from 'react'
import styled from 'styled-components'
import SideBar from '../EditProfile/SideBar'
import Content from './Content'
import { UserQuery } from 'api/userApi'
import Loading from 'components/Loading'
import { Navigate } from 'react-router-dom'


const Box = styled.div`
    & .containerProfilePhoto{
      display: grid;
        grid-template-columns: 1fr 3fr;
    }
`
export default function ProfilePhoto() {
  const userQuery = UserQuery();
  if(userQuery.isLoading){
      return <Loading/>
  }
  if (userQuery.isError) {
      return <Navigate to="/admin_login"/>;
  }
  return (
    <div>
      <Box>
        <div className='containerProfilePhoto'>
          <SideBar />
          <Content user={userQuery.data}/>

        </div>
      </Box>
    </div>
  )
}
