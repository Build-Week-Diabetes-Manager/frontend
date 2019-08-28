import React from 'react'
import { Tab } from 'semantic-ui-react';
import TestDoughnut from './ChartThree.js';
import TestLine from './ChartTwo.js';
import NutriList from './NutriList.js';


const panes = [
    {
        menuItem:<img className="icon logo" src={require('../img/dashboardIcons/Logo1.svg')}/>,
        render: () => <Tab.Pane attached={false}>null</Tab.Pane>,
        
    },
    {
        menuItem:<img className="icon logo" src={require('../img/dashboardIcons/Logo1.svg')}/>,
        render: () => <Tab.pane attached={false}> 
            <h1>Home Page</h1> 
            <p>Display graphs when home icon is selected, this pane should open by default first </p>
            <NutriList />            
        </Tab.pane>
    },
    {
        menuItem:<img className="icon" src={require('../img/dashboardIcons/graphIcon.svg')}/>,
        render: () => <Tab.Pane attached={false}>                                    <div className="container-one"> 
        <TestDoughnut />
        </div>

        <div className="container-two"> 
        <TestLine />
        </div>
        </Tab.Pane>,
    }

]

const DashboardPointing = () => <Tab menu={{ pointing: true}} panes={panes} />
    
export default DashboardPointing