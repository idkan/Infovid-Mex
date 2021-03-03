import React from 'react';

import { Cards } from "./components";
import styles from './App.module.css';
import { fetchData } from './api';

import { Typography, Grid } from '@material-ui/core';

import handWash from './images/hand_wash.svg';
import cleanDisinfect from './images/Clean_Disinfect.svg';
import useMask from './images/use_mask.svg';

class App extends React.Component {
    
    state = {
        data: {},

    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    render() {

        const { data } = this.state;

        return (
            <div className = {styles.container}>
                <Cards data = { data }/>
                <Typography variant="h4">Prevenciones</Typography>
                <Grid container justify="center" >
                    <Grid item xs={3}sm={3}>
                        <img className={styles.image} src={handWash} alt="Lavado de Manos" />
                        <Typography variant="body2">Lavado de Manos</Typography>
                    </Grid>
                    <Grid item xs={3}sm={3} >
                        <img className={styles.image} src={cleanDisinfect} alt="Limpia y Desinfecta" />
                        <Typography variant="body2">Limpia y Desinfecta</Typography>
                    </Grid>
                    <Grid item xs={3}sm={3}>
                        <img className={styles.image} src={useMask} alt="Usa Mascarilla" />
                        <Typography variant="body2">Usa Mascarilla</Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App;