import React from 'react';
import { View, Text } from 'react-native';
import FastImage from "react-native-fast-image";

import ActivitiesScreen from "@src/containers/Custom/ActivitiesScreen";
import {DEVICE_WIDTH} from "@src/styles/global";

const ActivityScreenNew = (props) => {

 return (
   <View style={{ flex: 1 }}>

     <View style={{ flex: 1 }}>
       <ActivitiesScreen {...props} screenTitle="Activity List" showSearch={true} hideFilters={false} hideTitle={true} hideNavigationHeader={false} />
     </View>
   </View>
 )

}

export default ActivityScreenNew;
