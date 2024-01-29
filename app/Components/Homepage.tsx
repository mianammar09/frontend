'use client';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState, ChangeEvent  } from 'react';
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation';

export default function Homepage() {
    const Div = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        flex-direction: column;   
        background-color: black ;
        padding: 20px 18px 20px 18px;
        border-radius: 15px;
    `;

    const ButtonGroup = styled.div`
        display: flex;
        justify-content: center;
        gap: 20px; 
    `;

    const Heading = styled.h1`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
    `;

    const Paragraph = styled.p``;



    const [acceptedButton, setAcceptedButton] = useState<JSX.Element>(<></>);
    const [disableButton, setDisableButton] = useState<JSX.Element>(<></>);
    const router = useRouter();

    useEffect(() => {
        const handleAccept = async () => {
            const credentials = { value: 'Accepted' };
            try {
                const response = await axios.post('https://organized-salt-leo.glitch.me/check/data', credentials);
    
                if (response.data.message === "Disable Rejected") {
                    setDisableButton(() => {
                        return(
                            <>
                                <button>Reject</button>
                            </>
                        )
                    });
    
                    toast.success('🙏 Thank You! Madam Jee, You know today I am thinking that I am blessed because I think you are a blessing for me and I have got you. Thank You Thank you 🙏', { duration: 5000 });
    
                    router.push('/Message');
                } else if (response.data.message === "Cannot Change") {
                    toast.error('Sorry 🙁 You can not choose any option now because your first thoughts have been recorded. Now you can not change your mind. Please don\'t mind, but now you have to leave this side. 🚪', { duration: 5000 });
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred while making the request.');
            }
        };
    
        const handleReject = async () => {
            const credentials = { value: 'Rejected' };
            try {
                const response = await axios.post('https://organized-salt-leo.glitch.me/check/data', credentials);
                console.log(response.data);
                if (response.data.message === "Disable Accepted") {
                    setAcceptedButton((prev) => {
                        return(
                            <>
                                <button className='text-black'>Accept</button>
                            </>
                        )
                        });
                    toast.error('Thank you for being here! Developer respects your thoughts. Thanks for your precious time. 😊 I am always here for you. Just forget this chapter from your life because this is not important but your happiness and smile is always important for your parents, for you and also for me. ❤️', { duration: 10000 });
                    router.push('/Rejected');
                } else if (response.data.message === "Cannot Change") {
                    toast.error('Sorry 🙁 You can not choose any option now because your first thoughts have been recorded. Now you can not change your mind. Please don\'t mind, but now you have to leave this side. 🚪', { duration: 5000 });
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred while making the request.');
            }
        };
        setAcceptedButton(() => {
            return(
                <>
                    <button type='button' className='bg-green-500 px-4 py-2 rounded opacity-100 hover:bg-green-300' onClick={handleAccept}>Accept</button>
                </>
            )
        });
        setDisableButton(() => {
            return(
                <>
                    <button type='button' className='bg-red-500 px-4 py-2 rounded opacity-100 hover:bg-red-300' onClick={handleReject}>Reject</button>
                </>
            )
        });
    }, [router]);

    
    return (
        <>
            <div className='bg-opacity-70 flex flex-col items-center justify-center w-full sm:w-4/5 md:w-3/5 lg:w-2/3 xl:w-1/2 2xl:w-1/2 bg-black px-8 py-8 rounded-3xl'>
                <h1 className='text-lg sm:text-xl md:text-2xl font-bold mb-2'>Hey Alizay,</h1>
                <h2 className='text-base sm:text-lg md:text-xl font-bold text-center mb-2'>I love you 🤟</h2>
                <p className='text-justify text-xs sm:text-sm md:text-base text-white mb-3'>
                    I'm not sure if you'll be surprised to receive this message, but regardless of your reaction, I know your answer will always surprise me. 😊 Just take a moment to relax and stay calm, because I know you're already relaxed and calm. Okay, let's put that aside and move on.

                    Expressing my feelings is a bit challenging for me because I'm not quite sure how to put them into words, but one thing is for certain: I think about you. I feel joy when we talk, comfort when I see your picture, and happiness when we joke around. In simple terms, your existence brings happiness to my life and to the entire universe. 🌟

                    Perhaps you may not feel the same way about me as I do about you, but if you do, I understand your problems and your family issues. I'm not here to pressure you. Just set aside all your worries and know that I won't push you into anything that would bring you or your parents down.

                    Here's my plan: I'll work hard to become a man who impresses your family. I'll never let you down or disrespect you. If, in the end, your family doesn't agree, I'll gracefully step back because I'm not the type of person who would do anything for love at the cost of someone else's happiness. Yes, I can do anything, but always in a positive way.

                    Now, it's entirely up to you. You're independent, and the decision is in your hands. There are two buttons below, and you're free to choose whichever one you like. No matter which one you choose, know that each decision you make only makes me stronger. I'm not the kind of person who becomes sad after rejection or loss. I'm here to conquer the world.

                    So, go ahead and make your choice, but remember, you only have one chance to decide. After that, you won't be able to change your mind.
                </p>
                <ButtonGroup className="mb-6">
                    {acceptedButton}
                    {disableButton}
                </ButtonGroup>
            </div>





        </>
    );
}