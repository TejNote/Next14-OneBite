import { InferGetStaticPropsType } from 'next'

import BookItem from '@/components/BookItem'
import SearchLayout from '@/components/SearchLayout'
import fetchBooks from '@/lib/fetchBooks'
import fetchRandomBooks from '@/lib/fetchRandomBooks'

export const getStaticProps = async () => {
	const [allBooks, randomBooks] = await Promise.all([
		fetchBooks(),
		fetchRandomBooks(),
	])
	return {
		props: { allBooks, randomBooks },
	}
}

export default function Home({
	allBooks,
	randomBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
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
	)
}

Home.getLayout = (page: React.ReactNode) => {
	return <SearchLayout>{page}</SearchLayout>
}
