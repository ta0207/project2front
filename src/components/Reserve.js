import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css'
import Axios from 'axios';
import { InputLabel, Input,TextField, Button } from '@mui/material'
import {useSelector} from 'react-redux';
import moment from "moment";

export default function Reserve(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const email = useSelector(state => state.user.name);
    const startdate= useSelector(state => state.datesReducer.start);
    const enddate = useSelector(state => state.datesReducer.end)
    const roomnum = useSelector(state => state.datesReducer.roomnum)
    const history = useHistory();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let payload = {
            email : email,
            startDate: startdate,
            endDate: enddate,
            roomnum: roomnum,
            firstName : firstName,
            lastName : lastName,
        }

        Axios.post('http://localhost:8084/postRes', payload)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        })
        history.push('/confirmation');
    }

    return (
      <>

      <h4 className="header">Enter your information here:</h4>
      <form onSubmit={handleSubmit}>
      <TextField id="filled-basic" defaultValue={email} label="Email" variant="filled" disabled/>
      <br />
        <TextField id="filled-basic" defaultValue={moment(startdate).format("MM-DD-YYYY")} label="Check In Date" variant="filled" disabled/>
        <br />
        <TextField id="filled-basic" defaultValue={moment(enddate).format("MM-DD-YYYY")} label="Check Out Date" variant="filled" disabled/>
        <br />
        <TextField id="filled-basic" defaultValue={roomnum} label="Room Number" variant="filled" disabled/>
        <br />

        <InputLabel>
          First Name:
          <Input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
        </InputLabel>
        <br />

        <InputLabel>
          Last Name:
          <Input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
        </InputLabel>
        <br/>

        <InputLabel>
          Credit Card:
          <Input
            type="number"
            required
          />
        </InputLabel>
        <br />

        <Button variant="contained" type="submit" value="Submit">Reserve Now!</Button><br/><br/>

      </form>

      </>
    );
  }
