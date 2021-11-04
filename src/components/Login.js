import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { InputLabel, Input, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { setUserEmail } from '../redux/user';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const name = useSelector(state => state.user.name);
    console.log(name)
    const dispatch = useDispatch();

    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        let payload = {
            email: email,
            password: password,
        };

        Axios.get('http://localhost:8084/getUser?email='+email)
            .then((res) => {
                if(res.data === true){
                    dispatch(setUserEmail(email))
                    history.push('/reservation')
                }else{
                    alert("User NOT Found! Please Try Again")
                }
            })
            .catch((err) => {
                console.log('ERRROR')
            })
        
    };

    console.log(name)

    const handleNewSubmit = e => {
        e.preventDefault();

        let payload = {
            email: newEmail,
            password: newPassword,
        };

        Axios.post('http://localhost:8084/postUser', payload)
            .then((res) => {
                if (res.data == true){
                    alert("Existing User, Please Login Instead")
                }else{
                dispatch(setUserEmail(newEmail))
                history.push('/reservation')
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
                    id="form1"
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
                    id="form1"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    />
            </InputLabel>
            <br/>
            <Button variant="contained" color="primary" type="submit" value="Submit">Login</Button>
        </form>

        <h2 className="header">New Users, Create Account Here</h2>
        <form onSubmit={handleNewSubmit}>
            <InputLabel>
                Email:
                <Input
                id="form2"
                    type="text"
                    value={newEmail}
                    onChange={e => setNewEmail(e.target.value)}
                    required
                />
            </InputLabel>
            <br />

            <InputLabel>
                Password:
                <Input
                id="form2"
                    type="password"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    required
                    />
            </InputLabel>
            <br/>
            <Button variant="contained" color="primary" type="submit" value="Submit">Login</Button>
        </form>
        </>
    );
};

export default Login;