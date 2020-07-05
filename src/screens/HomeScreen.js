import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import useResults from '../hooks/restaurantResults';
import HorizontalList from '../components/HorizontalList';
import VerticalList from '../components/VerticalList';

const HomeScreen = ({navigation}) =>{
    const [restaurantsListApi,results, errorMessage] = useResults();
    const filterResultsByPrice = (price) =>{
        return results.filter(result => {
            return result.restaurant.price_range === price;
        })
    }

    return (
    <ScrollView style={styles.container}>
        {errorMessage ? <Text> {errorMessage}</Text> : null}
        <HorizontalList navigation={navigation} results={filterResultsByPrice(2)} title="Cost Effective" />
        <HorizontalList results={filterResultsByPrice(3)} title="Bit Pricier" />
        <HorizontalList results={filterResultsByPrice(4)} title="Big Spender" />
        <View style={styles.nearbyRes}>
            <Text style={styles.subHeading}>All Restaurants Nearby</Text>
            <VerticalList results={results}  />
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10
    },
    subHeading:{
        fontWeight: "bold",
        fontSize: 18,
        marginLeft:15,
    },
    nearbyRes:{
        backgroundColor:"#fff"
    }
});

export default HomeScreen;