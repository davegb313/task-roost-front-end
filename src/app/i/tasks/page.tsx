import { Metadata } from 'next'
import { Header } from '@/components/ui/Header'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { TasksView } from './TaskView'

export const metadata: Metadata = {
	title: 'Tasks',
	...NO_INDEX_PAGE,
}

export default function TaskPage() {
	return (
		<div>
			<Header title='Tasks' />
			<TasksView />
		</div>
	)
}
