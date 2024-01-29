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
            toast.success('Thank You! Thank You Madam Jee for your thoughts. 😊 I really love your words too. 💬 Your message has been received by me. But I am sorry because here I only allowed you to send one message. If you have missed anything, you can send it to me at imianammar@icloud.com, or you can also call, message, or do anything you want. I will appreciate your effort. 📧📱', {
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
            <div className="bg-black bg-opacity-70 flex flex-col items-center justify-center w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 px-8 py-6 rounded-3xl">
                <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Your 'YES' just made my whole world brighter!</h1>
                <p className="text-justify text-sm sm:text-base md:text-lg text-white mb-6">Thank you, thank you for accepting my proposal! 😊 Today, I feel like the luckiest person in the universe. 🌟 While we can discuss everything else later, right now, I'm eager to know your thoughts and expressions. 💬 I've provided an input field below for you to share your message. Remember, you're only allowed to send one, so make it count. Can't wait to hear from you! 💌</p>
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