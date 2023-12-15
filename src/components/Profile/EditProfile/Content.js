import { useMutation } from "@tanstack/react-query";
// import { updateUser, } from "api/ProfileApi";
import axiosClient from "api/axiosClient";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  & .ContentContainer {
    border: solid 1px #dee2e6;
    /* font-size: 1.em; */
  }
  & .ContentContainer li {
    padding: 5px;
  }

  & .ContentContainer input {
    height: 2.5em;
    width: 300px;
  }
  & .ContentContainer select {
    height: 2.5em;
    width: 300px;
  }
  & .ContentContainer .submitInput {
    max-width: 100px;
    border: solid thin red;
    background-color: white;
    color: red;
  }

  & .ContentContainer input:hover {
    border: solid 2px red;
  }

  & .ContentContainer .FormControll {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
  }
  & .ContentContainer .error {
    color: red;
    padding: 0px;
  }
`;
export default function Content(props) {
  console.log(props.user);
  const [firstName, setFirstName] = useState(props.user.user.first_name);
  const [isValidFN, setIsValidFN] = useState(false);

  const [lastName, setLastName] = useState(props.user.user.last_name);
  const [isValidLN, setIsValidLN] = useState(false);

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState(props.user.user.email);

  const [phoneNumber, setPhoneNumber] = useState(props.user.user.phonenumber);
  const [isValidPhone, setIsValidPhone] = useState(false);

  const [address, setAddress] = useState(props.user.user.address);
  const [about, setAbout] = useState(props.user.user.about);

  const [gender, setGender] = useState(props.user.user.gender);
  console.log("render");
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value == "") {
      setIsValidFN(true);
    } else {
      setIsValidFN(false);
    }
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value == "") {
      setIsValidLN(true);
    } else {
      setIsValidLN(false);
    }
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    const regPhone = /^(\+\d{1,2})\s\d{1,9}$/;
    if (!regPhone.test(e.target.value)) {
      setIsValidPhone(true);
    } else {
      setIsValidPhone(false);
    }
  };

  const handleGender = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    if (gender === '') {
      setGender("Female");
    }
  }, []);



  const updateUser = async (payload) => {
    let response = await axiosClient.post("updateUser", payload);
    return response.data;
  };
  const mutation = useMutation({
    mutationFn: (payload) => {
      return updateUser(payload);
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      about,
      gender,
    };
    mutation.mutate(payload);

    alert('cap nhat thong tin thanh cong');
  };

  return (
    <Box>
      <div className="ContentContainer">
        <form className="FormControll" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <ul>
              <li>
                <label>First Name</label>
              </li>
              <li>
                <input type="text" value={firstName} onChange={(e) => handleFirstName(e)} />
              </li>
              {isValidFN && <li className="error">First Name cannot be blank</li>}
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <label>Last Name</label>
              </li>
              <li>
                <input type="text" value={lastName} onChange={(e) => handleLastName(e)} />
              </li>
              {isValidLN && <li className="error">Last Name cannot be blank</li>}
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <label>Display Name</label>
              </li>
              <li>
                <input type="text" />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <label>Email Address</label>
              </li>
              <li>
                <input type="text" placeholder={email} readOnly />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <label>Phone</label>
              </li>
              <li>
                <input type="text" value={phoneNumber} onChange={(e) => handlePhoneNumber(e)} placeholder="+84 xxxxxxxxx" />
              </li>
              {isValidPhone && <li className="error">Phone is not valid</li>}
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <label>I Am </label>
              </li>
              <li>                
                <select value={gender} name="gender" id="gender" onChange={(e) => handleGender(e)}>                  
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <label>Where You Live</label>
              </li>
              <li>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <label>Describe Yourself</label>
              </li>
              <li>
                <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} />
              </li>
            </ul>
          </div>
          {isValidFN || isValidLN || isValidPhone ? (
            <input type="submit" className="submitInput" disabled />
          ) : (
            <input type="submit" className="submitInput" />
          )}
        </form>
      </div>
    </Box>
  );
}
