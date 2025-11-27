import { plans } from "@/lib/const/ServicePlansText"
import PlanCard from "./ui/PlanCard"

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
      </div>
    </div>
  )
}

export default Plans