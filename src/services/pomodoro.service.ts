import {
	IPomodoroSessionResponse,
	TypePomodoroRoundState,
	TypePomodoroSessionState,
} from '@/types/pomodoro.types'
import { axiosAuth } from '@/api/interceptors'

class PomodoroService {
	private BASE_URL = '/user/timer'

	async getTodaySession() {
		const response = await axiosAuth.get<IPomodoroSessionResponse>(
			`${this.BASE_URL}/today`,
		)
		return response
	}

	async createSession() {
		const response = await axiosAuth.post<IPomodoroSessionResponse>(
			this.BASE_URL,
		)
		return response.data
	}

	async updateSession(id: string, data: TypePomodoroSessionState) {
		const response = await axiosAuth.put(`${this.BASE_URL}/${id}`)
		return response
	}

	async updateRound(id: string, data: TypePomodoroRoundState) {
		const response = await axiosAuth.put(`${this.BASE_URL}/round/${id}`, data)
		return response
	}

	async deleteSession(id: string) {
		const response = await axiosAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const pomodoroService = new PomodoroService()
