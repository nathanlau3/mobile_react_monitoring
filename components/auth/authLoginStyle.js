import { StyleSheet } from "react-native";
import { COLORS, icons, SIZES } from '../../constants';

const styles = StyleSheet.create({
    logoContainer: {
        marginBottom: 50,
        width: 250,
        height: 250,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      },
})

export default styles;