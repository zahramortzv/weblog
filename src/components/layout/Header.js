import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <AppBar position="sticky">
                <Container maxWidth='lg'>
                    <Toolbar>
                        <Typography component="h1" variant="h5" fontWeight="900" flex={1}> 
                            <Link to="/" style={{textDecoration:"none",color:"#fff"}}>
                            وبلاگ من
                            </Link>
                        </Typography>
                        <Link to="/" style={{textDecoration:"none",color:"#fff"}}>
                            <MenuBookIcon />
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;