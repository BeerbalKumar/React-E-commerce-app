import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color:"white",
    outLine:"none",
    backgroundColor:"#59b8af",
  },
  input: {
    display: 'none',
  },
}));

export default function TextButtons(props) {
  const classes = useStyles();
  console.log("===>>>",props.onClick)

  return (
    <div>
      <Button  onClick={()=>props.onClick.push(props.path)} className={classes.button}>{props.value}</Button>

    </div>
  );
}
