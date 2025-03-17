export function useApi() {

    //const DOMAIN = 'https://healthcheck.friendsofwp.com'
    // Update 2025 Hackathon to new Domain
    const DOMAIN = 'https://api-monitor.cloudfest.buerk.tech'

    const URL_HEALTH = DOMAIN + '/api/v1/user/{userId}'

    async function _runRequest(url, method = 'GET', payload = {}, authenticationNeeded = true) {

        Object.keys(payload).forEach((key) => {
            const replaceString = '{' + key + '}'
            if (url.includes(replaceString)) {
                url = url.replace(replaceString, payload[key])
                delete payload[key]
            }
        })

        const responseOptions = {
            method,
            headers: {}
        }

        if (Object.keys(payload).length > 0) {
            responseOptions.headers["Content-Type"] = "application/json"
            responseOptions.body = JSON.stringify(payload)
        }

        const response = await fetch(url, responseOptions)

        const data = await response.json()

        if (data.status !== 'success') {
            throw new Error(data.message)
        } else {
            return data.data
        }
    }

    async function getHealthStatus() {
        return await _runRequest(URL_HEALTH, 'GET', {userId: '12345'})
    }

    return {
        getHealthStatus
    }
}
