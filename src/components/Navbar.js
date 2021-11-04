import { Link } from 'react-router-dom';
import {useState } from 'react';

import {
    AppBar,
    Tab,
    Typography,
    Toolbar,
    Tabs,
    Box

} from '@material-ui/core';


const Navbar = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return (
    <>
    <AppBar className="nav-bar" style={{backgroundColor: "black", color : "white"}} position="sticky" >
        <Box >

            <Tabs
                value={value}
                onChange={handleChange}
                centered
            >
            {/* <Toolbar >
                <Typography className="nav-title"> */}
                    <Tab component={Link} to="/" label="Home"/>
                    <Tab component={Link} to="/amenities" label="Amenities"/>
                    <Tab component={Link} to="/availability" label="Reservation"/>
                    <Tab component={Link} to="/viewres" label="Check Booked"/>
                {/* </Typography>
            </Toolbar> */}
            </Tabs>
        </Box>
    </AppBar>

        </>
    )

};

export default Navbar;