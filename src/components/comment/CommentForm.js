import React,{ useState } from 'react';
import {Typography, Grid, TextField, Button } from '@mui/material';
import { SEND_COMMENT } from '../../graphql/Mutations';
import { useMutation } from '@apollo/client';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//RTL Style
import { StyleSheetManager } from 'styled-components';
import rtlPlugin from 'stylis-plugin-rtl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

const CommentForm = ({slug}) => {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [text,setText]=useState("");

const [sendComment, {loading,data}] = useMutation(SEND_COMMENT,{variables:{name, email, text, slug}});

const sendHandler = () =>{
    if(name && email && text){
        sendComment();

        if(data){
            toast.success("کامنت ارسال شد و منتظر تایید می باشد", {
                position: "top-center",
            });
        }
    }
    else{
        toast.warn("مقادیر فیلدها نمی تواند خالی باشد", {
            position: "top-center",
        });
    }
}


    return (
        <StyleSheetManager stylisPlugins={[rtlPlugin]}>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <div dir="rtl">
                        <Grid container sx={{boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
                        borderRadius:4,
                        py:1,
                        mt:5,
                        }}>
                            <Grid item xs={12} m={2}>
                                <Typography component="p" variant="h6" color="primary" fontWeight={700}>
                                    ارسال کامنت
                                </Typography>
                            </Grid>
                            <Grid item xs={12} m={2} dir='rtl'>
                                <TextField  label="نام کاربری" variant="outlined" sx={{width:"100%"}} value={name} onChange={(e)=>setName(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} m={2}>
                                <TextField label="ایمیل" variant="outlined" sx={{width:"100%"}} value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} m={2}>
                                <TextField label="متن کامنت" variant="outlined" sx={{width:"100%"}} value={text} onChange={(e)=>setText(e.target.value)} multiline minRows={4}/>
                            </Grid>
                            <Grid item xs={12} m={2}>
                                {
                                    loading ? <Button variant="contained" disabled onClick={sendHandler}>درحال ارسال</Button>:
                                            <Button variant="contained" onClick={sendHandler}>ارسال</Button>
                                }
                            </Grid>
                            <ToastContainer />
                        </Grid>
                    </div>     
                </ThemeProvider>
            </CacheProvider>
        </StyleSheetManager>
    );
};

export default CommentForm;