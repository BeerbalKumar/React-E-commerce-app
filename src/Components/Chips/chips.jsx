import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function Chips() {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
    <div className={classes.root}>
      
      
      <Chip
        icon={<FaceIcon />}
        label="Electronics"
        clickable
        className={classes.chip}
        style={{
          backgroundColor:"#59b8af",
          color:"white"
        }}
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
      />
      <Chip
        icon={<FaceIcon />}
        label="Electronics"
        clickable
        className={classes.chip}
        style={{
          backgroundColor:"#59b8af",
          color:"white"
        }}
        // onDelete={handleDelete}
        // deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Electronics"
        // onDelete={handleDelete}
        className={classes.chip}
        style={{
          backgroundColor:"#59b8af",
          color:"white"
        }}
      />
      <Chip
        avatar={
            <FaceIcon />
        }
        label="Electronics"
        // onDelete={handleDelete}
        className={classes.chip}
        style={{
          backgroundColor:"#59b8af",
          color:"white"
        }}
      />
      <Chip
        icon={<FaceIcon />}
        label="Electronics"
        // onDelete={handleDelete}
        className={classes.chip}
        style={{
          backgroundColor:"#59b8af",
          color:"white"
        }}
      />
    </div>
  );
}
