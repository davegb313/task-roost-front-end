import type { Metadata } from 'next'
import { Header } from '@/components/ui/Header'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Pomodoro } from './Pomodoro'

export const metadata: Metadata = {
	title: 'Pomodoro timer',
	...NO_INDEX_PAGE,
}

export default function PomodoroPage() {
	return (
		<div>
			<Header title='Pomodoro timer' />
			<Pomodoro />
		</div>
	)
}
