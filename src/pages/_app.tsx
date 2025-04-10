import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import { NextPage } from 'next'

import GlobalLayout from '@/components/GlobalLayout'

type NextPageWithLayout = NextPage & {
	getLayout: (page: React.ReactNode) => React.ReactNode
}

export default function App({
	Component,
	pageProps,
}: AppProps & {
	Component: NextPageWithLayout
}) {
	const getLayout = Component.getLayout ?? (page => page)

	return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
}
