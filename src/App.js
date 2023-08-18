import React from 'react'
import Banner from './banner'
import { Header , Content , Footer } from './func-components';
import Calendar from './class-components';
import Button from './class-components2';
import Calculator from './calculator'
import {EventData2,Table} from './event-data'

function App() {
    return ( 
        [<Header/>,<Banner/>,<EventData2/>,<Calculator/>,<br/>,<Button/>,<Table/>,<p><Calendar/></p>,<Content/>,<Footer/>]
    );
}

export default App;