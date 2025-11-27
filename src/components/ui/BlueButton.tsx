import Link from 'next/link'

function BlueButton({text}: {text:string}) {
  return (
    <Link href="mailto:info@easypmisolutions.it" target='blank' className='bg-pmi-blue px-5 py-3 w-fit rounded-3xl text-white'>
        {text}
    </Link>
  )
}

export default BlueButton