import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultDetail = ({result}) => {
    return(
        <View style={styles.container}>
            <Image  style={styles.image} source={result.thumb ? {uri:result.thumb}: {uri:null}}/>
            <View style={styles.detailContainer}>
                <Text style={styles.name}>{result.name}</Text>
                <Text style={styles.cuisines}>{result.cuisines}</Text>
                <Text>{result.location.locality}</Text>
                <Text style={styles.reviews}>
                    {result.user_rating.aggregate_rating} Stars, {result.currency}{result.average_cost_for_two} for two
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
        flexDirection:'row'
    },
    image:{
        width : 100,
        height : 120,
        borderRadius: 4,
        marginBottom : 5,
    },
    name:{
        fontWeight:'bold'
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

export default ResultDetail;