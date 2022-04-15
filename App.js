import React from "react";
import{View} from "react-native";
//import Contactus from "./Contactus";
import Externexam from "./Externexam";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () =>{
        const Stack = createNativeStackNavigator();

        return (
        // <View>
        //         <Contactus/>
        // </View>
        <View>
                <Externexam/>
        </View>
        );
};
export default App;