import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
    },

    nav: {
      borderBottom: '1px solid rgba(0,0,0,0.12)',
      // backgroundColor: 'teal',
    },
    mainView: {},
    sidebar: {
      borderRight: '1px solid rgba(0,0,0,0.12)',
      // backgroundColor: 'silver',
      height: '85vh',
    },
    mainContent: {
      // backgroundColor: 'pink',
      height: '85vh',
    },
    footer: {
      borderTop: '1px solid rgba(0,0,0,0.12)',
      // backgroundColor: 'aquamarine',
    },
    link: {
      textDecoration: 'none',
    },
  })
);

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.nav}>
          <Link className={classes.link} to="/students">
            <Button>Students</Button>
          </Link>
          <Button>Team</Button>
          <Button>Classes</Button>
          <Button>Attendance</Button>
          <Button>Revenue</Button>
        </Grid>
        <Grid container item xs={12} className={classes.mainView}>
          <Grid item xs={3}>
            <Typography className={classes.sidebar}>SideBar</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography className={classes.mainContent}>Main</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.footer}>Footer</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
