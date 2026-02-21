import { Link, Outlet } from 'react-router-dom'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'

export default function Layout() {
    return (
        <>
            <div className='flex justify-center gap-8'>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className='h-12 w-12 hover:drop-shadow-[0_0_2em_rgba(100,108,255,0.67)] ' alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="h-12 w-12 hover:drop-shadow-[0_0_2em_rgba(97,218,251,0.67)] hover:animate-spin" alt="React logo" />
                </a>
            </div>

            <h1>Vite + React + Tailwind + Zustand + React-Router</h1>

            <nav className='flex gap-4 justify-center *:bg-slate-900 *:p-2 *:rounded'>
                <Link to='/'>Home</Link>
                <Link to="/counter">Counter</Link>
            </nav>

            <Outlet />

            <p className='text-slate-400'>
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}