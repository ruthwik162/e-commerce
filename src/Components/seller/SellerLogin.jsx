import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../AppContext/AppContext'

const SellerLogin = () => {
    const { isSeller, setIsSeller, navigate } = useAppContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onSubmitHandler = async (event) => {
        event.preventDefault()
        setIsSeller(true);  
    }
    useEffect(() => {
        if (isSeller) {
            navigate("/seller")
        }
    }, [isSeller])


    return !isSeller && (
        <form onSubmit={onSubmitHandler} className='min-h-screen flex items-centertext-sm text-gray-500 '>
            <div className='flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200 '>
                <p className='text-2xl font-medium m-auto'><span className='text-primary '>Seller</span> Login</p>

                <div className='w-full '>
                    <p>Email</p>
                    <input type="email" name='email' onChange={(e)=> setEmail(e.target.value) } value={email} placeholder='Enter Your email' className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary' required />
                </div>
                <div className='w-full '>
                    <p>Password</p>
                    <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter Your Password' className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary' required />
                </div>
                <button className='bg-primary text-white w-full py-2 riunded-md cursor-pointer'>Login</button>
            </div>
        </form>
    )
}

export default SellerLogin
