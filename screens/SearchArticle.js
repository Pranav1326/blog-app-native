import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import GlobalStyles from '../GlobalStyles';
import { SvgXml} from 'react-native-svg';
import ArticleCard from './ArticleCard';
import Footer from '../components/Footer';

const SearchArticle = () => {
    
    const searchSvg = `
    <svg width="25" height="25" viewBox="0 0 77 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.7526 49.5538C57.2697 44.3025 60 37.4701 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C36.9756 60 43.3951 57.6193 48.4903 53.626C48.5391 53.7437 48.6114 53.854 48.7071 53.9497L71.3345 76.5772C71.7251 76.9677 72.3582 76.9677 72.7487 76.5772L75.5772 73.7487C75.9677 73.3582 75.9677 72.725 75.5772 72.3345L52.9498 49.7071C52.8893 49.6466 52.823 49.5955 52.7526 49.5538ZM30 54C16.7452 54 6 43.2548 6 30C6 16.7452 16.7452 6 30 6C43.2548 6 54 16.7452 54 30C54 43.2548 43.2548 54 30 54Z" fill="white"/>
    </svg>
    `;
    
    return (
        <ScrollView>
            <View style={styles.searchMain}>
                <Text style={styles.mainTitle}>Search Article</Text>
                <View style={styles.searchBar}>
                    <SvgXml xml={searchSvg} style={styles.searchIcon} />
                    <TextInput style={styles.inputBox}/>
                </View>
                <View style={styles.articleList}>
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <Footer />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    searchMain: {
        width: '100%',
        height: '100%',
        backgroundColor: GlobalStyles.Color.black,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    searchBar: {
        width: '95%',
        height: 50,
        backgroundColor: GlobalStyles.Color.gray_500,
        marginTop: 5,
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        marginLeft: 15,
        marginRight: 15,
    },
    inputBox: {
        width: '82%',
        color: GlobalStyles.Color.white,
        fontSize: GlobalStyles.FontSize.size_5xl,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
        letterSpacing: 1,
    },
    mainTitle: {
        color: GlobalStyles.Color.white,
        fontSize: GlobalStyles.FontSize.size_7xl,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
        marginTop: 10,
    },
    articleList: {
        height: '100%',
        width: '100%',
    },
});

export default SearchArticle;