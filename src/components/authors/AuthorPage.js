import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../../graphql/Queries';
import { Avatar, Container,Grid, Typography } from '@mui/material';


//Components
import CardEl from '../shared/CardEl';
import Loader from '../shared/Loader';


const AuthorPage = () => {

    const { slug }=useParams();
    const {loading,data,error}= useQuery(GET_AUTHOR_INFO, {
        variables:{slug},
    });

    if(loading){
        return <Loader/>
    }
    if(error){
        return <h1>An Error Accured</h1>
    }

    const { author }=data;

    console.log(data);
    return (
    <Container maxWidth="lg">
        <Grid container mt={10}>
            <Grid item xs={12} display="flex" flexDirection="column" alignItems="center" >
                <Avatar src={author.avatar.url} sx={{width:250,height:250}} />
                <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
                    {author.name}
                </Typography>
                <Typography component="p" variant="h5" color="text.secondary" mt={2}>
                    {data.author.field}
                </Typography>
            </Grid>
            <Grid item xs={12} mt={5}>
              <div dangerouslySetInnerHTML={{__html:author.descripion.html}}>

              </div>
            </Grid>
            <Grid item xs={12} mt={6}>
                <Typography component="h3" variant="h5" fontWeight={700} >
                مقالات {author.name} 
                </Typography>
                <Grid container spacing={2} mt={2}>
                    {author.posts.map(post=>(
                        <Grid item xs={12} sm={6} md={4} key={post.id}>
                            <CardEl title={post.title} slug={post.slug} coverPhoto={post.coverPhoto}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    </Container>
    );
};

export default AuthorPage;