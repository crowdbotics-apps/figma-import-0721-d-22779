import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_10416_89}>
        <View style={styles.View_10416_90} />
        <View style={styles.View_10416_91}>
          <Text style={styles.Text_10416_91}>Brandon Robertson</Text>
        </View>
        <View style={styles.View_10416_92}>
          <Text style={styles.Text_10416_92}>Points to discuss</Text>
        </View>
        <View style={styles.View_10416_93}>
          <Text style={styles.Text_10416_93}>11:30 - 12:30</Text>
        </View>
        <View style={styles.View_10416_94}>
          <Text style={styles.Text_10416_94}>25/02/2020</Text>
        </View>
        <View style={styles.View_10416_95}>
          <Text style={styles.Text_10416_95}>
            Carrer de Corsega 24, Barcelona
          </Text>
        </View>
        <View style={styles.View_10416_96}>
          <Text style={styles.Text_10416_96}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            ipsum id tellus aliquam libero ullamcorper suspendisse. Sed elit
            tempor, augue enim. Nec velit aliquam varius sem egestas felis sit.
            Sem ut at amet, tincidunt.
          </Text>
        </View>
        <View style={styles.View_10416_97}>
          <Text style={styles.Text_10416_97}>Create Tutorial Videos</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8da/dd23/06630318531755189cdd21f66f55fcda"
          }}
          style={styles.ImageBackground_10416_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55d3/656e/a3fce5763653b3a183225b28a585a026"
          }}
          style={styles.ImageBackground_10416_99}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17f0/4b17/e41fee34999421ca9247ddfac0533a8e"
          }}
          style={styles.ImageBackground_10416_100}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7727/75ae/7d0d13bf5dfb97b7d877174a3475b144"
          }}
          style={styles.ImageBackground_10416_101}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a7e/73a9/99f3017516f7072b4f43a70c13591524"
          }}
          style={styles.TouchableOpacity_10416_102}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10416_39"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 246, 241, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_10416_89: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("94.26229508196722%"),
    minHeight: hp("94.26229508196722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10416_90: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.07103825136612%"),
    minHeight: hp("39.07103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(136, 177, 216, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34
  },
  View_10416_91: {
    width: wp("54.93333333333334%"),
    minWidth: wp("54.93333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("31.557377049180328%"),
    justifyContent: "flex-start"
  },
  Text_10416_91: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_92: {
    width: wp("54.93333333333334%"),
    minWidth: wp("54.93333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("67.21311475409836%"),
    justifyContent: "flex-start"
  },
  Text_10416_92: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_93: {
    width: wp("54.93333333333334%"),
    minWidth: wp("54.93333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("42.89617486338798%"),
    justifyContent: "flex-start"
  },
  Text_10416_93: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_94: {
    width: wp("54.93333333333334%"),
    minWidth: wp("54.93333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("48.63387978142077%"),
    justifyContent: "flex-start"
  },
  Text_10416_94: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_95: {
    width: wp("69.33333333333334%"),
    minWidth: wp("69.33333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("54.37158469945356%"),
    justifyContent: "flex-start"
  },
  Text_10416_95: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_96: {
    width: wp("86.4%"),
    minWidth: wp("86.4%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("71.99453551912568%"),
    justifyContent: "flex-start"
  },
  Text_10416_96: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10416_97: {
    width: wp("90.93333333333334%"),
    minWidth: wp("90.93333333333334%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("18.71584699453552%"),
    justifyContent: "flex-end"
  },
  Text_10416_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10416_98: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("42.89617486338798%")
  },
  ImageBackground_10416_99: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("48.63387978142077%")
  },
  ImageBackground_10416_100: {
    width: wp("4.875%"),
    minWidth: wp("4.875%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.429166666666667%"),
    top: hp("53.96174863387978%")
  },
  ImageBackground_10416_101: {
    width: wp("84.53333333333333%"),
    minWidth: wp("84.53333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("63.387978142076506%")
  },
  TouchableOpacity_10416_102: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
