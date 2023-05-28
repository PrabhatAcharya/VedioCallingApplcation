import React from 'react'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from 'react-router-dom';

const Roompage = () => {
const {roomId} = useParams();

const myMeeting = async(element) =>{
    const appID = 199903348;
    const serverSecret = "ec94bca9cd080ba21fa958d42b05c46c";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID , serverSecret , roomId , Date.now().toString(),'Prabhat');
    const zp = ZegoUIKitPrebuilt.create(kitToken)
    zp.joinRoom({
        container : element,
        scenario : {
            mode : ZegoUIKitPrebuilt.VideoConference
        }
    })
}
  return (
    <div>
     <div ref = {myMeeting}/>
    </div>
  )
}

export default Roompage
