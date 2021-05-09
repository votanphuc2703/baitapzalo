import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import dataUser from './data'
export default class ItemTop extends Component {

    recentSearch = () => {
        return dataUser.map(user => {
            if (user.status !== 0)
                return <View key={user.id} style={styles.Item}>
                    <Image style={styles.IconItem} source={user.image} />
                    <Text style={styles.TextItem}>{user.nameUser}</Text>
                </View>
        })
    }
    render() {
        return (
            <View style={styles.ScreenContainerTop}>
                {this.recentSearch()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ScreenContainerTop: {
        flexDirection: 'row'
    },
    Item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10

    },
    IconItem: {
        borderRadius: 200 / 2,
        width: 80,
        height: 80
    },
    TextItem: {
        fontSize: 13,
        fontWeight: 'bold'
    }

})