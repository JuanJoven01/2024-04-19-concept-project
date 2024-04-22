import {useNavigate } from 'react-router-dom'

export const NavBar = () => {

    const navigate = useNavigate()

    return (
        <header className=" h-16  flex justify-between items-center fixed w-full backdrop-blur-md text-white border-b-2 z-20" >
            <p className="ml-10 hover:cursor-pointer hover:border-b-2 hover:text-blue-500 border-blue-500" onClick={() => navigate('/')}>HOME GAMING</p>
            <ul className="flex m-10 h-16">
                <li onClick={() => navigate('/')} className="m-5 hover:cursor-pointer hover:border-b-2 hover:text-blue-500 border-blue-500">Home</li>
                <li onClick={() => navigate('/marketplace')} className="m-5 hover:cursor-pointer hover:border-b-2 hover:text-blue-500 border-blue-500">Marketplace</li>
                <li onClick={() => navigate('/games')} className="m-5 hover:cursor-pointer hover:border-b-2 hover:text-blue-500 border-blue-500">Online Games</li>
                <li onClick={() => navigate('/learning')} className="m-5 hover:cursor-pointer hover:border-b-2 hover:text-blue-500 border-blue-500">Gaming Academy</li>
                <li onClick={() => navigate('/community')} className="m-5 hover:cursor-pointer hover:border-b-2 hover:text-blue-500 border-blue-500">Community</li>
            </ul>
        </header>
    )
}