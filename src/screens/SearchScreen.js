import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import SearchResults from '../hooks/searchResults';
import VerticalList from '../components/VerticalList';

const SearchScreen = () =>{
    const [term, setTerm] = useState('');
    const [searchApi, searchResults, errorMessage] = SearchResults();

    return (
    <View style={styles.container}>
        <SearchBar 
            term={term} 
            onTermChange = {newTerm => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text> {errorMessage}</Text> : null}
        <Text style={styles.text}>We have found {searchResults.length} results</Text>
        <VerticalList loadMoreApi={searchApi} results={searchResults}  />
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        marginTop: 15,
        marginHorizontal: 15
    }
});

export default SearchScreen;