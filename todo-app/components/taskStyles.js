import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    item: {
        backgroundColor: "white",
        margin: 10,
        height: 60,
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textDone: {
        flex: 1,
        fontSize: 20,
        alignSelf: "center",
        color: "grey",
        textDecorationLine: "line-through"
    },
    textItem: {
        flex: 1,
        fontSize: 20,
        alignSelf: "center"
    },
    bullet: {
        width: 20,
        height:20,
        backgroundColor: "aqua",
        borderWidth: 5,
        borderColor: "grey",
        borderRadius: 15,
        alignSelf: "center",
        margin: 5
    },
    btnCont: {
        alignSelf: "center",
        flexDirection: "row"
    },
    done: {
        width: 30,
        height: 30,
        borderRadius: 5,
        alignSelf: "center",
        margin: 5
    },
    delete: {
        width: 30,
        height: 30,
        backgroundColor: "red",
        borderRadius: 5,
        alignSelf: "center",
        margin: 5
    },
    imageBtn: {
        width: 30,
        height: 30
    },
})