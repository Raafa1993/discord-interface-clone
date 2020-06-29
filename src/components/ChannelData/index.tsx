import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Menssages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);
    return (
        <Container>
            <Menssages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Nathalia Alves"
                        date={"07/06/2021"}
                        content={"Hoje é meu aniversario!"}
                    />
                ))}

                <ChannelMessage
                    author="Gabriel Santos"
                    date={"12/10/2021"}
                    content={
                        <>
                            <Mention>@Matheus Silva</Mention>, Me ajuda a programar por favor? </>}
                    hasMention
                    isBot
                />
            </Menssages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em Chat-livre" />
                <InputIcon />
            </InputWrapper>

        </ Container>
    )
};

export default ChannelData;