import Link from 'next/link'

function BlueButton({text}: {text:string}) {
  return (
    <Link href="mailto:marketing@easypmisolutions.it" target='blank' className='bg-pmi-blue px-3 py-2 w-fit rounded-3xl text-white'>
        {text}
    </Link>
  )
}

export default BlueButton