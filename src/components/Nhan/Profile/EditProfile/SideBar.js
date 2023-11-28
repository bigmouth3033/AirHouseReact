import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Box = styled.div`
 & .SideBar li{
    border-bottom: 1px solid #dee2e6;    
 }
 & .SideBar{
    border: solid 1px #dee2e6;
    /* max-width: 10%; */
    text-align: left;
 }
`

export default function () {
  return (
    <div>
      <Box>
        <ul className='SideBar'>
          <li>
            <Link to="/user/profile">Edit Profile</Link>
            </li>
          
          <li><Link to="/user/profile/media">Profile Photos</Link></li>
          <li>Trust & Verification</li>
          <li>Review About You</li>
          <li>Review By You</li>
        </ul>
      </Box>
    </div>
  )
}
