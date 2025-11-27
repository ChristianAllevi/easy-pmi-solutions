import Image from 'next/image'
import Link from 'next/link'
import { logo_new_blue_v } from '../../../public/logos'
import BlueButton from '../ui/BlueButton'

function Header() {
  return (
    <div className='flex justify-center fixed w-full bg-white z-40'>
      <div className='container flex items-center justify-between w-full px-4'>
        <Link href={"/"} className='my-10 z-50'>
            <Image
                src={logo_new_blue_v}
                width={1920}
                height={1080}
                alt="Easy PMI Solutions logo"
                className='w-auto -mt-2 h-14'
                />
        </Link>
        <div className='flex gap-6 items-center z-50'>
            <Link href="#servizi">Servizi</Link>
            <BlueButton text='Contattaci' />
        </div>
      </div>
    </div>
  )
}

export default Header