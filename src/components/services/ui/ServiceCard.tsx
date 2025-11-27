import Image, { StaticImageData } from 'next/image'

function ServiceCard({image, title, description, color}:{image:StaticImageData, title:string, description:string, color:string}) {
  return (
    <div className='px-2'>
        <div className={`flex flex-col items-center gap-8 px-6 py-8 ${color} rounded-3xl md:grid md:grid-cols-2 lg:max-w-[70vw] md:min-h-[410px] ${color=="bg-pmi-mint" ? "md:place-self-end" : ""}`}>
            <Image
                src={image}
                width={1920}
                height={1080}
                alt="Service Image"
                className='w-full px-10'
            />
            <div className='flex flex-col justify-center items-center gap-8 md:pr-10'>
              <h3 className='text-pmi-h3 leading-pmi-h tracking-tighter'>{title}</h3>
              <p className='text-pmi-body'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard