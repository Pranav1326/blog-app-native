import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView, TextInput, TouchableOpacity, TouchableOpacityBase  } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../GlobalStyles";
import Footer from "../components/Footer";
// import DocumentPicker from "react-native-document-picker";

const EditProfile = () => {
  const navigation = useNavigation();

  const [ bio, setBio ] = React.useState("");
  const [ work, setWork ] = React.useState("");
  const [ location, setLocation ] = React.useState("");
  const [ email, setEmail ] = React.useState("");
  
  const handleSubmit = e => {
    // e.preventDefault();
    console.log(bio, work, location, email);
  }
  
  return (
    <ScrollView>
      <View style={styles.editProfile}>
        <View style={styles.profileBox}>
          {/* <View style={styles.profileBg} /> */}
        
          {/* Background Gradient */}
          <LinearGradient 
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={["rgba(14, 215, 191, 0.5)", "rgba(0, 70, 111, 0.4)"]}
            style={styles.bg}
          />

          {/* User Profile Pic */}
          <Image
            style={styles.profileIcon}
            resizeMode="cover"
            source={require("../assets/profile15.png")}
          />
        
          {/* Username */}
          <Text style={styles.username}>Pranav</Text>

          {/* Bio */}
          <View style={styles.fieldBox}>
            <View style={styles.fieldTitleParent}>
              <View style={styles.fieldTitleBgLayout} />
              <Text style={[styles.fieldTitle]}>
                Bio
              </Text>
            </View>
            <View style={styles.joinedOnTextBg} />
            <TextInput
              style={styles.fieldValue}
              value={bio}
              onChangeText={(text) => setBio(text)}
            >
            </TextInput>
          </View>

          {/* Work */}
          <View style={styles.fieldBox}>
            <View style={styles.fieldTitleParentWork}>
              <View style={styles.fieldTitleBgLayout} />
              <Text style={styles.fieldTitle}>
                Work
              </Text>
            </View>
            <View style={styles.joinedOnTextBg} />
            <TextInput
              style={styles.fieldValue}
              value={work}
              onChangeText={text => setWork(text)}
            >
            </TextInput>
          </View>

          {/* Location */}
          <View style={styles.fieldBox}>
            <View style={styles.fieldTitleParentLocation}>
              <View style={styles.fieldTitleBgLayout} />
              <Text style={styles.fieldTitle}>
                Location
              </Text>
            </View>
            <View style={styles.joinedOnTextBg} />
            <TextInput
              style={styles.fieldValue}
              value={location}
              onChangeText={text => setLocation(text)}
            >
            </TextInput>
          </View>
          
          {/* Email */}
          <View style={styles.fieldBox}>
            <View style={styles.fieldTitleParentEmail}>
              <View style={styles.fieldTitleBgLayout} />
              <Text style={styles.fieldTitle}>
                Email
              </Text>
            </View>
            <View style={styles.joinedOnTextBg} />
            <TextInput
              style={styles.fieldValue}
              value={email}
              onChangeText={text => setEmail(text)}
            >
            </TextInput>
          </View>
        
          {/* <View style={[styles.profilePic, styles.profilePicLayout]}>
            <View style={[styles.profileImageBg, styles.bioLayout]} />
            <Text style={styles.noFileChosen}>No file chosen</Text>
            <View style={[styles.chooseFileBtn, styles.chooseLayout]}>
              <View style={[styles.chooseFileBg, styles.chooseLayout]} />
              <Text style={[styles.chooseFile, styles.chooseFileTypo]}>
                Choose file
              </Text>
            </View>
            <View
              style={[
                styles.profileSpan,
                styles.spanLayout,
                styles.profileLayout,
              ]}
            >
              <View
                style={[
                  styles.profilePicBg,
                  styles.bioBgLayout,
                  styles.profileLayout,
                ]}
              />
              <Text
                style={[
                  styles.profileImage,
                  styles.bio1Typo,
                  styles.profileLayout,
                ]}
              >
                Profile Image
              </Text>
            </View>
          </View> */}
        
          {/* Save Button */}
          <View style={[styles.saveBtn, styles.btnLayout]}>
            <LinearGradient
              style={[styles.btnBg, styles.btnLayout]}
              start={[0, 0]}
              end={[1, 1]}
              colors={["rgba(14, 215, 191, 0.6)", "rgba(0, 70, 111, 1)"]}
            />
            <TouchableOpacity
              style={styles.save}
              onPress={handleSubmit}
            >
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Delete Profile */}
        <View style={styles.deleteProfile}>
        <Image source={require('../assets/logo/DeleteProfile.png')} style={{
          width: 304,
          height: 48,
          position: 'absolute',
          top: -32,
          left: 40,
          zIndex: 5
        }}/>
          <LinearGradient 
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={["rgba(14, 215, 191, 0.5)", "rgba(0, 70, 111, 0.4)"]}
            style={styles.bgDelete}
          />
          <Text style={[styles.delete, styles.shadow]}>Warning : Please perform this action with caution. Once your profile is deleted all the profile data is gone and can not be recovered.</Text>
          {/* Delete Button */}
          <View style={styles.deletebtnLayout}>
            <LinearGradient
              style={[styles.btnBg, styles.deletebtnLayout]}
              start={[0, 0]}
              end={[1, 1]}
              colors={["rgba(255, 0, 0, 1)", "rgba(164, 6, 6, 1)"]}
            />
            <Pressable
              style={styles.deleteBtnPress}
              onPress={() => navigation.navigate("Profile")}
            >
              <Text style={[styles.deleteText, styles.shadow]}>Delete Profile</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  editProfile: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 100,
  },
  profileBox: {
    width: 380,
    height: 550,
    backgroundColor: '#000',
    marginTop: 40,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    borderRadius: GlobalStyles.Border.br_sm,
    flexDirection: 'column',
  },
  bg: {
    position: 'absolute',
    height: 560,
    width: 380,
    borderRadius: GlobalStyles.Border.br_sm,
    top: 0,
  },
  profileIcon: {
    alignSelf: 'center',
  },
  username: {
    fontSize: GlobalStyles.FontSize.size_7xl,
    color: GlobalStyles.Color.white,
    alignSelf: 'center',
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
  },
  deleteProfile: {
    width: 380,
    marginTop: 60,
  },
  delete: {
    marginTop: 25,
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
  fieldTitleParent: {
    width: 38,
    bottom: 12,
    left: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  fieldTitleParentWork: {
    width: 54,
    bottom: 12,
    left: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  fieldTitleParentLocation: {
    width: 82,
    bottom: 12,
    left: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  fieldTitleParentEmail: {
    width: 60,
    left: 20,
    bottom: 12,
    borderWidth: 1,
    borderRadius: 5,
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
  saveText: {
    fontSize: GlobalStyles.FontSize.size_3xl,
    color: GlobalStyles.Color.white,
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
  deleteProfile: {
    width: 380,
    height: 260,
    backgroundColor: GlobalStyles.Color.gray_700,
    top: 50,
    marginLeft: 20,
  },
  delete: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_3xl,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    padding: 12,
    marginTop: 10,
  },
  bgDelete: {
    width: 380,
    height: 180,
    position: 'absolute',
    top: 0,
    borderRadius: 5,
  },
  deletebtnLayout: {
    width: 150,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  deleteText: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_3xl,
    fontFamily: GlobalStyles.FontFamily.hammersmithOne,
    // top: -15,
  },
});

export default EditProfile;
