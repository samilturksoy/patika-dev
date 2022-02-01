import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#EEE",
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        flex: 1
    },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height/4,
        borderRadius:10,
        maxWidth:"100%",
        maxHeight:"100%"

    },
    title:{
        fontWeight:"bold",
        color:"black",
        paddingVertical: 5,
      },
      inStockTitle:{
        color:"red",
        fontWeight:"bold"
      }
})