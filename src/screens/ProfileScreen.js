import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ProfileScreen = () =>{
    return (
        <View style={styles.container}>
            <View style={styles.detailContainer}>
                <Text style={styles.name}>Anoop</Text>
                <Text style={styles.cuisines}>XYZ@gmail.com</Text>
            </View>
            <Image source={require("../../assets/forest.jpg")}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
        flexDirection:'row',
        marginTop:20,
        backgroundColor: "#fff"
    },
    image:{
        width : 60,
        height : 60,
        borderRadius: 50,
        marginBottom : 5,
    },
    name:{
        fontWeight:'bold',
        fontSize:20
    },
    detailContainer:{
        flexDirection:'column',
        flex:1,
        marginHorizontal: 10
    },
    reviews:{
        marginTop:10,
        fontWeight:"bold"
    },
    cuisines:{
        overflow: "hidden"
    }

});

export default ProfileScreen;