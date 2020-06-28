import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChanelInfo from '../ChanelInfo';
import ChannelList from '../ChannelList';


const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChanelInfo />
            <ChannelList />
        </Grid>
    );
};

export default Layout;