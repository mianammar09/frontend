'use client'
import axios from "axios"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import toast from "react-hot-toast"

export default function Page() {
    const router = useRouter();
    const [message, setMessage] = useState('')

    const handleMessage = async () => {

        const data = {
            text: message
        }
        const response = await axios.post('https://organized-salt-leo.glitch.me/check/message', data);
        if (response.data.message === 'Message Sent') {
            toast.success('Thank you for your message! Your words are always important to the developer. 💌 Message has been sent, but sorry to say that you are allowed only one message, so we are logging you out. Please don\'t mind. If you want to send more messages, you can send them directly to the developer at imianammar@icloud.com. 📧', {
                duration: 20000
            })

            setMessage('');
            router.push('/LoginPage')
        }
        else {
            toast.error('Message Not Sent')
        }
    }

    return (
        <>
            <div className="bg-black bg-opacity-70 flex flex-col items-center justify-center w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-[35%] px-8 py-6 rounded-3xl">
                <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Rejected today, but conquering tomorrow! 💪🏼</h1>
                <p className="text-justify text-sm sm:text-base md:text-lg text-white mb-6">Thank you for your thoughts. Forget this chapter from your life and stay here. Remember when I asked you about your wish, and you said, "Friends forever." So, just chill and don't feel shy about approaching me in any condition. I'm still the same Ammar that was with you one month ago, and I promise to stand by you for life as a friend. You can reach out to me anytime, whether it's night 🌙, day ☀️, rain 🌧️, or shine ✨; I'll be there for you. Let's delete this chapter from our lives.

                    You know I have something for you, but I'm not revealing it here. Below this message is an input field; go ahead and pour out your thoughts because your words heal me. Remember, you're only allowed to send one message, so make it longer because I love reading your words more than anything else in this world. Thank you! 🌟👫💬📝</p>
                <input
                    className="text-black w-full py-3 px-4 mb-4 rounded-md border-none shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your thoughts!"
                    onChange={(e) => { setMessage(e.target.value) }}
                    value={message}
                />
                <button
                    className="bg-blue-500 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={handleMessage}>
                    Send
                </button>
            </div>


        </>
    )
}