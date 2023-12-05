import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
& .dialogBoxContainer{
    border: solid thin black;
    box-sizing: border-box;
    max-width: 200px;
    
}
`
export default function DialogBox(props) {
    return (        
            <Box>
                <div className='dialogBoxContainer'>
                    <div>
                        {props.userInfor.to_email}
                    </div>
                    <div>                    
                    {props.userInfor.body}
                    </div>
                </div>
            </Box>        
    )
}
