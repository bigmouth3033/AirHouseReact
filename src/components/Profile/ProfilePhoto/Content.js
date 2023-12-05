import React, { useState } from 'react'
import styled from 'styled-components'
import img from './images.jpg';
import axiosClient from 'api/axiosClient';

const Box = styled.div`
    & .ContentProfilePhoto{
            display: flex;
            border: solid 1px #dee2e6;
            flex-wrap: nowrap;
    }
    & .image{
        width: 200px;
        height: 200px;
    }
`
export default function Content(props) {
    console.log(props.user.user);
    const [image, setImage] = useState();
    const email = props.user.user.email;
    

    const updateImage = async (payload) => {
        let response = await axiosClient.post("uploadImage", payload);
        console.log(response.data);
        return response.data;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(image);
        const formData = new FormData();
        formData.append('email',email);
        formData.append('image',image)
        let rs = updateImage(formData)        
    }

    return (
        <div>
            <Box>
                <div className='ContentProfilePhoto'>

                    <div>
                        {/* <img src={img} alt="Image Description" /> */}
                        <img src={props.user.user.image} alt="Image Description" className='image'/>
                    </div>
                    <div>
                        <ul>
                            <li>Please upload a clear photo to help hosts and guests to learn about each other.</li>
                            <li>
                                <form onSubmit={e => handleSubmit(e)}>
                                <input type='file' onChange={e => setImage(e.target.files[0])} />
                                <input type='submit'/>
                                </form>
                                
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </Box>
        </div>
    )
}
