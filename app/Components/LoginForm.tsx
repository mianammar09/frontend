'use client'
import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';

const Div = styled.div`
    display : flex,
    align-items : center,
    justify-content : center,
    height : 100vh
`

const StyledTitle = styled.h1`
    font-size: 2.5em;
    margin-bottom: 20px;
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 5px;
    color : black
`;

const StyledButton = styled.button`
    width: 100%;
    padding: 10px;
    margin-top : 10px ;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2em;
    transition: background-color 0.3s;

    &:hover {
        background-color: pink;
    }
`;

const LoginForm = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };


    const validateLogin = () => {
        toast.success('stay calm down. Your request is processing', )
        if (username === 'alizay' && password === '123456') {
            toast.success('Congratulations 🎉 You have taken access! Because you know? you are the special person of the developer (Ammar) ❤️', {
                duration: 5000
            })
            toast.success('I choose to love you🤟 in silence, because in silence you are mine⛏️. No one can snatch you from me. But Now I have to express my feelings because If I like someone I should tell them.❤ 🩹 Sorry If it hurt!🩹', {
                duration: 5000
            })

            setTimeout(() => {
                router.push("/Homepage")
            }, 1000)
        } else {
            toast.error('Sorry dear user, but if you have not provided the right username and password, you are not allowed on this site because this site is special for someone🥰. "❌"', {
                duration: 5000
            })
        }
    };

    return (
        <div className='bg-opacity-70 d-flex items-center justify-center w-full sm:w-1/3 md:w-1/3 lg:w-1/2 xl:w-1/4 bg-black px-5 py-8 rounded-3xl'>
            <div>
                <div className='d-flex items-center justify-center'>
                    <h1 className='text-3xl text-center py-3'>Login</h1>
                    <form>
                        <StyledInput
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />

                        <StyledInput
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <StyledButton type="button" onClick={validateLogin}>Login</StyledButton>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default LoginForm;
