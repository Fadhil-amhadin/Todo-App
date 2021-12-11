import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { API } from '../config/api';
import styles from './styles';
import Task from './Task';
import { Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';

export default function Main({navigation}) {
    const [task, setTask] = useState({
      description: "",
      status: "not done"
    })
  
    const handleAddTask = useMutation(async () => {
      try {
          const body = JSON.stringify(task)
          const config = {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body
          }
          const response = await API().post('/tasks', config)
          if(response.status === "success"){
              console.log("success")
              setTask({
                  description: "",
                  status: "not done"
              })
              navigation.replace("Home")
          }else{
              console.log("failed")
          }
        } catch (error) {
            console.log(error)
        }
    })
  
    const {data: tasks} = useQuery("taskCache", async () => {
      const config = {
          method: "GET"
      }
      const response = await API().get('/tasks', config)
      return response.data
    })
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <View style={styles.taskWrapper}>
          {tasks?.length < 1 ? <Image style={styles.imageEmpty} source={require("../assets/empty-list.png")}/> : null}
          <View style={styles.items}>
            <FlatList
              data={tasks}
              renderItem={({item}) => (
                <Task desc={item.description} status={item.status} id={item.id} navigation={navigation}/>
              )}
            />
          </View>
        </View>
  
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "height" : "padding"}
          style={styles.inputWrapper}>
          <TextInput style={styles.inputTask} placeholder="write a task" value={task.description} onChangeText={text => setTask({...task, description: text})}/>
          <TouchableOpacity style={styles.addTask} onPress={e => handleAddTask.mutate(e)}>
            <Text style={styles.addTaskFont}>Add</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }