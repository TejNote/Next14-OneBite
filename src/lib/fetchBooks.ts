import { BookData } from '@/types'

export default async function fetchBooks(q?: string): Promise<BookData[]> {
	try {
		let url = 'http://localhost:12345/book'

		if (q) {
			url += `/search?q=${q}`
		}
		const res = await fetch(url)
		if (!res.ok) {
			throw new Error('Failed to fetch books')
		}
		const books = await res.json()

		return books
	} catch (error) {
		console.error(error)
		return []
	}
}
