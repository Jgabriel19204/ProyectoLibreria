import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
import { ArticulosView } from "./ArticulosView";
import { CompraView } from "./CompraView";

const Tab = createBottomTabNavigator

export const BottomTab = (props) => {

    return(
        <Tab.Navigator>
        <Tab.Screen name="CompraView" component={CompraView} />
        <Tab.Screen name="ArticulosView" component={ArticulosView} />
    </Tab.Navigator>
    );
}