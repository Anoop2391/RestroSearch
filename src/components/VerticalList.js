import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';

const VerticalList = ({results}) => {
    return(
        <View style={styles.container}>
            <FlatList 
                vertical
                showsVerticalScrollIndicator={false}
                data ={results}
                keyExtractor ={result => result.restaurant.id}
                renderItem={({item}) => {
                    return (
                        <ResultDetail result = {item.restaurant} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft: 15,
        marginBottom:5
    },
    container:{
        marginTop: 10,
        flex:1,
        backgroundColor:"#fff"

    }

});

export default VerticalList;