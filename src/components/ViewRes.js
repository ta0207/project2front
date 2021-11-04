import React, {Fragment, useState } from 'react';
import Axios from "axios";
import {useSelector} from 'react-redux';
import { InputLabel,  FormControl, TextField, Button } from '@mui/material'
import moment, { lang } from 'moment';
import {useHistory} from 'react-router-dom';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
export default function ViewRes() {
    const {t, i18n} =useTranslation();
    const languageHandler = lang => {
      i18n.changeLanguage(lang)
    }
    const [post, setPost] = React.useState(null);
    const email = useSelector(state => state.user.name);
    const [optionValue, setOptionValue] = useState("");
    
    const history = useHistory();
    React.useEffect(() => {
      Axios.get('http://localhost:8084/viewRes?email='+ email).then((response) => {
        console.log(response.data[0])
        setPost(response.data[0]);
      });
    }, []);
  
    if (!post) return null;


    const handleClick = (evt) => {
      evt.preventDefault();
      const confirmBox = window.confirm(t('confirm'))
      if (confirmBox === true) {
        Axios.delete('http://localhost:8084/postDel?email='+email)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        })
      }

  }
  


    const handleSelect = (e) => {
      setOptionValue(e.target.value);
    };

    const handleModify = (e) => {
      if (post.roomnum == optionValue){
        alert("Room Selected Is Same As Current Room")
      }
      setOptionValue(e.target.value);
    };
    return (<div>
<>

<h4 className="header">{t("header")}</h4>


<form onSubmit={handleClick}>
<TextField id="filled-basic" defaultValue={email} label={t('email')} variant="filled" disabled/> 
 <br/>

<TextField id="filled-basic" label={t('first')} disabled type="text" defaultValue={post.firstName} variant="filled" />
  <br/>
  <TextField id="filled-basic" label={t('last')} disabled type="text" defaultValue={post.lastName} variant="filled" />
 

<br/>
  <TextField id="filled-basic" defaultValue={moment(post.startDate).format("MM-DD-YYYY")} label={t('indate')}variant="filled" disabled/>
  <br/>
  <TextField id="filled-basic" defaultValue={moment(post.endDate).format("MM-DD-YYYY")} label={t('outdate')} variant="filled" disabled/>
  <br/>
  <TextField id="filled-basic" defaultValue={post.roomnum} label={t('room')} variant="filled" disabled/>
  <br/>  <br/>  <br/>
  <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{t('roomnum')}</InputLabel>
        <Select
          labelId="select-label"
          id="room-select"
          defaultValue= {post.roomnum}
          value={optionValue}
          label="Room Selection"
          onChange={handleSelect}
        >
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
   <Button variant="contained" onClick={handleModify}>{t('button1')}</Button><br/><br/>
   <Button variant="contained" type="submit" value="Submit">{t('button2')}</Button>
   <br/><br/><br/><br/>
</form>
<button onClick={() => languageHandler('en')}>{t('eng')}</button>
   <button onClick={() => languageHandler('vn')}>{t('viet')}</button>

</>
          </div>
      );
}
