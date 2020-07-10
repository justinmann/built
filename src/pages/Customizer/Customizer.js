import Button from '@material-ui/core/Button'
import React, { useState } from 'react'
import { Activity } from 'rmw-shell'
import { GitHubIcon } from 'rmw-shell/lib/components/Icons'
import { injectIntl } from 'react-intl'
import Scrollbar from 'rmw-shell/lib/components/Scrollbar'
import { Tabs, Tab } from '@material-ui/core'
import TabPanel from '../../components/Controls/TabPanel'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Customizer=({intl}) =>{
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
        
    const classes = useStyles();
    
    return (
      <Activity
        iconElementRight={
          <Button
            style={{ marginTop: 4 }}
            href="https://github.com/TarikHuber/react-most-wanted"
            target="_blank"
            rel="noopener"
            secondary
            icon={<GitHubIcon />}
          />
        }
        title={intl.formatMessage({ id: 'customizer' })}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Exterior" value={0} />
          <Tab label="Interior" value={1} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container>
            <Grid item xs={3}>  
              <Paper elevation={3}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>Accordion 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>Accordion 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className={classes.heading}>Disabled Accordion</Typography>
                  </AccordionSummary>
                </Accordion>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              Exterior
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Interior
        </TabPanel>
      </Activity>
    )
}

export default injectIntl(Customizer);