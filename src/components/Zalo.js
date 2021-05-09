import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import TopBox from "./TopBox";
import BottomBox from './BottomBox'
export default class Zalo extends Component {
    render() {
        return (
            <View style={styles.ScreenViewContainer}>
                <TopBox/>
                <BottomBox/>
            </View>
        )
    }
}   

const styles = StyleSheet.create({
    ScreenViewContainer:{
        flex:1,
        backgroundColor:'#FFFFFF'
    }
})