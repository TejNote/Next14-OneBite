import Link from 'next/link'

import { BookData } from '@/types'

function BookItem({
	id,
	title,
	subTitle,
	author,
	publisher,
	coverImgUrl,
}: BookData) {
	return (
		<Link
			href={`/book/${id}`}
			className='flex flex-row gap-[15px] border-b border-b-gray-200 px-[20px] py-[10px]'
		>
			<img className='w-[80px]' src={coverImgUrl} alt={title} />
			<div>
				<div className='font-bold'>{title}</div>
				<div className='break-keep'>{subTitle}</div>
				<br />
				<div className='text-[14px] text-gray-500'>
					{author} | {publisher}
				</div>
			</div>
		</Link>
	)
}

export default BookItem
