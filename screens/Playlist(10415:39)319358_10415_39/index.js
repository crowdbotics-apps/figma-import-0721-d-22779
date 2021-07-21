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
      <View style={styles.View_10415_40}>
        <View style={styles.View_10415_57}>
          <Text style={styles.Text_10415_57}>The Bravo Mix</Text>
        </View>
        <View style={styles.View_10415_58}>
          <Text style={styles.Text_10415_58}>Bravo Team</Text>
        </View>
        <View style={styles.View_10415_59}>
          <Text style={styles.Text_10415_59}>3h 45m</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_10415_60}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10415_20"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac14/445e/bb5770ac13a0db3d055130c5557d2b83"
            }}
            style={styles.ImageBackground_10415_61}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d755/904d/a2a72a1e7c6a26579fd1681000389f9b"
            }}
            style={styles.ImageBackground_10415_62}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10415_63}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10415_20"))
          }
        >
          <View style={styles.View_10415_64}>
            <Text style={styles.Text_10415_64}>Entrepreneur (feat. Jay-Z)</Text>
          </View>
          <View style={styles.View_10415_65}>
            <Text style={styles.Text_10415_65}>Pharrell Williams, Jay-Z</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e62f/343f/4a92950b105b38bd08cfd1fe854c19de"
            }}
            style={styles.ImageBackground_10415_66}
          />
        </TouchableOpacity>
        <View style={styles.View_10415_67}>
          <View style={styles.View_10415_68}>
            <Text style={styles.Text_10415_68}>Don’t Go Bacon My Heart</Text>
          </View>
          <View style={styles.View_10415_69}>
            <Text style={styles.Text_10415_69}>Elton John</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b6c/02b4/700d1f2a39d1f8e325a13947d1a066fd"
            }}
            style={styles.ImageBackground_10415_70}
          />
        </View>
        <View style={styles.View_10415_71}>
          <View style={styles.View_I10415_71_10415_68}>
            <Text style={styles.Text_I10415_71_10415_68}>Chips Don’t Lie</Text>
          </View>
          <View style={styles.View_I10415_71_10415_69}>
            <Text style={styles.Text_I10415_71_10415_69}>Shakira</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b6c/02b4/700d1f2a39d1f8e325a13947d1a066fd"
            }}
            style={styles.ImageBackground_I10415_71_10415_70}
          />
        </View>
        <View style={styles.View_10415_72}>
          <View style={styles.View_I10415_72_10415_68}>
            <Text style={styles.Text_I10415_72_10415_68}>The Onion Song</Text>
          </View>
          <View style={styles.View_I10415_72_10415_69}>
            <Text style={styles.Text_I10415_72_10415_69}>
              Marvin Gaye, Tammi Terrell
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b6c/02b4/700d1f2a39d1f8e325a13947d1a066fd"
            }}
            style={styles.ImageBackground_I10415_72_10415_70}
          />
        </View>
        <View style={styles.View_10415_73}>
          <View style={styles.View_I10415_73_10415_68}>
            <Text style={styles.Text_I10415_73_10415_68}>Wok This Way</Text>
          </View>
          <View style={styles.View_I10415_73_10415_69}>
            <Text style={styles.Text_I10415_73_10415_69}>Aerosmith</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b6c/02b4/700d1f2a39d1f8e325a13947d1a066fd"
            }}
            style={styles.ImageBackground_I10415_73_10415_70}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a66/944e/ed7298fbef8d25fd1a7bbbe60000c728"
          }}
          style={styles.ImageBackground_10415_74}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/777e/faf5/e7311d3a6c65634d4f77cdf9b204695c"
          }}
          style={styles.ImageBackground_10415_75}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8de6/dac8/5c6a7a90e1c2322091174904b48de7f0"
          }}
          style={styles.ImageBackground_10415_76}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fb3/7576/cfb30bd509dbca89ac5d86611a9b4699"
          }}
          style={styles.ImageBackground_10415_77}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("110.92896174863387%") },
  View_10415_40: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10415_57: {
    width: wp("41.333333333333336%"),
    minWidth: wp("41.333333333333336%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("43.85245901639344%"),
    justifyContent: "flex-end"
  },
  Text_10415_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10415_58: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("48.77049180327869%"),
    justifyContent: "flex-end"
  },
  Text_10415_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10415_59: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("52.18579234972678%"),
    justifyContent: "flex-end"
  },
  Text_10415_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_10415_60: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("44.94535519125683%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10415_61: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10415_62: {
    width: wp("5.171852620442708%"),
    height: hp("3.351455698899233%"),
    top: hp("2.9690810240031595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333323%")
  },
  TouchableOpacity_10415_63: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("58.879781420765035%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10415_64: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-end"
  },
  Text_10415_64: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10415_65: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("3.6885245901639294%"),
    justifyContent: "flex-end"
  },
  Text_10415_65: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10415_66: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10415_67: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("67.75956284153006%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10415_68: {
    flexGrow: 1,
    width: wp("46.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-end"
  },
  Text_10415_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10415_69: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-end"
  },
  Text_10415_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10415_70: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10415_71: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("76.63934426229508%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10415_71_10415_68: {
    flexGrow: 1,
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-end"
  },
  Text_I10415_71_10415_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10415_71_10415_69: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-end"
  },
  Text_I10415_71_10415_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I10415_71_10415_70: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10415_72: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("94.39890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10415_72_10415_68: {
    flexGrow: 1,
    width: wp("29.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-end"
  },
  Text_I10415_72_10415_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10415_72_10415_69: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-end"
  },
  Text_I10415_72_10415_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I10415_72_10415_70: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10415_73: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("85.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10415_73_10415_68: {
    flexGrow: 1,
    width: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-end"
  },
  Text_I10415_73_10415_68: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10415_73_10415_69: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-end"
  },
  Text_I10415_73_10415_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I10415_73_10415_70: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_10415_74: {
    width: wp("61.06666666666667%"),
    minWidth: wp("61.06666666666667%"),
    height: hp("31.284153005464482%"),
    minHeight: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.466666666666665%"),
    top: hp("8.333333333333332%"),
    resizeMode: "cover"
  },
  ImageBackground_10415_75: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("85.51912568306011%"),
    resizeMode: "cover"
  },
  ImageBackground_10415_76: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("94.39890710382514%"),
    resizeMode: "cover"
  },
  ImageBackground_10415_77: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("76.63934426229508%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
