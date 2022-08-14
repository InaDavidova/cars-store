const baseUrl = 'http://localhost:3030';

async function request(url, options) {

    try {
        const response = await fetch(baseUrl + url, options);

        if (response.ok !== true) {
            const result = await response.json();
            const error = new Error(result.message);
            error.status = response.status;
            throw error;
        }

        try {
            return await response.json();

        } catch (err) {
            return response;
        }

    } catch (err) {
        throw err;
    }
}

export async function get(url, data) {
    const result = await request(url, createOptions('get', data));
    return result;
}

export async function post(url, data) {
    const result = await request(url, createOptions('post', data));
    return result;
}

export async function put(url, data) {
    return await request(url, createOptions('put', data));
}

export async function del(url, data) {
    return await request(url, createOptions('delete', data));
}

function createOptions(method, data) {
    const options = {
        method: method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    return options;
}