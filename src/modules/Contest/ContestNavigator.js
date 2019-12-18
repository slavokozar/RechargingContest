import React from 'react';
import {createStackNavigator} from "react-navigation-stack";

import ContestIndex from "./ContestIndex/ContestIndex";
import ContestShow from "./ContestShow/ContestShow";

const ContestNavigator = createStackNavigator( {
    Index: {screen: ContestIndex},
    Show:  {screen: ContestShow}
} );

export default ContestNavigator;
