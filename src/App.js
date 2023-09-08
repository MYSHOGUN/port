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
import {userContext} from './context'
import Content1 from './context-content'
import Header2 from './context-header2'
import Content2 from './context-content2'

function App() {
    let [user,setUser] = React.useState()
    return ( 
        [<userContext.Provider value = {[user,setUser]}><Header2/>,<Content2/></userContext.Provider>,<Banner/>,<EventData2/>,<MessageBox/>,<Calculator/>,<br/>,<Button/>,<Table/>,<RefsFunc/>,<RefsArray/>,<p><Calendar/></p>,<Content/>,<Footer/>]
    );
}

export default App;