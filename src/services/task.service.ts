import { ITaskResponse, TypeTaskFormState } from '@/types/task.types'
import { axiosAuth } from '@/api/interceptors'

class TaskService {
	private BASE_URL = '/user/tasks'

	async getTasks() {
		const response = await axiosAuth.get<ITaskResponse[]>(this.BASE_URL)
		return response
	}

	async createTask(data: TypeTaskFormState) {
		const response = await axiosAuth.post(this.BASE_URL, data)
		return response
	}

	async updateTask(id: string, data: TypeTaskFormState) {
		const response = await axiosAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteTask(id: string) {
		const response = await axiosAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const taskService = new TaskService()
