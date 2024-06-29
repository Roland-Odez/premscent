import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary-1 text-white py-10 flex flex-col items-center justify-center gap-y-6 w-full" >
            <div className="p-5 lg:p-10 flex flex-col md:flex-row gap-y-7 items-start justify-between max-w-[1200px w-full lg:gap-x-40">
                <aside className='justify-items-start'>
                    <figure>
                        <Image src='/assets/images/logo-2.png' className='block w-full h-full object-cover' alt='logo' width={160} height={50} />
                    </figure>
                    <p>
                    Providing reliable Services
                    </p>
                    <nav className="flex gap-6 pt-2">
                        <a>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </nav>
                </aside>
                <nav className='flex flex-col gap-y-3'>
                    <h6 className="font-bold text-lg">Our Company</h6>
                    <Link className='text-sm text-[#fffffff1] font-extralight' href="/about">About Us</Link>
                    <Link className='text-sm text-[#fffffff1] font-extralight' href="#">Reviews</Link>
                    <Link className='text-sm text-[#fffffff1] font-extralight' href="#">Customer Showcase</Link>
                </nav>
                <nav className='flex flex-col gap-y-3'>
                    <h6 className="font-bold text-lg">Resources</h6>
                    <Link className='text-sm text-[#fffffff1] font-extralight' href="/login">Login</Link>
                    <Link className='text-sm text-[#fffffff1] font-extralight' href="#">FAQ</Link>
                    <Link className='text-sm text-[#fffffff1] font-extralight' href="#">Videos & Guides</Link>
                    <Link className='text-sm text-[#fffffff1] font-extralight' href="#">Knowledge Base</Link>
                </nav>
                <nav className='flex flex-col gap-y-3'>
                    <h6 className="font-bold text-lg">A Little Extra</h6>
                    <Link className='text-sm text-[#fffffff1] font-extralight' href="#">Contact</Link>
                    <Link className='text-sm text-[#fffffff1] font-extralight' href="#">Blog</Link>
                    <Link className='text-sm text-[#fffffff1] font-extralight' href="#">Industries</Link>
                </nav>
            </div>
        <div className="pt-8 flex items-center justify-center border-t-[1px] border-[#ffffff42] w-[98%]">
            <aside>
                <p className='text-sm md:text-base'>Copyright © ${new Date().getFullYear()} - All right reserved by PremScent</p>
            </aside>
        </div>
    </footer>
  )
}

export default Footer