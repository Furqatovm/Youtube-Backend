import { Outlet } from 'react-router-dom'
import Header from '../header'
import Menu from '../../routes/menu'

const Mainlayout = () => {
  return (
    <>
      <Header />
      <main>
        <div className='flex w-full justify-between max-w-[1480px] mx-auto min-h-[100vh]'>
          <Menu />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  )
}

export default Mainlayout
