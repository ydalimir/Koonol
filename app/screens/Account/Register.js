import React, { useRef } from "react";
import { StyleSheet, View, Image} from "react-native";
import RegisterForm from "../../components/Account/RegisterForm";
import Toast from "react-native-easy-toast";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'




export default function Register() {

  const toastRef = useRef();
 

  return (
    <KeyboardAwareScrollView style={styles.backgroundblanco}>
      <Image
        source={require("../../../assets/img/registrarimg.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewForm}>
      <RegisterForm toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9} />
  
    
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
  backgroundblanco:{
    backgroundColor:"#FFFFFF",
  }
});
