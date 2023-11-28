import React, { useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
    & .ContentContainer{
        

    }

    & .ContentContainer input{
        width: 40%;
        
    }
    & .ContentContainer .FormControll{
        display: grid;
        grid-template-columns: 1fr 1fr;
        
    }

`
export default function Content(props) {
    // console.log(props.user);
    const [firstName, setFirstName] = useState(props.user.user.first_name);
    const [isValidFN,setIsValidFN] = useState(false);

    const [lastName, setLastName] = useState(props.user.user.last_name);
    const [isValidLN,setIsValidLN] = useState(false);

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState(props.user.user.email);
    const [phone, setPhone] = useState('');
    const [where, setWhere] = useState('');
    const [describe, setDescribe] = useState('');
    console.log('render');
    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
        console.log(e.target.value);
        if(e.target.value == ''){
            setIsValidFN(true);
        }else{
            setIsValidFN(false);
        }        
    }

    const handleLastName = (e) =>{
        setLastName(e.target.value);
        console.log(e.target.value);
        if(e.target.value == ''){
            setIsValidLN(true);
        }else{
            setIsValidLN(false);
        }        
    }


    // console.log(userQuery.data.user);
    return (
        <div>
            <Box>
                <div className='ContentContainer'>
                    <form className='FormControll'>
                        <div>
                            <ul>
                                <li><label>First Name</label></li>
                                <li><input type='text' value={firstName} onChange={e => handleFirstName(e)} /></li>
                                { isValidFN && <li>cannot be blank</li>}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><label>Last Name</label></li>
                                <li><input type='text' value={lastName} onChange={e => handleLastName(e)} /></li>
                                {isValidLN && <li>cannot be blank</li>}
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><label>Display Name</label></li>
                                <li><input type='text' /></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><label>Email Address</label></li>
                                <li><input type='text' placeholder={email} readOnly/></li>


                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><label>Phone</label></li>
                                <li><input type='text' value={phone} onChange={e => setPhone(e.target.value)}/></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><label>I Am </label></li>
                                <li><select name="cars" id="cars">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><label>Where You Live</label></li>
                                <li><input type='text' /></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><label>Describe Yourself</label></li>
                                <li><input type='text' /></li>
                            </ul>
                        </div>


                    </form>
                </div>
            </Box>
        </div>
    )
}
