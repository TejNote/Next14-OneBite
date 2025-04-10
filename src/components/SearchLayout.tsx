import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

function SearchLayout({ children }: { children: React.ReactNode }) {
	const router = useRouter()

	const [search, setSearch] = useState('')

	const q = router.query.q as string
	useEffect(() => {
		if (q) {
			setSearch(q || '')
		}
	}, [q])

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	const onSubmit = () => {
		if (!search || q === search) return
		router.push(`/search?q=${search}`)
	}

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSubmit()
		}
	}

	return (
		<div>
			<div className='mb-[20px] flex gap-[10px]'>
				<input
					className='w-[100%] rounded-[5px] border border-gray-300 p-[15px]'
					placeholder='검색어를 입력하세요.'
					value={search}
					onKeyDown={onKeyDown}
					onChange={onChangeSearch}
				/>
				<button
					className='w-[80px] cursor-pointer rounded-[5px] border bg-blue-500 text-[14px] text-white hover:bg-blue-600'
					onClick={onSubmit}
				>
					검색
				</button>
			</div>
			{children}
		</div>
	)
}

export default SearchLayout
