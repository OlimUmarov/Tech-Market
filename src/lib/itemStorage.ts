
// LocaleStorage
export const setItem = (key: 'access_token', data: string) => {
    try {
        localStorage.setItem(key, data)
    } catch (error) {
        console.log(error)
    }
}

export const getItem = (key: 'access_token') => {
    try {
       return localStorage.getItem(key) 
    } catch (error) {
        console.log(error)
    }
}

export const deleteItem = (key: 'access_token') => {
    try {
       return localStorage.removeItem(key) 
    } catch (error) {
        console.log(error)
    }
}
