import { Outlet, NavLink } from 'react-router-dom'
import '../Styles/App.css'

export const navigate = [
    {
        id: 1,
        name: 'Main',
        to:'/'
    },
    {
        id: 2,
        name: 'Profile',
        to:'/profile'
    },
    {
        id: 3,
        name: 'Chats',
        to:'/chats'
    },
]

export function Nav () {
    return (
        <>
            <header className='App-header'>
                <nav>
                    <ul className='Links'>
                        {navigate.map((link) =>(
                            <li key={link.id}>
                                <NavLink
                                className='link'
                                to={link.to}
                                style={({ isActive }) => ({
                                    color: isActive ? 'green' : 'blue'
                                })}>
                                {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}