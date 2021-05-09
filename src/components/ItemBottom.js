import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import dataUser from './data'

export default class ItemBottom extends Component {
    suggestionFriends = () => {
        return dataUser.map((user) => {
            {
                if (user.status === 0)
                    return <View key={user.id} style={styles.ScreenContainerBottom}>
                        <View style={styles.ItemBottom}>
                            <Image style={styles.IconItem} source={user.image} />
                            <View>
                                <Text style={styles.TextName}>{user.nameUser}</Text>
                                <Text>{user.generalFriends} Ban chung</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.Button}>
                                    <Text style={styles.TextButton} >Kết Bạn</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            }

        })
    }

    render() {
        return (
            <>
                {this.suggestionFriends()}
            </>
        )
    }
}

const styles = StyleSheet.create({
    ScreenContainerBottom: {
        flex: 1,
        flexDirection: 'column',


    },
    ItemBottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        margin: 5,
        padding: 10,
        borderRadius: 15

    },
    IconItem: {
        width: 80,
        height: 80,
        borderRadius: 200 / 2

    },
    TextName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    Button: {
        borderRadius: 200,
        backgroundColor: '#00CCFF',
        width: 80,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    TextButton: {
        fontSize: 16,
        fontWeight: 'normal',
    }
})