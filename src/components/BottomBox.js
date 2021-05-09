import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import ItemBottom from "./ItemBottom";
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default class BottomBox extends Component {
    render() {
        return (
            <View style={{ flex: 4 }}>
                <Text style={styles.TextBottom} >
                    <Entypo name="users" color="black" size={25}/>
                     Gợi ý kết bạn</Text>
                <ScrollView>
                    <ItemBottom />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TextBottom: {
        fontSize: 20,
        fontWeight: 'bold',
        padding:10
    }

})