import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import ArticleEditor from '../components/ArticleEditor';
import GlobalStyles from '../GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector } from 'react-redux';
import { createArticle } from '../api/article';
import { useNavigation } from '@react-navigation/core';

const CreateArticle = () => {
  
  const navigation = useNavigation();
  const user = useSelector(state => state.userReducer.user);
  const token = useSelector(state => state.userReducer.token);
  
  const [ title, setTitle ] = useState("");
  const [ tags, setTags ] = useState("");
  const [ text, setText ] = useState("");
  
  const handleOnSubmit = () => {
    const data = {title, tags: [tags], content: text, author: user.username, authorId: user._id};
    createArticle(data, token,  navigation);
  }
  
  return (
    <View style={styles.markdownMain}>
      <ScrollView>
        <Text style={styles.mainTitle}>Create Article</Text>
        {/* Title */}
        <View style={styles.fieldBox}>
          <View style={styles.fieldTitleParent}>
            <View style={styles.fieldTitleBgLayout} />
            <Text style={[styles.fieldTitle]}>
              Title
            </Text>
          </View>
          <View style={styles.joinedOnTextBg} />
          <TextInput
            style={styles.fieldValue}
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>
        {/* Tags */}
        <View style={styles.fieldBox}>
          <View style={styles.fieldTitleParentTags}>
            <View style={styles.fieldTitleBgLayout} />
            <Text style={[styles.fieldTitle]}>
              Tags
            </Text>
          </View>
          <View style={styles.joinedOnTextBg} />
          <TextInput
            style={[styles.fieldValue]}
            placeholder={"blog, article, post"}
            placeholderTextColor={GlobalStyles.Color.gray_200}
            value={tags}
            onChangeText={text => setTags(text)}
          />
        </View>
        
        <ArticleEditor 
          text={text}
          setText={setText}
        />

        <View style={styles.btns}>
          <View style={[styles.saveBtn, styles.btnLayout]}>
            <LinearGradient
              style={[styles.btnBg, styles.btnLayout]}
              start={[0, 0]}
              end={[1, 1]}
              colors={["rgba(14, 215, 191, 0.6)", "rgba(0, 70, 111, 1)"]}
            />
            <TouchableOpacity
              style={styles.save}
              onPress={handleOnSubmit}
            >
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  markdownMain: {
    height: '100%',
    width: '100%',
    backgroundColor: GlobalStyles.Color.gray_800,
    marginBottom: 100,
  },
  mainTitle: {
    color: GlobalStyles.Color.white,
    textAlign: 'center',
    fontSize: GlobalStyles.FontSize.size_7xl,
    marginTop: 5,
    marginBottom: -5,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  fieldBox: {
    height: 60,
    width: '95%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: GlobalStyles.Color.white,
    backgroundColor: GlobalStyles.Color.black,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
    // marginTop: 20,
  },
  fieldTitleParent: {
    width: 50,
    bottom: 16,
    left: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  fieldTitleParentTags: {
    width: 54,
    bottom: 16,
    left: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  fieldTitle: {
    width: '100%',
    color: GlobalStyles.Color.gray_200,
    fontSize: GlobalStyles.FontSize.size_2xl,
    fontWeight: "600",
    backgroundColor: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
  },
  fieldValue: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_4xl,
    left: 20,
    top: -10
  },
  saveBtn: {
    height: 30,
    width: 70,
    alignSelf: 'center',
    borderColor: GlobalStyles.Color.white,
    borderRadius: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
  },
  btnBg: {
    shadowColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "#000",
    borderRadius: GlobalStyles.Border.br_sm,
    height: 30,
    width: 70,
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    left: 0,
    position: 'absolute',
  },
  saveText: {
    fontSize: GlobalStyles.FontSize.size_3xl,
    color: GlobalStyles.Color.white,
  },
});

export default CreateArticle;