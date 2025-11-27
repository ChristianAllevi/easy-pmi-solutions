import Image from 'next/image'
import { image_hero } from '../../../public/images'
import BlueButton from '../ui/BlueButton'

function Hero() {
  return (
    <div className='bg-linear-to-b from-pmi-light-blue to-pmi-mint pt-28 pb-20 flex justify-center'>
      <div className='container w-full text-center md:text-start'>
        <div className='flex flex-col px-4 gap-8 mt-10 md:grid md:grid-cols-2 md:justify-between md:items-center'>
          <Image
              src={image_hero}
              width={1920}
              height={1080}
              alt="Easy PMI Solutions hero image"
              className='px-10 w-full md:order-2'
          />
          <div className='flex flex-col gap-8 md:order-1'>
            <h1 className='text-pmi-h1 leading-pmi-h tracking-tighter'>Soluzioni semplici per far crescere la tua impresa.</h1>
            <p className='text-pmi-body mb-4'>Dai sistemi di pagamento alla telefonia, dall’energia ai servizi digitali: tutto ciò che ti serve, in un unico partner.</p>
            <div>
              <BlueButton text='Contattaci' />
            </div>              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero