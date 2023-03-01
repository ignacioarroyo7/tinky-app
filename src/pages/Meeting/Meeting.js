import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { enviroment } from '../../enviroment';
import { JitsiMeeting } from '@jitsi/react-sdk';


const Meeting = () => {
    
    // useEffect(()=>{
    //     axios.Axiosget(`${enviroment.urlBaseBack}/`, {
    //         params: { },
    //       })
    // },[])

    return (
        <>
        <JitsiMeeting
    roomName = { 'NACHO_NAME' }
    getIFrameRef = { node => node.style.height = '800px' }
/>
        </>
    );
};

export default Meeting;