import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import ItemTop from "./ItemTop";
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default class TopBox extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.TextTop}>
                    <Entypo name="back-in-time" color="black" size={25} /> Danh Sách Tìm Kiếm Gần Đây
                </Text>
                <ItemTop />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    TextTop:{
        fontSize:20,
        fontWeight:'bold'
    }
})
