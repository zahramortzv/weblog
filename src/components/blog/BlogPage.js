import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams , useNavigate} from 'react-router-dom';
import { GET_BLOG_INFO } from '../../graphql/Queries';
import { Container, Typography,Avatar, Grid } from '@mui/material';
import { Box } from '@mui/system';
import sanitizeHtml from 'sanitize-html';

//Components
import  Loader  from '../shared/Loader';
//Icons
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import CommentForm from '../comment/CommentForm';
import Comments from '../comment/Comments';


const BlogPage = () => {

    const { slug } = useParams();
    const navigate = useNavigate();
    const {loading,data,error} = useQuery(GET_BLOG_INFO,{variables:{slug}});

     
    if(loading){
        return <Loader />
    }
    if(error){
        return <h1>An Error Accured</h1>
    }
    
    return (
        <Container maxWidth="lg" >
            <Grid container>
                <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
                    <Typography component="h2" variant="h4" color="text.primary" fontWeight={700}>
                        {data.post.title}
                    </Typography>
                    <ArrowBackIosNewRoundedIcon onClick={()=> navigate(-1)} style={{cursor:"pointer"}} />
                </Grid>
                <Grid item xs={12} mt={6} >
                    <img src={data.post.coverPhoto.url} alt={data.post.slug} width="100%" style={{borderRadius:"15px"}} />
                </Grid>
                <Grid item xs={12} mt={7} display="flex" alignItems="center">
                    <Avatar src={data.post.author.avatar.url} sx={{width:80,height:80, marginTop:2}}/>
                    <Box component="div" marginRight={2}>
                        <Typography component="p" variant="h5" color="text.primary" fontWeight={700}>
                            {data.post.author.name}
                        </Typography>
                        <Typography component="p" variant="p" color="text.secondary" fontWeight={700}>
                            {data.post.author.field}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} mt={5}>
                    <div dangerouslySetInnerHTML={{__html:sanitizeHtml(data.post.content.html)}}></div>
                </Grid>
                <Grid item xs={12}>
                    <CommentForm slug={slug}/>
                </Grid>
                <Grid item xs={12}>
                    <Comments slug={slug}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogPage;