import {useTheme} from './providers/ThemeProvider/lib/useTheme';

import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from './providers/router';
import {Navbar} from 'widgets/navbar';
import {Sidebar} from 'widgets/Sidebar';
import {Suspense, } from 'react';
import { Counter } from 'entities';
const App = () => {
    const {theme} = useTheme();

 
    return (
        <div className={classNames('app', {}, [theme])}>

            <Suspense>
                <Navbar />
                
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                    <Counter/>
                </div> 
            </Suspense>
        </div>
    );
};

export default App;

