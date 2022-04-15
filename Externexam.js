import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Clock from 'react-live-clock'
const Externexam = () =>{
    retrun(
        <View style= {styles.mainContainer}>
            <Text style ={[styles.mainHeader]}>Hello Kerman</Text>
    
        <Image source={require('https://icon-library.com/images/android-notification-bell-icon/android-notification-bell-icon-18.jpg')} 
        style={{ width: '100%', height: 150 , alignItems: 'flex-end'}}
        />
        
    render() {
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} 
        alignItems={["center"]}
        padding={[30]}
        backgroundColor={['white']}/>
    }
    <View style={styles.lable}>
        <Text>View Your Travle History</Text>
    </View>

    </View>
        ); 
};
const styles = StyleSheet.create(
    {
 mainContainer:
 {
    flex:1,
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center',
 },
 mainHeader:{
    backgroundColor:'black'
    
 },
 lable:
 {
     padding:30,
     alignItems:'center',
     backgroundColor:'white',

 }
    })
export default Externexam()
