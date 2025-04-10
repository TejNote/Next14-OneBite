import { BookData } from '@/types'

export default async function fetchBook(id: string): Promise<BookData | null> {
	try {
		const url = `http://localhost:12345/book/${id}`

		const res = await fetch(url)
		if (!res.ok) {
			throw new Error('Failed to fetch books')
		}
		const books = await res.json()

		return books
	} catch (error) {
		console.error(error)
		return null
	}
}
