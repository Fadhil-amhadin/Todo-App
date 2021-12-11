import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#e8e1da"
    },
    taskWrapper: {
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "5%"
    },
    imageEmpty: {
        marginTop: "10%",
        alignSelf: "center"
    },
    items: {
        marginTop: "5%"
    },
    inputWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 10
    },
    inputTask: {
        width: "80%",
        padding: 5,
        margin: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "white"
    },
    addTask: {
        width: 52,
        height: 40,
        backgroundColor: "lime",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 2
    },
    addTaskFont: {
        fontSize: 20,
    }
  });
  