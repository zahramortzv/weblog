import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

//components
import Authors from '../authors/Authors';
import Blogs from '../blog/Blogs';

const HomePage = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={2} padding={3}>
                    <Grid item xs={12} sm={3} mt={4}> 
                        <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
                            {/* نویسندگان */}
                        </Typography>
                        <Authors />
                    </Grid>
                    <Grid item  xs={12} sm={9}  mt={4}>
                          <a href={'/justblogs'} style={{textDecoration:"none"}}>
                          <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
                            {/* مقالات */}
                            </Typography>
                          </a>
                        <Blogs />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default HomePage;