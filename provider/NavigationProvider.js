import React, { useEffect, useState } from 'react';

// const NavigationContext = React.createContext();

// const NavigationProvider = () => {
//     return (
//         <NavigationProvider.Provider
//             value={{ refresh: 0 }}>
//         </NavigationProvider.Provider>

//     );
// }

// export { NavigationProvider, NavigationContext };
export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // default value
);