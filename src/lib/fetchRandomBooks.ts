import { BookData } from '@/types'

export default async function fetchRandomBooks(): Promise<BookData[]> {
	try {
		const res = await fetch(
			'https://onebite-books-server-mocha.vercel.app/book/random',
		)
		if (!res.ok) {
			throw new Error('Failed to fetch books random')
		}
		const books = await res.json()

		return books
	} catch (error) {
		console.error(error)
		return []
	}
}
