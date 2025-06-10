import React from 'react';

const AuthContext = React.createContext({
    version: '0.1.0',
    greeting: 'http://192.168.1.186:5001/home',
    profile: 'http://192.168.1.186:5001/profile',
    update: 'http://192.168.1.186:5001/update',
})
export default AuthContext;