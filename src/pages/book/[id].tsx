import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import fetchBook from '@/lib/fetchBook'

export const getStaticPaths = async () => {
	return {
		paths: [
			{ params: { id: '1' } },
			{ params: { id: '2' } },
			{ params: { id: '3' } },
		],
		fallback: true,
	}
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const id = context.params?.id

	const book = await fetchBook(id as string)

	if (!book) {
		return {
			notFound: true,
		}
	}

	return {
		props: { book },
	}
}

function Page({ book }: InferGetStaticPropsType<typeof getStaticProps>) {
	const router = useRouter()
	if (router.isFallback) {
		return <div>로딩 중입니다.</div>
	}

	if (!book) {
		return <div>문제가 발생하였습니다. 다시 시도 해주세요.</div>
	}

	return (
		<>
			<Head>
				<title>{book?.title} - 한입북스</title>
				<meta property='og:image' content={book?.coverImgUrl} />
				<meta property='og:title' content={book?.title} />
				<meta property='og:description' content={book?.description} />
			</Head>
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
		</>
	)
}

export default Page
