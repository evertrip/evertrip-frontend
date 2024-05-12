import React, { useState } from "react";
import { TextField, Button, Checkbox, Link, Box, Container } from "@mui/material";

interface UserInfo {
    name: string;
    nickname: string;
    email: string;
    password: string;
  }

const SignUpDisplay = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        nickname: '',
        email: '',
        password: ''
    });
    const [agreed, setAgreed] = useState(false);
    const [emailError, setEmailError] = useState<string>("");


    const handleChange = (prop: keyof UserInfo) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUserInfo({ ...userInfo, [prop]: event.target.value });
        
        if (prop === 'email') {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            setEmailError("올바른 형식의 이메일 주소가 아닙니다.");
            } else {
            setEmailError("");
            }
        }
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAgreed(event.target.checked);
    };


    return (
        <>
            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <Box style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', width: '100%' }}>
                    <h1 style={{ textAlign: 'center' }}>SIGN UP</h1>
                    <TextField label="Name" type="text" value={userInfo.name} onChange={handleChange('name')} variant="outlined" fullWidth margin="normal" />
                    <TextField label="Nickname" type="text" value={userInfo.nickname} onChange={handleChange('nickname')} variant="outlined" fullWidth margin="normal" />
                    <TextField 
                        label="Email" 
                        type="email" 
                        value={userInfo.email} 
                        onChange={handleChange('email')} 
                        variant="outlined" 
                        fullWidth 
                        margin="normal" 
                        error={!!emailError} 
                        helperText={emailError}  />
                    <TextField label="Password" type="password" value={userInfo.password} onChange={handleChange('password')} variant="outlined" fullWidth margin="normal" />
                    <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0' }}>
                        <Checkbox checked={agreed} onChange={handleCheckboxChange} />
                        <div>I agree to the <Link href="#">terms & policy</Link></div>
                    </div>
                    <Button  variant="contained" color="primary" fullWidth style={{ margin: '8px 0' }}>
                        Sign up
                    </Button>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        Have an account? <Link href="/login">Sign in</Link>
                    </div>
                </Box>
            </Container>
        </>
    );
};

export default SignUpDisplay;
