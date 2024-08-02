import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const CardEl = ({title,slug,coverPhoto,author} )=> {
    return (
        <div>
            <Card sx={{boxShadow:"rgba(0,0,0,0.1), 0px 4px 12px", borderRadius:4}} >
                {
                    author &&  
                    <CardHeader 
                        avatar={<Avatar src={author.avatar.url} sx={{marginLeft:2}}/>}
                        title={
                            <Typography component="p" variant="p" color="text.primary">
                                {author.name}
                            </Typography>} 
                    />
                }
              
                <CardMedia component="img" height="194" image={coverPhoto.url} alt={slug}/>
                <CardContent>
                    <Typography component="h3" variant="h6" color="text.secondry" fontWeight={600}>
                        {title}
                    </Typography>
                </CardContent>
                <Divider variant='middle' sx={{margin:"10px"}} />
                <CardActions>
                    <Link to={`/blogs/${slug}`} style={{textDecoration:"none", width:"100%"}}>
                        <Button size='small' variant="outlined"  sx={{width:"100%"}} color="secondary">ادامه مقاله</Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default CardEl;