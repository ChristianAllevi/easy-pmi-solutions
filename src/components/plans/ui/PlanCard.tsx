import Image, { StaticImageData } from "next/image"

function PlanCard({icon, title, description, catchword}:{icon:StaticImageData, title:string, description:string, catchword:string}) {
  return (
    <div className="flex flex-col gap-4">
      <Image
          src={icon}
          width={1920}
          height={1080}
          alt="Easy PMI Solutions logo"
          className='h-10 w-10'
      />
      <h4 className='text-pmi-h4 leading-pmi-h'>{title}</h4>
      <p className='text-pmi-body'>{catchword}</p>
      <p className='text-pmi-body'>{description}</p>
    </div>
  )
}

export default PlanCard