import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import GlobalStyles from '../GlobalStyles';
import Bold from '../assets/svgs/Bold';
import Italic from '../assets/svgs/Italic';
import Link from '../assets/svgs/Link';
import Strike from '../assets/svgs/Strike';
import Quote from '../assets/svgs/Quote';
import Code from '../assets/svgs/Code';
import CodeBlock from '../assets/svgs/CodeBlock';
import Image from '../assets/svgs/Image';
import BulletList from '../assets/svgs/BulletList';
import NumberList from '../assets/svgs/NumberList';
import Checkedbox from '../assets/svgs/Checkedbox';
import Uncheckedbox from '../assets/svgs/Uncheckedbox';
import Comment from '../assets/svgs/Comment';
import HR from '../assets/svgs/HR';
import { SvgXml } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

const ArticleEditor = () => {
    const [text, setText] = useState("");
    return (
        <View>
            <View style={styles.inputBox}>
                
                <View style={styles.mdMenu}>
                    <ScrollView horizontal={true}>
                        <LinearGradient 
                            start={{x: 1, y: 1}}
                            end={{x: 0, y: 0}}
                            colors={["rgba(14, 215, 191, 0.63)", "rgba(0, 70, 111, 0.63)"]}
                            style={styles.bg}
                        />
                        {/* ===========Headings=========== */}
                        {/* Headind 1 */}
                        <TouchableOpacity style={[styles.mdBtn, styles.h1]} onPress={() => setText([...text, "\n\n# "].join(""))}>
                            <Text style={styles.btn}>H1</Text>
                        </TouchableOpacity>
                        {/* Headind 2 */}
                        <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n## "].join(""))}>
                            <Text style={styles.btn}>H2</Text>
                        </TouchableOpacity>
                        {/* Headind 3 */}
                        <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n### "].join(""))}>
                            <Text style={styles.btn}>H3</Text>
                        </TouchableOpacity>
                        {/* Headind 4 */}
                        <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n#### "].join(""))}>
                            <Text style={styles.btn}>H4</Text>
                        </TouchableOpacity>
                        {/* Headind 5 */}
                        <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n##### "].join(""))}>
                            <Text style={styles.btn}>H5</Text>
                        </TouchableOpacity>
                        {/* Headind 6 */}
                        <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n###### "].join(""))}>
                            <Text style={styles.btn}>H6</Text>
                        </TouchableOpacity>

                        <View style={styles.mdBtnView}>
                            {/* Bold */}
                            <TouchableOpacity style={[styles.bold, styles.mdBtn]} onPress={() => setText([...text, " **write here** "].join(""))}>
                                <SvgXml xml={Bold} />
                            </TouchableOpacity>
                            {/* Italic */}
                            <TouchableOpacity style={[styles.italic, styles.mdBtn]} onPress={() => setText([...text, " ***write here*** "].join(""))}>
                                <SvgXml xml={Italic} />
                            </TouchableOpacity>
                            {/* HR */}
                            <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n---- "].join(""))}>
                                <SvgXml xml={HR} />
                            </TouchableOpacity>
                            {/* Link */}
                            <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n[text here](url)"].join(""))}>
                                <SvgXml xml={Link} />
                            </TouchableOpacity>
                            {/* Strike */}
                            <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n~~~ write here ~~~"].join(""))}>
                                <SvgXml xml={Strike} />
                            </TouchableOpacity>
                            {/* Quote */}
                            <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n> write quote here"].join(""))}>
                                <SvgXml xml={Quote} />
                            </TouchableOpacity>
                            {/* Unsroted List */}
                            <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n- write point here"].join(""))}>
                                <SvgXml xml={BulletList} />
                            </TouchableOpacity>
                            {/* Sorted List */}
                            <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n1. write point here"].join(""))}>
                                <SvgXml xml={NumberList} />
                            </TouchableOpacity>
                            {/* Insert Code */}
                            <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n`write statement here`"].join(""))}>
                                <SvgXml xml={Code} />
                            </TouchableOpacity>
                            {/* Insert Code Block */}
                            <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n```\nwrite code here\n```"].join(""))}>
                                <SvgXml xml={CodeBlock} />
                            </TouchableOpacity>
                            {/* Image */}
                            <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n![text here](url)"].join(""))}>
                                <SvgXml xml={Image} />
                            </TouchableOpacity>
                            {/* Comment */}
                            <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n<!-- write comment here -->"].join(""))}>
                                <SvgXml xml={Comment} />
                            </TouchableOpacity>
                            {/* Unchecked Checkbox */}
                            <TouchableOpacity style={[styles.mdBtn, styles.hr]} onPress={() => setText([...text, "\n\n- [] write here"].join(""))}>
                                <SvgXml xml={Uncheckedbox} />
                            </TouchableOpacity>
                            {/* Checked Checkbox */}
                            <TouchableOpacity style={[styles.mdBtn, styles.end]} onPress={() => setText([...text, "\n\n- [x] write here"].join(""))}>
                                <SvgXml xml={Checkedbox} />
                            </TouchableOpacity>
                        </View>


                    </ScrollView>
                </View>


                <View style={styles.fieldTitleParentTags}>
                    <View style={styles.fieldTitleBgLayout} />
                    <Text style={[styles.fieldTitle]}>
                        Content
                    </Text>
                </View>
                <TextInput 
                    placeholder={'Enter text here...'}
                    placeholderTextColor={GlobalStyles.Color.gray_300}
                    multiline={true} 
                    numberOfLines={15} 
                    value={text} 
                    style={styles.input} 
                    onChangeText={(text) => setText(text)} 
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputBox: {
      margin: 10,
      marginBottom: 60,
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
        backgroundColor: '#000',
    },
    input: {
        height: 150,
        width: '100%',
        borderWidth: 1,
        backgroundColor: GlobalStyles.Color.black,
        borderRadius: 5,
        borderColor: GlobalStyles.Color.white,
        placeholderColor: "white",
        color: GlobalStyles.Color.white,
        padding: 10,
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 24,
        textAlignVertical: 'top',
    },
    btnTouch: {
        backgroundColor: '#088',
        padding: 10,
        width: 86,
        borderRadius: 5,
        marginBottom: 10,
    },
    btn: {
        fontSize: 20,
        color: '#fff',
    },
    mdBtn: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: 10,  
        marginBottom: 10,
        marginTop: 10,
        marginRight: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    mdBtnView: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    h1: {
        // width: 60,
        marginLeft: 10,
    },
    end: {
        marginRight: 10,
    },
    headings: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    mdMenu: {
        width: '100%',
        overflow: 'scroll',
        backgroundColor: GlobalStyles.Color.gray_500,
        borderRadius: 5,
    },
    fieldTitleParentTags: {
        width: 80,
        // top: -10,
        bottom: -12,
        zIndex: 10,
        left: 20,
        borderWidth: 1,
        borderRadius: 5,
        // position: 'absolute',
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
});

export default ArticleEditor;