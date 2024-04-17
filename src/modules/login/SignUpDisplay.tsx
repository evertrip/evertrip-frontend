import React from "react";
import { TextField, Button, Checkbox, Link, Box, Container } from "@mui/material";

export default function SignUpDisplay(){
    return(
        <>
         <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', width: '100%' }}>
                <h1 style={{ textAlign: 'center' }}> SIGN UP</h1>
                <TextField label="Name" type="text" variant="outlined" fullWidth margin="normal" />
                <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" />
                <TextField label="password" type="password" variant="outlined" fullWidth margin="normal" />
                <div style ={{display: 'flex', alignItems: 'center', margin: '8px 0' }}>
                    <Checkbox />
                    <div>I agree to the <Link href="#">terms & policy</Link></div> 
                </div>
                <Button variant="contained" color="primary" fullWidth style={{ margin: '8px 0' }}>
                    Sign up
                </Button>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    Have an account? <Link href="/login">Sign in</Link>
                </div>
            </Box>
          </Container>
        </>
    );
}