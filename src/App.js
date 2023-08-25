import React from 'react'
import Banner from './banner'
import { Header , Content , Footer } from './func-components';
import Calendar from './class-components';
import Button from './class-components2';
import Calculator from './calculator'
import {EventData2,Table} from './event-data'
import RefsFunc from './refs-func';
import RefsArray from './refs-array';
import MessageBox from './state-func';

function App() {
    return ( 
        [<Header/>,<Banner/>,<EventData2/>,<MessageBox/>,<Calculator/>,<br/>,<Button/>,<Table/>,<RefsFunc/>,<RefsArray/>,<p><Calendar/></p>,<Content/>,<Footer/>]
    );
}

export default App;