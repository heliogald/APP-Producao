// import { Login } from 'react-admin';

// export const MyLoginPage = () => (
//     <Login
//         // A random image that changes everyday
//         backgroundImage="https://source.unsplash.com/random/1600x900/daily"
        
//     />
// );

import { Login } from 'react-admin';
import backgroundImage from './assets/images/cadastroLogin.jpg'; // ajuste o caminho conforme necessário

export const MyLoginPage = () => (
    <Login
        backgroundImage={backgroundImage}
    />
);
