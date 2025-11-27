import Image from "next/image"
import Link from "next/link"
import { image_plans } from "../../../../public/images"

function PlanTailorMade() {
  return (
    <div className="hidden md:grid grid-cols-2 gap-12 mt-48 mb-20 text-white items-stretch max-h-[375px]">
        <div className="flex flex-col p-12 gap-12 bg-pmi-blue rounded-3xl justify-center h-full">
        <h3 className="text-pmi-h3 leading-pmi-h tracking-tighter">Un piano su misura per te</h3>
        <p>Ogni professionista e ogni azienda ha esigenze diverse. Per questo Easy PMI Solutions costruisce soluzioni personalizzate, combinando POS, telefonia, energia e servizi digitali in un unico pacchetto pensato per semplificare il tuo lavoro. Niente offerte standard: solo ciò che ti serve, al prezzo giusto.</p>
        <Link href="mailto:info@easypmisolutions.it" target='blank' className='bg-white px-5 py-3 w-fit rounded-3xl text-black'>
            Richiedi una call gratuita
        </Link>
        </div>
        <div className="h-full">
        <Image
            src={image_plans}
            width={1920}
            height={1080}
            alt="Plans Image"
            className='w-full h-full rounded-3xl'
        />
        </div>
    </div>
  )
}

export default PlanTailorMade