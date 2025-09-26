/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'


import React, { useRef } from "react"
import { cn, configureAssistant, getSubjectColor } from "@/lib/utils"
import { useState, useEffect } from "react"
import { vapi } from "@/lib/vapi.sdk"
import Image from "next/image"
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import soundwaves from "@/constants/soundwaves.json"

enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
}
const CompanionComponent = ({ companionId, name, subject, topic, style, voice, userName, userImage }: CompanionComponentProps) => {

    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const lottieRef = useRef<LottieRefCurrentProps>(null);
    useEffect(() => {
        if (lottieRef) {
            if (isSpeaking) {
                lottieRef.current?.play()
            }
            else {
                lottieRef.current?.stop()
            }
        }
    }, [isSpeaking, lottieRef])

    useEffect(() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
        const onCallEnd = () => setCallStatus(CallStatus.FINISHED);
        const onMessage = () => { }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onSpeechStart = () => setIsSpeaking(true);
        const onSpeechEnd = () => setIsSpeaking(false);
        const onError = (error: Error) => console.log('Error', error);



            // ADD listeners
    vapi.on('call-start', onCallStart);
    vapi.on('call-end', onCallEnd);
    vapi.on('message', onMessage);
    vapi.on('error', onError);
    vapi.on('speech-start', onSpeechStart);
    vapi.on('speech-end', onSpeechEnd);

        return () => {
            vapi.on('call-start', onCallStart);
            vapi.on('call-end', onCallEnd);
            vapi.on('message', onMessage);
            vapi.on('error', onError);
            vapi.on('speech-start', onSpeechStart);
            vapi.on('speech-end', onSpeechEnd);
        }
    }, []);

    const toggleMicrophone = () => {
        const isMuted = vapi.isMuted;
        vapi.setMuted(!isMuted);
        setIsMuted(!isMuted);
    }

    const handleCall = () => { 
        setCallStatus(CallStatus.CONNECTING)
    const assistantOverrides = {
        varibaleValues: {
            subject, topic , style 
        },
        clientMessages: ['transcript'],
        serverMessages: [],
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    vapi.start(configureAssistant(voice,style),assistantOverrides)
    }
    const handleDisconnect = () => {
         setCallStatus(CallStatus.FINISHED)
         vapi.stop();
    }

    return (
        <section className="flex flex-col h-[70vh]">
            <section className="flex gap-8 max-sm:flex-col">
                <div className="companion-section">
                    <div className="companion-avatar" style={{ backgroundColor: getSubjectColor(subject) }}>
                        <div className={
                            cn('absolute transition-opacity duration-1000',
                                callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ?
                                    'opacity-1001' : 'opacity-0',
                                callStatus === CallStatus.CONNECTING && 'opacity-100 animate-pulse')}>

                            <Image src={`/icons/${subject}.svg`} alt={subject} width={150} height={150} className="max-sm:w-fit" />

                        </div>
                        <div className={cn('absolute transition-opacity duration-1000', callStatus === CallStatus.ACTIVE ? 'opacity-100' : 'opacity-0')}>
                            <Lottie lottieRef={lottieRef} animationData={soundwaves} autoplay={false} className="companion-lottie" />
                        </div>
                    </div>
                    <p className="font-bold text-2xl">{name}</p>
                </div>
                <div className="user-section">
                    <div className="user-avatar">
                        <Image src={userImage} alt={userName} width={130}
                            height={130} className="rounded-lg" />
                        <p className="font-bold text-2xl">{userName}</p>
                    </div>
                    <button className="btn-mic" onClick={toggleMicrophone}>
                        <Image src={isMuted ? '/icons/mic-off.svg' : '/icons/mic-on.svg'} alt='mic' width={36} height={36} />
                        <p className="max-sm:hidden">{isMuted ? 'Turn on Microphone' : 'Turn off Microphone'}</p>
                    </button>
                    <button className={cn('rounded-lg py-2 cursor-pointer transition-colors w-full text-white',
                        callStatus === CallStatus.ACTIVE ? 'bg-red-700 ' : 'bg-primary',
                        callStatus === CallStatus.CONNECTING && 'animate-pulse')} onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}
                    >
                        {callStatus === CallStatus.ACTIVE ? "End Session" : callStatus === CallStatus.CONNECTING ? 'Connecting' : 'Start Session'}

                    </button>
                </div>
            </section>
            <section className="transcript">
                        <div className="transcript-message no-scrollbar">MESSAGES</div>
                        <div className="transcript-fade" />


            </section>
        </section>
    )
}

export default CompanionComponent
