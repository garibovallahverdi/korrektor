import Link from 'next/link';
import React from 'react';

const HeaderBuuttons = () => {
  return (
    <div className='flex gap-2 font-semibold flex-col md:flex-row'>
      <Link href='/profile' className='inline-flex block border border-slate-300 md:border-none hover:bg-sky-50 cursor-pointer  items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-gray-700'>Daxil ol</Link>
      <Link href='/register' className="text-white block bg-red-500 hover:bg-red-600 transition-all focus:ring-4 focus:outline-none cursor-pointer focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800">Qeydiyyat</Link>
    </div>
  );
}

export default HeaderBuuttons;
