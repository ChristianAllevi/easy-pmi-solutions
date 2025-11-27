import { plans } from "@/lib/const/ServicePlansText"
import PlanCard from "./ui/PlanCard"
import Link from "next/link"
import Image from "next/image"
import { image_plans } from "../../../public/images"

function Plans() {
  return (
    <div className="bg-pmi-grey mt-40 py-32 px-4 flex justify-center">
      <div className="container">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 xl:gap-60">
          <h2 className="text-pmi-h2 leading-pmi-h tracking-tighter">Un unico partner, infinite soluzioni</h2>
          <p className="text-pmi-body">Easy PMI Solutions semplifica la gestione dei servizi fondamentali della tua azienda. Meno fornitori, meno problemi, più tempo per concentrarti su ciò che conta: far crescere il tuo business.</p>
        </div>
        <div className="flex flex-col gap-8 mt-8 lg:grid lg:grid-cols-3 lg:gap-28 lg:mt-28">
          {plans?.map((plan, index:number)=>(
            <PlanCard icon={plan?.icon} title={plan?.title} description={plan?.description} catchword={plan?.catchword} key={index} />
          ))}
        </div>
        <div className="hidden md:grid grid-cols-2 gap-12 mt-48 mb-20 text-white items-stretch max-h-[375px]">
          <div className="flex flex-col p-12 gap-12 bg-pmi-blue rounded-3xl justify-center h-full">
            <h3 className="text-pmi-h3 leading-pmi-h tracking-tighter">Un piano su misura per te</h3>
            <p>Ogni professionista e ogni azienda ha esigenze diverse. Per questo Easy PMI Solutions costruisce soluzioni personalizzate, combinando POS, telefonia, energia e servizi digitali in un unico pacchetto pensato per semplificare il tuo lavoro. Niente offerte standard: solo ciò che ti serve, al prezzo giusto.</p>
            <Link href="mailto:marketing@easypmisolutions.it" target='blank' className='bg-white px-3 py-2 w-fit rounded-3xl text-black'>
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
      </div>
    </div>
  )
}

export default Plans