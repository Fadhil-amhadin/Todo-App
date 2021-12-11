export const API = () => {
    const baseUrl = 'http://192.168.43.27:5000/api/v1'

    const executeAPI = async (endpoint, config) => {
        try {
            const response = await fetch(baseUrl + endpoint, config)
            const data = await response.json()
            return data
        } catch (error) {
            throw error
        }
    }
    return {
        get: executeAPI,
        post: executeAPI,
        patch: executeAPI,
        delete: executeAPI
    }
}