import React from 'react'
import {Grid,Paper,Typography} from '@mui/material'
import Styles from './ServiceCardStyles'

const ServicesCard = ({color,title,subtitle,icon}:any) => {
    const styles=Styles()
    return (
        <Paper elevation={20} className={styles.paperContainer}>
            <Grid container alignItems="center">
                <Grid item xs={1}>
                    <div>
                        {icon}
                    </div>
                </Grid>
                <Grid item xs={11}>
                   <Typography variant="h6">{title}</Typography>
                   <Typography variant="body2">{subtitle}</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ServicesCard
