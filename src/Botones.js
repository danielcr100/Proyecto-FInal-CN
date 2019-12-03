import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import "./Styles/colores.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  bottomStyles: {
    //width: 300
    margin: 30
  }
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" variant="extended" className={"bgcol-petal"}>
        <NavigationIcon className={classes.extendedIcon} />
        USUARIO
      </Fab>
      <Fab color="secondary" variant="extended" className={"bgcol-stem"}>
        <NavigationIcon className={classes.extendedIcon} />
        COLABORADOR
      </Fab>
    </div>
  );
}
