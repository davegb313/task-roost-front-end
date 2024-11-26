import {
	ITimeBlockResponse,
	TypeTimeBlockFromState,
} from '@/types/time-block.types'
import { axiosAuth } from '@/api/interceptors'

class TimeBlockService {
	private BASE_URL = '/user/time-blocks'

	async getTimeBlocks() {
		const response = await axiosAuth.get<ITimeBlockResponse[]>(this.BASE_URL)
		return response
	}

	async createTimeBlock(data: TypeTimeBlockFromState) {
		const response = await axiosAuth.post(this.BASE_URL, data)
		return response
	}

	async updateOrderTimeBlock(ids: string[]) {
		const response = await axiosAuth.put(`${this.BASE_URL}/update-order`, {
			ids,
		})
		return response
	}

	async updateTimeBlock(id: string, data: TypeTimeBlockFromState) {
		const response = await axiosAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteTimeBlock(id: string) {
		const response = await axiosAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const timeBlockService = new TimeBlockService()
