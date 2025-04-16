import {
	GetStaticPropsContext,
	InferGetServerSidePropsType,
	InferGetStaticPropsType,
} from 'next'

import fetchBook from '@/lib/fetchBook'

export const getStaticPaths = async () => {
	return {
		paths: [
			{ params: { id: '1' } },
			{ params: { id: '2' } },
			{ params: { id: '3' } },
		],
		fallback: false,
	}
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const id = context.params?.id

	const book = await fetchBook(id as string)

	return {
		props: { book },
	}
}

function Page({ book }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className='flex flex-col gap-[10px]'>
			<div
				style={{ backgroundImage: `url(${book?.coverImgUrl})` }}
				className='relative flex justify-center bg-cover bg-center bg-no-repeat p-[20px] before:absolute before:inset-0 before:bg-black before:opacity-70'
			>
				<img
					className='z-10 h-full max-h-[350px]'
					src={book?.coverImgUrl}
					alt={book?.title}
				/>
			</div>
			<div className='text-3xl font-bold'>{book?.title}</div>
			<div className='text-gray-500'>{book?.subTitle}</div>
			<div className='text-gray-500'>
				{book?.author} | {book?.publisher}
			</div>
			<div className='whitespace-pre-line rounded-[5px] bg-gray-100 p-[15px] leading-5'>
				{book?.description}
			</div>
		</div>
	)
}

export default Page