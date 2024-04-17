import React from "react";
import { TextField, Button, Checkbox, Link } from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginDisplay() {
    return (
      <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', width: '100%' }}>
          <h1 style={{ textAlign: 'center' }}>EVERTRIP</h1>
          <TextField label="Email" type="email" variant="outlined" fullWidth margin="normal" />
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />

          
          <Button variant="contained" color="primary" fullWidth style={{ margin: '8px 0' }}>
            Sign In
          </Button>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <Button variant="outlined" startIcon={<GoogleIcon />} fullWidth>
              Sign in with Google
            </Button>
            <Button variant="outlined" startIcon={<AppleIcon />} fullWidth>
              Sign in with Apple
            </Button>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            Don't have an account? <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </div>
      </>
    );
}
