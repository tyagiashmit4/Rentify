import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      console.log(response.data); // Handle login success
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
    >
      <Card variant="outlined">
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" component="h2" gutterBottom>
              Login
            </Typography>
            <div>
              <TextField
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
            </div>
            <div>
              <TextField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
              />
            </div>
            <div>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginForm;
