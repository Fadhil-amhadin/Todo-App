import React from 'react';
import { API } from '../config/api';
import taskStyles from './taskStyles';
import { useMutation } from 'react-query';
import { Text, View, TouchableOpacity, Image } from 'react-native';

const Task = (props) => {
    // ==================== edit ==================== //
    const handleDone = useMutation(async (e) => {
        try {
            const body = JSON.stringify({status: "done"})
            const config = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body
            }
            const response = await API().patch(`/tasks/${e}`, config)
            props.navigation.replace("Home")
            return
        } catch (error) {
            console.log(error)
        }
    })
    // ==================== delete ==================== //
    const handleDelete = useMutation(async (e) => {
        try {
            const config = {
                method: "DELETE",
            }
            const response = await API().delete(`/tasks/${e}`, config)
            props.navigation.replace("Home")
            return
        } catch (error) {
            console.log(error)
        }
    })
    return(
        <View style={taskStyles.item}>
            <TouchableOpacity style={taskStyles.bullet} onPress={() => props.navigation.navigate("Detail", {id: props.id})}></TouchableOpacity>
            <Text style={props.status === "done" ? taskStyles.textDone : taskStyles.textItem}>{props.desc}</Text>
            <View style={taskStyles.btnCont}>
                {props.status === "not done" ? <TouchableOpacity style={taskStyles.done} onPress={() => handleDone.mutate(props.id)}>
                    <Image style={taskStyles.imageBtn} source={require("../assets/done-btn.png")}/>
                </TouchableOpacity> : null}
                <TouchableOpacity style={taskStyles.delete} onPress={() => handleDelete.mutate(props.id)}>
                    <Image style={taskStyles.imageBtn} source={require("../assets/delete-btn.png")}/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Task