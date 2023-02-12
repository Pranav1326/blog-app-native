import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import GlobalStyles from '../GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

const Footer = () => {
    const navigatation = useNavigation();
    return (
        <View style={styles.footer}>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={["rgba(14, 215, 191, 0.15)", "rgba(0, 70, 111, 0.2)"]}
                style={styles.bg}
            />
            <TouchableOpacity style={styles.aboutBtn} onPress={() => navigatation.navigate("About")} >
                <Text style={styles.aboutText}>About Us</Text>
            </TouchableOpacity>
            <Text style={styles.copyrightText}>Copyright @2022-2023</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"
    },
    bg: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: GlobalStyles.Color.gray_800
    },
    aboutBtn: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        padding: 12,
        width: 120,
        marginBottom: 5,
        borderRadius: 5,
    },
    aboutText: {
        textAlign: 'center',
        color: GlobalStyles.Color.white,
        fontSize: GlobalStyles.FontSize.size_4xl,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
        fontWeight: '500',
    },
    copyrightText: {
        fontWeight: '500',
        textAlign: 'center',
        color: GlobalStyles.Color.white,
        fontFamily: GlobalStyles.FontFamily.hammersmithOne,
        fontSize: GlobalStyles.FontSize.size_3xl,
    },
});

export default Footer;