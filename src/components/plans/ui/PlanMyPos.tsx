import Image from "next/image"
import Link from "next/link"
import { image_mypos, image_mypos_logo } from "../../../../public/images"

function PlanMyPos() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-48 text-white items-stretch">
        <div className="flex flex-col p-8 md:p-12 gap-12 bg-pmi-blue rounded-3xl justify-center h-full">
            <h3 className="text-pmi-h3 leading-pmi-h tracking-tighter">Soluzioni di pagamento su misura grazie a myPOS</h3>
            <p>Grazie alla partnership con myPOS, Easy PMI Solutions offre sistemi POS pensati per adattarsi al tuo modello di business: dal Pay-as-you-go, ideale per attività stagionali o con volumi variabili, fino al piano a noleggio, per chi cerca costi mensili certi e massima tranquillità. Nessun canone nascosto, accredito immediato sul conto, dashboard in tempo reale e assistenza 24/7: tutto quello che serve per incassare in modo smart.</p>
            <Link href="/pdf/mypos/easy-pmi-solutions-mypos.pdf" target='blank' className='bg-white px-5 py-3 w-fit rounded-3xl text-black'>
                Scarica l’offerta completa myPOS
            </Link>
        </div>
        <div className="relative w-full aspect-video lg:aspect-auto xl:h-full rounded-3xl overflow-hidden">
  <Image
    src={image_mypos}
    alt="Plans Image"
    fill
    className="object-cover"
  />
            <Image
                src={image_mypos_logo}
                alt="myPOS logo"
                width={200}
                height={80}
                className="absolute left-4 md:left-8 bottom-4 md:bottom-8 h-12 md:h-20 w-auto"
            />
        </div>
    </div>
  )
}

export default PlanMyPos