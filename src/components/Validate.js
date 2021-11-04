import React, {Fragment, useState } from 'react';
import {useHistory} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css'
import moment from "moment";
import Axios from 'axios';
import {  FormControl,  Button} from '@mui/material'
import { useDispatch} from 'react-redux';
import {dates} from '../actions/dates'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DatePicker } from "@material-ui/pickers";




export default function Validate() {
    const [checkInDate, setCheckInDate] = useState(null); 
        let date = new Date(checkInDate);
    // add a day
    date.setDate(date.getDate() + 1);

    const [checkOutDate, setCheckOutDate] = useState(null);
    const [optionValue, setOptionValue] = useState("");
   


    const history = useHistory();
    const handleCheckInDate = (date) => {
        setCheckInDate(date);
        setCheckOutDate(null);
      };

      const handleCheckOutDate = (date) => {
        setCheckOutDate(date);
      };


    const handleSelect = (e) => {
      setOptionValue(e.target.value);
    };




    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(checkInDate == null){
          alert('Please Select Check In Date')
        }else if(checkOutDate == null){
          alert('Please Select Check Out Date')
        }else{
        let startDate = checkInDate
        let endDate =checkOutDate
        let roomnum = optionValue;
        let getString = `http://localhost:8084/check?room=${roomnum}&in=${startDate}&out=${endDate}`
        Axios.get(getString)
        .then((res) => {
          if(res.data === true){
            handleResponse();
            history.push('/login');
          }else{
            alert("Not Available, Please Select Different Dates or Room")
          }

        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        })
      }
    }

    const dispatch = useDispatch();

    const handleResponse = () => {
        dispatch(dates(moment(checkInDate),moment(checkOutDate), optionValue));
        }

    return (


        <div>
          <br/>
          <br/>
          <br/>
          <form onSubmit={handleSubmit}>
          <Fragment>
    <DatePicker
    required
       label="Check In Date"
       autoOk
       defaultDate={new Date()}
       animateYearScrolling
       minDate={new Date()}
        value={checkInDate}
        onChange={handleCheckInDate}
      />

             
<DatePicker
required
       label="Check Out Date"
       autoOk
       minDate={date}
       animateYearScrolling
        value={checkOutDate}
        onChange={handleCheckOutDate}
      /> 
    </Fragment>

<br/><br/>
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required>
        <InputLabel>Room Number</InputLabel>
        <Select
          labelId="select-label"
          id="room-select"
          value={optionValue}
          label="Room Selection"
          onChange={handleSelect}
        required>
          <MenuItem value={1}>Room 1</MenuItem>
          <MenuItem value={2}>Room 2</MenuItem>
          <MenuItem value={3}>Room 3</MenuItem>
          <MenuItem value={4}>Room 4</MenuItem>
          <MenuItem value={5}>Room 5</MenuItem>
          <MenuItem value={6}>Room 6</MenuItem>
          <MenuItem value={7}>Room 7</MenuItem>
          <MenuItem value={8}>Room 8</MenuItem>
          <MenuItem value={9}>Room 9</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <br/><br/>
    <Button variant="contained" color="primary" type="submit" value="Submit">Search</Button><br/><br/><br/>

</form>
        </div>
       



    )
}