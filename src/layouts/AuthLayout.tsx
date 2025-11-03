import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="items-center justify-center">
      <div className=" ">
        <Outlet />
      </div>
    </div>
  )
}
