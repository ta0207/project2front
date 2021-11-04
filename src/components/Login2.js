import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { InputLabel, Input, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { setUserEmail } from '../redux/user';

const Login2 = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const name = useSelector(state => state.user.name);
    const [post, setPost] = React.useState(null);
    console.log(name)
    const dispatch = useDispatch();

    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        Axios.get('http://localhost:8084/viewRes?email='+email)

            .then((res) => {
                if(res.data[0] == null){
                    alert("No Existing Reservation Found!")
                }else{
                    dispatch(setUserEmail(email))
                    history.push('/viewres2')
                }
            })
            .catch((err) => {
                console.log('ERRROR')
            })
        
    };

    
    return (
        <>
        <h2 className="header">Existing users Login</h2>
        <form onSubmit={handleSubmit}>
            <InputLabel>
                Email:
                <Input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </InputLabel>
            <br />

            <InputLabel>
                Password:
                <Input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    />
            </InputLabel>
            <br/>
            <Button variant="contained" color="primary" type="submit" value="Submit">Login</Button>
        </form>

        </>
    );
};

export default Login2;