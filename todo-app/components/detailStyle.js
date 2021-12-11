import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    detailContainer: {
        backgroundColor: "#dfd4ca",
        height: "100%"
    },
    taskDescription: {
        padding: 10
    },
    taskDescTitle: {
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
        marginVertical: "5%"
    },
    taskBox: {
        backgroundColor: "whitesmoke",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginBottom: "5%"
    },
    taskDescContent: {
        fontSize: 22,
        fontWeight: "bold"
    },

    taskStatus: {
        padding: 10,
        justifyContent: "space-between"
    },
    statusTitle: {
        fontSize: 17,
        fontWeight: "bold",
        alignSelf: "center"
    },
    statusValue: {
        fontSize: 15,
        fontWeight: "bold",
        alignSelf: "center"
    },
    taskStatusDone: {
        backgroundColor: "lightgreen",
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginBottom: "5%"
    },
    taskStatusNotDone: {
        backgroundColor: "#ffcccb",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginBottom: "5%"
    },
    taskCreated: {
        backgroundColor: "lightblue",
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginBottom: "5%"
    },
    createdText: {
        fontSize: 15,
        fontWeight: "bold"
    },  
    taskDone: {
        backgroundColor: "lightblue",
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginBottom: "5%"
    },
    doneText: {
        fontSize: 15,
        fontWeight: "bold"
    },  

    actionDetail: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 5
    },
    doneActionDetail: {
        backgroundColor: "lime",
        borderRightColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
        padding: 5
    },
    backActionDetail: {
        backgroundColor: "aqua",
        padding: 5,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5
    },
    doneTextBtn: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 5
    },
    backTextBtn: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 5
    }
})