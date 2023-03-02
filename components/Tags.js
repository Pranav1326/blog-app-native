import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import GlobalStyles from '../GlobalStyles';
import { fetchAllTags, fetchArticleByTag } from '../api/tag';

const Tags = ({setData}) => {

    const [ data, setTags ] = React.useState(null);
    const [ active, setActive ] = React.useState(false); 

    React.useState(() => {
        fetchAllTags(setTags);
    },[]);
    
    const renderTags = data && data.map((tag, id) => {
        return(
            <TouchableOpacity 
                key={id}
                onPress={() => {
                    fetchArticleByTag(tag.tag, setData);
                }}
            >
                <Text style={[styles.tag, active ? styles.active : null]}>{tag.tag}</Text>
            </TouchableOpacity>
        );
    });
    
    return (
        <View style={styles.tags}>
            {renderTags}
        </View>
    );
}

const styles = StyleSheet.create({
    tags: {
        marginTop: 5,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        overflow: 'visible',
    },
    tag: {
        color: GlobalStyles.Color.white,
        backgroundColor: GlobalStyles.Color.gray_500,
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        overflow: 'hidden',
    },
    active: {
        borderColor: GlobalStyles.Color.gray_200
    },
});

export default Tags;