import React from 'react'
import Banner from './banner'
import { Header , Content , Footer } from './func-components';
import Calendar from './class-components';
import Button from './class-components2';

function App() {
    return ( 
        [<Header/>,<Banner/>,<Button/>,<p><Calendar/></p>,<Content/>,<Footer/>]
    );
}

export default App;