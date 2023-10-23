import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image,  
} from "react-native";
import { COLORS, icons, FONT } from "../../../constants";
import { Icon } from "@ant-design/react-native";

export default MainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View style={{flex:1, flexDirection: "column", marginTop: 50, height: 50}}>
        <View style={{ marginTop: 50, width: 50, height: 50, backgroundColor: COLORS.secondary }}>
          <Icon name="bells" size={50}/>
          <Text>Haii</Text>
        </View>
        <Text>Haii</Text>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <View
            style={{
              flex: 1,
              width: 10,
              height: 10,
              backgroundColor: COLORS.primary,
            }}
          ></View>
          <View
            style={{
              marginLeft: "10%",
              top: "5%",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontFamily: FONT.regular,
              }}
            >
              HOME
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
