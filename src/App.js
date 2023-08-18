import React from 'react'
import Banner from './banner'
import { Header , Content , Footer } from './func-components';
import Calendar from './class-components';

function App() {
    return ( 
        [<Header/>,<Banner/>,<p><Calendar/></p>,<Content/>,<Footer/>]
    );
}

export default App;