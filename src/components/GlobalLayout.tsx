import Link from 'next/link'

function GlobalLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='mx-auto min-h-screen max-w-[600px] bg-white px-[16px] shadow-md'>
			<header className='h-[60px] text-[18px] font-bold leading-[60px]'>
				<Link href={'/'} className='text-black no-underline'>
					📚 ONBITE BOOKS
				</Link>
			</header>
			<main className='pt-10px'>{children}</main>
			<footer className='py-[50px] text-gray-600'>제작 @TejNote</footer>
		</div>
	)
}

export default GlobalLayout
