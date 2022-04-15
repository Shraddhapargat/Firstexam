import React from "react";
import{View, 
        Text, 
        StyleSheet,
        TextInput,
        TouchableOpacity,
    } from "react-native";
import CheckBox from "expo-checkbox";
import react, { useState } from "react";
/*import{
    useFonts,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_900Black,
    } from " @expo-google-fonts/montserrat";

import{
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    } from  "@expo-google-fonts/josefin-sans";

import AppLoading from "expo-app-loading";*/

const Contactus = () => {      
    const [userName, setUserName] = useState("");
    const [Password, setPassword] = useState("");

    const [agree, setAgree] = useState(false);

   /* let[ fontLoaded, error] = useFonts ({
        bold: Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold,

        regular: JosefinSans_400Regular,
        JosefinSans_500Medium,
    });
        if(!fontLoaded)
        {   
           return  <AppLoading/>;
        }*/ 

    return( 
    <View style= {styles.mainContainer}>
            <Text style ={[styles.mainHeader, styles.setColorPurple]}>LOGIN Form</Text>
            <Text style={styles.discription}>
                "you can reach us any time"        
            </Text>

        <View style={styles.inputContainer}>
                <Text style={styles.labels}>
                Enter your name
                </Text>

                <TextInput style = {styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                
                Value={userName}
                />
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.labels}>
                Enter Password
            </Text>

            <TextInput style = {styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            />

        </View>

        <View style={styles.wrapper}>
            <CheckBox 
                Value={agree}
                onValueChange={() => setAgree(!agree)}
                color = {agree ? "#4630EB": undefined}

            />
            <Text style= {styles.wrapperText}>
                Remember me 
            </Text>
        </View>
            <TouchableOpacity 
                    style={[
                        styles.buttonStyle,
                        {
                            backgroundColor: agree ? "#87CEFA" :"grey",
                        }
                    ]}>

                <Text>LOGIN</Text>
            </TouchableOpacity>
    </View>
        ); 
};

const styles = StyleSheet.create(
    {
    container: 
        {
            flex :1,
            padding:34,
            backgroundColor:"#ffdab9",
            alignItems:'center',
            justifyContent:'center',
        },
    Text:
        {
            fontSize:30,
            color:'#f0f',
        },
    mainContainer:
        {
              flex:1,
              height:"80%",
              paddingHorizontal:30,
              paddingTop:90,
              backgroundColor:'#ff00ff00',
              alignItems:'center',
              justifyContent:'center',
          
        },
    mainHeader:
        {
              fontSize:40,
              color:"#344055",
              fontWeight:"500",
              paddingBottom:15,
              textTransform:"capitalize",
        },
    discription:
        {
              fontSize:25,  
              color:"#7d7d7d",
              paddingBottom:20,
        },
    inputContainer:
        {
              marginTop:20,
        },
    labels:
        {
              fontSize:18,
              color:"#f0fc",
              marginTop:10,
              marginBottom:5,
        },
    inputStyle:
        {
              borderWidth:1,
              padding:24,
              borderColor: "rgba(0,0,0,0.3)",
              paddingHorizontal:15,
              paddingVertical:7,
              borderRadius:1,
              fontSize:10,
        },
    buttonStyle:
        {
            backgroundColor:"#87CEFA",
            alignItems:'center',
            padding:10,
            paddingVertical:1,
        }
      });

export default Contactus;   