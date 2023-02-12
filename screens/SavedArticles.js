import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import GlobalStyles from '../GlobalStyles';
import ArticleCard from './ArticleCard';
import Footer from '../components/Footer';

const SavedArticles = () => {
    return (
        <ScrollView>
            <View style={styles.savedArticles}>
                <Text style={styles.mainTitle}>Saved Articles</Text>
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
    savedArticles: {
        width: '100%',
        height: '100%',
        minHeight: 900,
        backgroundColor: GlobalStyles.Color.black,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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

export default SavedArticles;