import React from 'react';

import { Container, Menssages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Menssages />

            <InputWrapper>
                <Input type="text" placeholder="Conversar em Chat-livre" />
                <InputIcon />
            </InputWrapper>

        </ Container>
    )
};

export default ChannelData;