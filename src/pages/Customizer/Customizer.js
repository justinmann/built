import Button from '@material-ui/core/Button'
import React, { useState } from 'react'
import { Activity } from 'rmw-shell'
import { GitHubIcon } from 'rmw-shell/lib/components/Icons'
import { injectIntl } from 'react-intl'
import Scrollbar from 'rmw-shell/lib/components/Scrollbar'
import { Tabs, Tab } from '@material-ui/core'
import TabPanel from '../../components/Controls/TabPanel'

const Customizer=({intl}) =>{
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
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
          Exterior
        </TabPanel>
        <TabPanel value={value} index={1}>
          Interior
        </TabPanel>
        <Scrollbar>
          <div
            style={{
              margin: 5,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: 50
            }}
          >
          </div>

          <br />
          <div
            style={{
              margin: 5,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: 50
            }}
          >
          </div>
        </Scrollbar>
      </Activity>
    )
}

export default injectIntl(Customizer);