import React from 'react';
import { API } from '../config/api';
import detailStyle from './detailStyle';
import { dateConvert, timeConvert } from './dateConvert';
import { useQuery, useMutation } from 'react-query';
import { Text, View, TouchableOpacity } from 'react-native';

const Detail = ({route, navigation}) => {
    const {id} = route.params

    // ========== done ========== //
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
            navigation.replace("Detail", {id : e})
            return
        } catch (error) {
            console.log(error)
        }
    })

    const {data: task} = useQuery("detaiTaskCache", async () => {
        const config = {
            method: "GET"
        }
        const response = await API().get(`/tasks/${id}`, config)
        return response.data
    })
    return (
        <View style={detailStyle.detailContainer}>
            <View style={detailStyle.taskDescription}>
                <Text style={detailStyle.taskDescTitle}>Task</Text>
                <View style={detailStyle.taskBox}>
                    <Text style={detailStyle.taskDescContent}>{task?.description}</Text>
                </View>
            </View>
            <View style={detailStyle.taskStatus}>
                <View style={task?.status === "done" ? detailStyle.taskStatusDone : detailStyle.taskStatusNotDone}>
                    <Text style={detailStyle.statusTitle}>Status</Text>
                    <Text style={detailStyle.statusValue}>{task?.status}</Text>
                </View>
                <View style={detailStyle.taskCreated}>
                    <Text style={detailStyle.createdText}>Created at: </Text>
                    <Text style={detailStyle.createdText}>~ {timeConvert(task?.createdAt)}</Text>
                    <Text style={detailStyle.createdText}>~ {dateConvert(task?.createdAt)}</Text>
                </View>
                {task?.status === "done" ?
                <View style={detailStyle.taskDone}>
                    <Text style={detailStyle.doneText}>Done at: </Text>
                    <Text style={detailStyle.doneText}>~ {timeConvert(task?.updatedAt)}</Text>
                    <Text style={detailStyle.doneText}>~ {dateConvert(task?.updatedAt)}</Text>  
                </View>
                : null}
            </View>
            <View style={detailStyle.actionDetail}>
                {task?.status === "not done" ? <TouchableOpacity style={detailStyle.doneActionDetail} onPress={() => handleDone.mutate(id)}><Text style={detailStyle.doneTextBtn}>Done</Text></TouchableOpacity> : null}
                <TouchableOpacity style={detailStyle.backActionDetail} onPress={() => navigation.replace("Home")}><Text style={detailStyle.backTextBtn}>Back</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Detail
