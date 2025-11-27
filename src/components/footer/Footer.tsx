import Image from "next/image"
import Link from "next/link"
import { logo_blue_n } from "../../../public/logos"

function Footer() {
  return (
    <div className='bg-pmi-black flex justify-center'>
        <div className="container flex flex-col justify-between px-4 min-h-[400px] pb-10">
          <div className="flex flex-col md:grid md:grid-cols-2">
            <Link href={"/"} className='my-10 z-50'>
              <Image
                  src={logo_blue_n}
                  width={1920}
                  height={1080}
                  alt="Easy PMI Solutions logo"
                  className="w-60"
              />
            </Link>
            <div className='flex justify-between gap-6 items-center z-50 md:justify-start md:gap-20'>
                <Link href="#servizi" className="text-white">Servizi</Link>
                <Link href="mailto:marketing@" target='blank' className='bg-white px-3 py-2 w-fit rounded-3xl'>
                    Richiedi una call gratuita
                </Link>
            </div>
          </div>
          <div className="flex flex-col text-white md:grid md:grid-cols-2 md:gap-8 md:items-center ">
            <div>
              <p>Soluzioni semplici per far crescere la tua impresa.</p>
              <p>Sistemi di pagamento, telefonia, energia e servizi digital</p>
            </div>          
            <p className="my-4 md:my-0">© 2025 All Rights Reserved</p>
          </div>
        </div>
    </div>
  )
}

export default Footer