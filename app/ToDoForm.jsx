import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from './App'

const ToDoForm = () => {
  return (
    <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
        />
        <Button title="Add" />
      </View>
  )
}

export default ToDoForm

//const styles = StyleSheet.create({})