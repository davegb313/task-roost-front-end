'use client'

import { FormProvider, useForm } from 'react-hook-form'
import type { TypeTimeBlockFromState } from '@/types/time-block.types'
import { TimeBlockingList } from './TimeBlockingList'
import { TimeBlockingForm } from './form/TimeBlockingFrom'

export function TimeBlocking() {
	const methods = useForm<TypeTimeBlockFromState>()

	return (
		<FormProvider {...methods}>
			<div className='grid grid-cols-2 gap-12'>
				<TimeBlockingList />
				<TimeBlockingForm />
			</div>
		</FormProvider>
	)
}
