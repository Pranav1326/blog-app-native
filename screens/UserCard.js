import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import GlobalStyles from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'

const UserCard = ({userId, username, bio, joinedDate, noOfArticles, noOfComments, profilepic}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.UserCard}>
            {/* Main Background Gradient */}
            <LinearGradient
                style={[styles.bg]}
                start={{x: 1, y: 1}}
                end={{x: 0, y: 0}}
                colors={["rgba(14, 215, 191, 0.63)", "rgba(0, 70, 111, 0.63)"]}
            />

            {/* Profile Pic & Username */}
            <View style={[styles.profileUserView]}>
                <Image
                    style={[styles.icon, styles.shadow]}
                    resizeMode="cover"
                    source={ profilepic === "" ? require("../assets/profile123x.png") : {uri: profilepic } }
                    onPress={() => navigation.navigate("AuthorProfile", {id: userId})}
                />
                <View style={[styles.usernameNJoinedView, styles.shadow]}>
                    <Text 
                        style={styles.usernameText}
                        onPress={() => navigation.navigate("AuthorProfile", {id: userId})}
                    >{username}</Text>
                    <Text style={styles.joineddateText}>Joined on {joinedDate}</Text>
                </View>
            </View>
            
            {/* Bio */}
            <View style={styles.userBio}>
                <Text style={[styles.bioText, styles.shadow]}>{bio}</Text>
            </View>
            
            {/* Articles & Comments */}
            <View style={styles.articlesNCommentsView}>
                {/* Articles */}
                <View style={[styles.aritcles, styles.shadow]}>
                    <View style={styles.TotalAritcles}>
                        <Text style={[styles.TotalAritclesText, styles.shadow]}>{noOfArticles}</Text>
                    </View>
                    <View style={styles.aritclesTextView}>
                        <Text style={[styles.aritclesText, styles.shadow]}>Articles</Text>
                    </View>
                </View>
                {/* Comments */}
                <View style={[styles.comments, styles.shadow]}>
                    <View style={styles.TotalAritcles}>
                        <Text style={[styles.TotalAritclesText, styles.shadow]}>{noOfComments}</Text>
                    </View>
                    <View style={styles.aritclesTextView}>
                        <Text style={[styles.aritclesText, styles.shadow]}>Comments</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    UserCard: {
        minWidth: 390,
        minHeight: 100,
        borderColor: '#088',
        borderWidth: 1,
        margin: 5,
        borderRadius: GlobalStyles.Border.br_sm,
    },
    bg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: GlobalStyles.Border.br_sm,
    },
    profileUserView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        margin: 10,
        width: 64,
        height: 64,
        borderRadius: '100%',
    },
    usernameText: {
        color: GlobalStyles.Color.white,
        fontSize: GlobalStyles.FontSize.size_55xl,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    },
    joineddateText: {
        color: GlobalStyles.Color.gray_200,
        fontSize: GlobalStyles.FontSize.size_lg,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    },
    userBio: {
        marginLeft: 12,
        marginRight: 10,
    },
    bioText: {
        color: GlobalStyles.Color.white,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
        fontSize: GlobalStyles.FontSize.size_3xl,
    },
    articlesNCommentsView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    aritcles: {
        minWidth: 120,
        height: 30,
        backgroundColor: GlobalStyles.Color.teal,
        borderColor: GlobalStyles.Color.white,
        borderWidth: 1,
        borderRadius: GlobalStyles.Border.br_sm,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    comments: {
        minWidth: 120,
        height: 30,
        backgroundColor: GlobalStyles.Color.teal,
        borderColor: GlobalStyles.Color.white,
        borderWidth: 1,
        borderRadius: GlobalStyles.Border.br_sm,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    TotalAritcles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    TotalAritclesText: {
        color: GlobalStyles.Color.white,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
        fontSize: GlobalStyles.FontSize.size_3xl,
    },
    aritclesTextView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        height: '100%',
        borderStartWidth: 1,
        borderStartColor: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
    },
    aritclesText: {
        color: GlobalStyles.Color.white,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
        fontSize: GlobalStyles.FontSize.size_3xl,
    },
    shadow: {
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
        width: 4,
        height: 4,
        },
    }
});

export default UserCard;