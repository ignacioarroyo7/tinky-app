import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { enviroment } from '../../enviroment';
import { JitsiMeeting } from '@jitsi/react-sdk';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useSearchParams } from 'react-router-dom';

const Meeting = () => {
    const [searchParams] = useSearchParams();
    const [meetingName,setMeetingName] = useState('')

    useEffect(()=>{
        setMeetingName(searchParams.get('name'))
        console.log('searchParams',searchParams.get('name'));
       
    },[])
    
    return (
        <>
        {/* <CssBaseline /> */}
      <Container fixed sx={{mx:'auto',my:1,p:1,
       backgroundImage:'linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% );',
       borderRight: 1,
                borderLeft:1,
                borderTop: 1,
                borderBottom: 1,
                borderColor: "linear-gradient( 112.1deg,  rgba(32,38,57,1) 11.4%, rgba(63,76,119,1) 70.2% );",
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,}} maxWidth="xl">

        <JitsiMeeting
    roomName = {meetingName}
    // roomName = {''+meetingName}
    getIFrameRef = { node => node.style.height = '800px' }
/>
      </Container>
        </>
    );
};

export default Meeting;