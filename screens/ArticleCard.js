import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import { getUser } from "../api/userProfile";

const ArticleCard = ({articleId, authorId, author, createdAt, title, tags, comments}) => {
    const navigation = useNavigation();

    const [data, setData] = React.useState(null);
    const [articles, setArticles] = React.useState(null);
    
    React.useEffect(() => {
      getUser(authorId, setData, setArticles);
    }, []);
    
    const renderTags = data && tags.map((tag, i) => {
      return(
        <View key={i} style={styles.tag}>
          <Text style={styles.tagText}>
            {tag}
          </Text>
        </View>
      );
    });
    
    return(
      <Pressable
        style={styles.article}
        onPress={() => navigation.navigate("Article", {id: articleId})}
      >
        <View style={styles.bg} />
        <LinearGradient 
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={["rgba(14, 215, 191, 0.5)", "rgba(0, 70, 111, 0.4)"]}
          style={styles.bg}
        />

        {/* Profile & date */}
        <View style={styles.profileUsernamePublish}>
          <Pressable
            style={[
            styles.profile,
            styles.profileLayout,
            styles.profilePosition,
            ]}
            onPress={() => navigation.navigate("AuthorProfile", {id: data._id})}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={ data && (data.profilepic === "" ? require("../assets/profile123x.png") : {uri: data.profilepic }) }
            />
          </Pressable>
          <View style={styles.usernameDate}>
            <Text style={styles.username}>{author}</Text>
            <Text style={styles.publishDate}>
              {createdAt}
            </Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.titleText}>
          {title}
        </Text>
        
        {/* Tags */}
        <View style={styles.tags}>
          {renderTags}
        </View>

        {/* Card Tail Info */}
        <View style={styles.cardTail}>

          {/* Comments */}
          <View style={styles.likeAndComments}>

            {/* Likes */}
            {/* <View style={styles.likes}>
              <Text style={styles.likesText}>9</Text>
              <Image
                style={styles.likesImage}
                resizeMode="cover"
                source={require("../assets/favorite6.png")}
              />
            </View> */}
            
            {/* Comments */}
            <View style={styles.comments}>
            <Text style={styles.commentsText}>{comments}</Text>
            <Image
              style={styles.commentsImage}
              resizeMode="cover"
              source={require("../assets/opposite-opinion6.png")}
            />
            </View>
            
          </View>
          
          {/* Reading Time */}
          <View style={styles.readingTime}>
          <Image
            style={styles.readingTimeImage}
            resizeMode="cover"
            source={require("../assets/bookmark-outline6.png")}
          />
          <Text style={styles.readingTimeText}>4 min read</Text>
          </View>

        </View>

      </Pressable>
    );
}

const styles = StyleSheet.create({
  article: {
    borderColor: GlobalStyles.Color.gray_100,
    borderWidth: 1,
    borderRadius: GlobalStyles.Border.br_sm,
    width: '95.5%',
    backgroundColor: GlobalStyles.Color.gray_600,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  bg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: GlobalStyles.Border.br_sm,
  },
  profileUsernamePublish: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: "100%",
  },
  usernameDate: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 5,
  },
  username: {
    color: GlobalStyles.Color.white,
    fontWeight: '600',  
    fontSize: GlobalStyles.FontSize.size_4xl,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  publishDate: {
    color: GlobalStyles.Color.gray_100,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  titleText: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_55xl,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    padding: 5,
    marginLeft: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.7,
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // gap: 5,
    width: '100%',
    marginLeft: 5,
    marginBottom: 10,
  },
  tag: {
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  tagText: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
    color: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    fontSize: GlobalStyles.FontSize.size_lg,
  },
  cardTail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  likeAndComments: {
    display: 'flex',
    flexDirection: 'row',
  },
  likes: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  likesText: {
    color: '#fff',
    marginRight: 5,
    marginLeft: 5,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  comments: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  commentsText: {
    color: '#fff',
    marginRight: 5,
    marginLeft: 5,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  readingTime: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginLeft: 10,
    alignItems: 'center',
  },
  readingTimeText: {
    color: '#fff',
    marginRight: 5,
    marginLeft: 5,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    color: GlobalStyles.Color.gray_100,
  }
});

export default ArticleCard;