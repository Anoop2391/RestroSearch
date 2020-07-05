import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';


const HorizontalList = ({title, results, navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data ={results}
                keyExtractor ={result => result.restaurant.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress={()=> navigation.navigate('Search')}
                        >
                            <ResultDetail result = {item.restaurant} />
                        </TouchableOpacity>
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
        marginBottom: 10,
        backgroundColor:"#fff"
    }

});

export default HorizontalList;