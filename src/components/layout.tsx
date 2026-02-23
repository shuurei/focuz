import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='flex items-center justify-center h-full'>
            <Outlet />
        </div>
    );
}