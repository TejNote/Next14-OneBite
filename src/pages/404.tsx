import React from 'react'

import { useRouter } from 'next/router'

function Custom404() {
	const router = useRouter()

	const handleGoHome = () => {
		router.push('/')
	}

	return (
		<div style={{ textAlign: 'center', marginTop: '50px' }}>
			<h1>404 - 페이지를 찾을 수 없습니다</h1>
			<p>죄송합니다. 찾고 있는 페이지가 존재하지 않습니다.</p>
			<button
				onClick={handleGoHome}
				style={{ padding: '10px 20px', marginTop: '20px' }}
			>
				홈으로 가기
			</button>
		</div>
	)
}

export default Custom404
