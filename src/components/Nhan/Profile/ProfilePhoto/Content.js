import React from 'react'
import styled from 'styled-components'
import img from './images.jpg';

const Box = styled.div`
    & .ContentProfilePhoto{
            display: flex;
            border: solid 1px #dee2e6;
            flex-wrap: nowrap;
    }
    

`

export default function Content() {
    return (
        <div>
            <Box>
                <div className='ContentProfilePhoto'>

                    <div>
                        <img src={img} alt="Image Description" />
                    </div>
                    <div>
                        <ul>
                            <li>Please upload a clear photo to help hosts and guests to learn about each other.</li>
                            <li><input type='file' /></li>
                        </ul>
                    </div>
                </div>
            </Box>
        </div>
    )
}
