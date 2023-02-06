import Cookies from 'js-cookie';

// save the token and user into the Cookies and expired in 7 days
export const setUserSession = (token: string, user: object) => {
    Cookies.remove('token');
    Cookies.remove('user');
    Cookies.set('user', JSON.stringify(user), { expires: 7 });
    Cookies.set('token', JSON.stringify(token), { expires: 7 });
}

// update user session
export const updateUserSession = (user: object) => {
    Cookies.remove('user');
    Cookies.set('user', JSON.stringify(user), { expires: 7 });
}

// return the user data from the Cookies
export const getUser = () => {  
    const userStr = Cookies.get('user');
    if (userStr) return JSON.parse(userStr); 
    return null;
}

// return the token from the Cookies
export const getToken = () =>  { 
    const token = Cookies.get('token');

    if (token) return JSON.parse(token);
    return null;
}

// remove the token and user from the Cookies
export const removeUserSession = () => {
    Cookies.remove('token');
    Cookies.remove('user');
}

// save the temporary token into the Cookies and expired in 7 days
export const setTemporarySession = (token: string) => {
    Cookies.set('temporary_session', JSON.stringify(token), { expires: 7 });
}

// return the token from the Cookies
export const getTemporarySession = () => {
    const TemporaryStr = Cookies.get('temporary_session');
    if (TemporaryStr) return JSON.parse(TemporaryStr);
    return null;
}

// remove the temporary token
export const removeTemporarySession = () => {
    Cookies.remove('temporary_session');
}