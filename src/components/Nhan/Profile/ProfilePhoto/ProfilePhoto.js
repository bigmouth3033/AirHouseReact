import React from 'react'
import styled from 'styled-components'
import SideBar from '../EditProfile/SideBar'
import Content from './Content'


const Box = styled.div`
    & .containerProfilePhoto{
      display: grid;
        grid-template-columns: 1fr 3fr;
    }
`
export default function ProfilePhoto() {
  return (
    <div>
      <Box>
        <div className='containerProfilePhoto'>
          <SideBar />
          <Content/>

        </div>
      </Box>
    </div>
  )
}
