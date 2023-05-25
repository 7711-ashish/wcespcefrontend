import apiClient from "./client";

const getResource = (payload) => {
    return apiClient.get('/resources', payload);
}

const createResource = (payload) => {
    return apiClient.post('/resources', payload);
}

const updateResource = (payload) => {
    return apiClient.put('/', payload);
}

const deleteResource = (payload) => {
    return apiClient.delete('/', payload)

}

const getResourceHistory = (payload) => {
    return apiClient.get('/resources/history', payload);
}




export { getResource, createResource, updateResource, deleteResource,getResourceHistory };
