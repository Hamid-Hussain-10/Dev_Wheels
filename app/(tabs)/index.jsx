import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imgcontainer}>
        <ImageBackground
          source={require("../../assets/images/circle.png")}
          style={styles.circle}
          resizeMode="contain"
        >
        </ImageBackground>
          <Image
            source={require("../../assets/images/img2.png")}
            style={styles.img2}
            resizeMode="contain"
          />
        <View style={styles.textstyle}>
          <Text style={styles.text}>Let`s</Text>
          <Text style={styles.text}>Get started</Text>
        </View>
      </View>
      <View style={styles.loadercontainer}>
        <ActivityIndicator size="large" color="#fcb900" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#057c97",
  },
  imgcontainer: {
    width: "150%",
    height: "50%",
    borderBottomLeftRadius: "50%",
    borderBottomRightRadius: "50%",
    borderBottomWidth: 8,
    BorderBottomColor: "#000",
    backgroundColor: "#fcb900",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  circle: {
    width: "90%",
    height: "80%",
    position: "absolute",
    top: 80,
    left: 20,
  },
  img2: {
    width: "70%",
    height: "70%",
    position: "absolute",
    top: 100,
    left: 50,
  },
  textstyle: {
    paddingTop: 50,
    position: "absolute",
    top: "110%",
    left: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "sans-serif",
  },
  loadercontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
});
