import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    colorDefault:{
        color:'gray',
    },
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    white: {
      color: "gray",
      background: "#EEF0F4",
      borderRadius: "100%",
    }, small: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        // cursor:'pointer',
        boxShadow:"-10px -10px 15px rgba(255,255,255,0.5),10px 10px 15px rgba(70,70,70,0.12),inset -10px -10px 15px rgba(255,255,255,0.5),inset 10px 10px 15px rgba(70,70,70,0.12)",
      },
  }));
  // -1px 7px 48px -8px rgba(0,0,0,0.56)
export default function UserAvatar({url}) {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Avatar src={url&&url} style={{width:"170px",height:"170px",background:'white',color:'gray'}}  className={classes.small} ></Avatar>
    </div>
  );
}
