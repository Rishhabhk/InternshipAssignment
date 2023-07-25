import React from 'react'
import { TextField, Button, Grid, Typography } from '@mui/material'
import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box/Box';

type Props = {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    isLoggedIn: boolean;
}

const Form = ({ setIsLoggedIn, isLoggedIn }: Props) => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", number: "", email: "" });

    function changeHandler(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setFormData((prevData) => {
            return {
                ...prevData, [name]: value
            }
        })
    }

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData));
        navigate("/home");
        setIsLoggedIn(true);
        setFormData({
            name: "",
            number: "",
            email: ""
        })
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: "8vw" }}>
            <form onSubmit={submitHandler}>
                <Grid container gap={2} justifyContent='center' sx={{ width: "50vw", boxShadow: '0 0 10px -6px black', p: 3, pb: 6, borderRadius: 3 }} textAlign='center'>
                    <Grid item xs={12} lg={10} justifyContent='center' m="1vw">
                        <Typography variant='h5'>
                            {
                                isLoggedIn ?
                                    "Want to Sign up with another Details ?" :
                                    "Please provide the following information"
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={5} >
                        <TextField type="text"
                            name='name'
                            value={formData.name}
                            fullWidth
                            id="name"
                            margin="dense"
                            label="Name"
                            variant="outlined"
                            onChange={changeHandler}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} lg={5} >
                        <TextField type="number"
                            name="number"
                            value={formData.number}
                            fullWidth
                            margin="dense"
                            id="phoneNumber"
                            label="Phone Number"
                            variant="outlined"
                            onChange={changeHandler}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} lg={10.3} >
                        <TextField
                            name="email"
                            value={formData.email}
                            type="email"
                            fullWidth
                            margin="dense"
                            id="email"
                            label="Email ID"
                            variant="outlined"
                            onChange={changeHandler}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <Button
                            size='large'
                            fullWidth
                            variant="contained"
                            type="submit"
                        >Sign Up</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

export default Form