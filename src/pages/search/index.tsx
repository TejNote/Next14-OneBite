import { useEffect, useState } from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import BookItem from '@/components/BookItem'
import SearchLayout from '@/components/SearchLayout'
import fetchBooks from '@/lib/fetchBooks'
import { BookData } from '@/types'

function Search() {
	const [books, setBooks] = useState<BookData[]>([])

	const router = useRouter()
	const q = router.query.q as string

	const fetchSearchResults = async () => {
		const searchBooks = await fetchBooks(q)
		setBooks(searchBooks)
	}

	useEffect(() => {
		fetchSearchResults()
	}, [q])

	return (
		<div>
			<Head>
				<title>한입북스 - 검색 결과</title>
				<meta property='og:description' content={`${q} 검색 결과입니다.`} />
				<meta property='og:image' content='/thumbnail.png' />
				<meta property='og:title' content={`${q} 검색 결과 - 한입북스`} />
			</Head>
			{books.map(book => (
				<BookItem key={book.id} {...book} />
			))}
		</div>
	)
}

Search.getLayout = (page: React.ReactNode) => {
	return <SearchLayout>{page}</SearchLayout>
}

export default Search
