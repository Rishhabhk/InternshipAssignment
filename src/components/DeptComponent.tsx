import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Collapse, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { List } from '@mui/material';
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const DeptComponent = () => {
    const [checked, setChecked] = React.useState([false, false, false, false, false]);

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked, checked[2], checked[3], checked[4]]);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1], checked[2], checked[3], checked[4]]);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked, checked[2], checked[3], checked[4]]);
    };

    const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], checked[1], event.target.checked, event.target.checked, event.target.checked]);
    };

    const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], checked[1], event.target.checked, checked[3], checked[4]]);
    };

    const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], checked[1], checked[2], event.target.checked, checked[4]]);
    };

    const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], checked[1], checked[2], checked[3], event.target.checked]);
    };


    const customerServiceChildren = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="Support"
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label="Customer success"
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
        </Box>
    );

    const designChildren = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel
                label="Graphic design"
                control={<Checkbox checked={checked[2]} onChange={handleChange5} />}
            />
            <FormControlLabel
                label="Product design"
                control={<Checkbox checked={checked[3]} onChange={handleChange6} />}
            />
            <FormControlLabel
                label="Web design"
                control={<Checkbox checked={checked[4]} onChange={handleChange7} />}
            />
        </Box>
    );

    const [openService, setOpenService] = useState(true);
    const [openDesign, setOpenDesign] = useState(true);

    function openServiceHandler() {
        setOpenService(!openService);
    }
    function openDesignHandler() {
        setOpenDesign(!openDesign);
    }

    return (
        <Box sx={{ m: 5, ml: 10, mr: 10 }}>
            <List sx={{ display: 'flex' }} >
                <ListItemButton onClick={openServiceHandler} sx={{ borderRadius: 50, width: 60, mr: 1 }} >
                    <ListItemIcon>{openService ? <ExpandLessIcon /> : <ExpandMoreIcon />}</ListItemIcon>
                </ListItemButton>
                <ListItem divider sx={{ border: 'none', m: 0, p: 0 }}>
                    <FormControlLabel
                        label="Customer Service"
                        control={
                            <Checkbox
                                indeterminate={checked[0] !== checked[1]}
                                checked={checked[0] && checked[1]}
                                onChange={handleChange1}
                            />
                        }
                    />
                </ListItem>
            </List>
            <Collapse in={openService} >
                <List sx={{ p: 0 }}>
                    <ListItem sx={{ display: "block", ml: 9, p: 0 }}>
                        {customerServiceChildren}
                    </ListItem>
                </List>
            </Collapse>

            <List sx={{ display: 'flex', mt: 1 }} >
                <ListItemButton onClick={openDesignHandler} sx={{ borderRadius: 50, width: 60, mr: 1 }}  >
                    <ListItemIcon >{openDesign ? <ExpandLessIcon /> : <ExpandMoreIcon />}</ListItemIcon>
                </ListItemButton>
                <ListItem divider sx={{ border: 'none', m: 0, p: 0 }}>
                    <FormControlLabel
                        label="Design"
                        control={
                            <Checkbox
                                indeterminate={(checked[2] !== checked[3]) || (checked[3] !== checked[4]) || (checked[2] !== checked[4])}
                                checked={checked[2] && checked[3] && checked[4]}
                                onChange={handleChange4}
                            />
                        }
                    />
                </ListItem>
            </List>
            <Collapse in={openDesign} >
                <List sx={{ p: 0 }}>
                    <ListItem sx={{ display: "block", ml: 9, p: 0 }}>
                        {designChildren}
                    </ListItem>
                </List>
            </Collapse>
        </Box>
    );
}

export default DeptComponent