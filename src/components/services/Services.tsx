import ServicesIntro from './ui/ServicesIntro'
import ServiceCard from './ui/ServiceCard'
import { services } from '@/lib/const/ServicesText'

function Services() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='container pt-40' id='servizi'>
        <ServicesIntro />
        <div className='flex flex-col gap-10'>
          {services?.map((service, index:number)=>(
            <ServiceCard image={service?.image} title={service?.title} description={service?.description} color={service?.color} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services