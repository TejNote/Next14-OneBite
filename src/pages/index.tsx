import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'

import BookItem from '@/components/BookItem'
import SearchLayout from '@/components/SearchLayout'
import fetchBooks from '@/lib/fetchBooks'
import fetchRandomBooks from '@/lib/fetchRandomBooks'

export const getStaticProps = async () => {
	const [allBooks, randomBooks] = await Promise.all([
		fetchBooks(),
		fetchRandomBooks(),
	])
	return { props: { allBooks, randomBooks } }
}

export default function Home({
	allBooks,
	randomBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	console.error(allBooks)
	return (
		<>
			<Head>
				<title>한입북스</title>
				<meta property='og:image' content='/thumbnail.png' />
				<meta property='og:title' content='한입북스' />
				<meta
					property='og:description'
					content='한입북스에 등록된 도서들을 만나보세요.'
				/>
			</Head>
			<div className='flex flex-col gap-[20px]'>
				<section>
					<h3>지금 추천하는 도서</h3>
					{randomBooks.map(book => (
						<BookItem key={book.id} {...book} />
					))}
				</section>
				<section>
					<h3>등록된 모든 도서</h3>
					{allBooks.map(book => (
						<BookItem key={book.id} {...book} />
					))}
				</section>
			</div>
		</>
	)
}

Home.getLayout = (page: React.ReactNode) => {
	return <SearchLayout>{page}</SearchLayout>
}
