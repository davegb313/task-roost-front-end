import { Metadata } from 'next'
import { Header } from '@/components/ui/Header'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { TimeBlocking } from './TimeBlocking'

export const metadata: Metadata = {
	title: 'Time blocking',
	...NO_INDEX_PAGE,
}

export default function TimeBlockingPage() {
	return (
		<div>
			<Header title='Time blocking' />
			<TimeBlocking />
		</div>
	)
}
