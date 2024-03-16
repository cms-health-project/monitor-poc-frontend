import {useAuthStore} from "~/stores/authStore.js";
import {jwtDecode} from "jwt-decode";

export function useAuth() {

    const URL_LOGIN = 'https://auth.startwind.io/webinsights/login'
    const URL_REGISTER = 'https://auth.startwind.io/webinsights/user/register'

    const URL_REFRESH = 'https://auth.startwind.io/webinsights/token/refresh'

    /**
     * Run a request against the auth API.
     */
    async function _runRequest(url, method, payload) {
        const response = await fetch(url, {
            method, body: JSON.stringify(payload)
        })

        const data = await response.json()

        if (data.status === 'error') {
            throw new Error(data.message)
        } else {
            return data.data
        }
    }

    async function register(email, password) {
        const data = await _runRequest(URL_REGISTER, 'POST', {email, password})
    }

    async function login(email, password) {
        const authStore = useAuthStore()

        const data = await _runRequest(URL_LOGIN, 'POST', {email, password})

        authStore.accessToken = data.auth
        authStore.refreshToken = data.refresh
        authStore.plan = data.plan

        return {
            email: email,
            id: data.user
        }
    }

    function logout() {
        const authStore = useAuthStore()

        authStore.accessToken = ''
        authStore.refreshToken = ''
    }

    async function refreshAuthToken() {
        const now = Math.round(new Date().getTime() / 1000);
        const decodedAccessToken = jwtDecode(useAuthStore().accessToken);

        if (now < decodedAccessToken.exp) {
            return
        }

        const decodedRefreshToken = jwtDecode(useAuthStore().refreshToken);

        if (now > decodedRefreshToken.exp) {
            logout()
            throw new Error('Refresh token expired. Please log in again')
        }

        const token = await _runRequest(URL_REFRESH, 'POST', {refreshToken: useAuthStore().refreshToken})
        useAuthStore().accessToken = token.auth
    }

    function isAuthenticated() {
        return useAuthStore().accessToken !== ""
    }

    return {login, logout, register, isAuthenticated, refreshAuthToken}
}
