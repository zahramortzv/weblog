import React from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_BLOGS_INFO } from '../../graphql/Queries';
import { Grid } from '@mui/material';

//components
import CardEl from '../shared/CardEl';

const Blogs = () => {

const {loading,data,error} = useQuery(GET_BLOGS_INFO);

if(loading){
    return <h1>is Loading...</h1>
}
if(error){
    return <h1>error</h1>
}

console.log(loading,data,error);

    return (
        <div>
            <Grid container spacing={2}>
                {data.posts.map(post=>
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <CardEl {...post} />
                    </Grid>
                    )}
            </Grid>
        </div>
    );
};

export default Blogs;