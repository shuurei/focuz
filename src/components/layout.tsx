import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <h1 className='text-6xl'>Focuz</h1>
            <Outlet />
        </>
    );
}