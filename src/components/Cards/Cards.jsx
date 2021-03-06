import { React } from "react";
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { cases, recovered, deaths, updated } }) => {
    if(!cases) {
        return 'Loading...';
    }
    return(
        //TODO: Refactoring Code
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.cases)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Confirmados </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={cases} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom> {new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2"> Number of activve cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recuperados </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered} duration={2.5} separator="," />
                        </Typography>                        
                        <Typography color="textSecondary" gutterBottom> {new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2"> Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Defunciones </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths} duration={2.5} separator="," />
                        </Typography>                        
                        <Typography color="textSecondary" gutterBottom> {new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2"> Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;