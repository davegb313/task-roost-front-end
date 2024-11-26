import type { Metadata } from 'next'
import { Header } from '@/components/ui/Header'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Statistics } from './Statistics'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE,
}

export default function Page() {
	return (
		<div>
            <Header title='Statistics' />
			<Statistics />
		</div>
	)
}
