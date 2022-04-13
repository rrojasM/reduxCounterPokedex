import React from 'react';
import { Text, View , StyleSheet } from 'react-native';
import { useAppSelector } from '../app/hooks';


const Counter = () => {
    const counterValue = useAppSelector(state => state.counter.value);
    return (
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:30, fontWeight:'bold'}}>Counter</Text>
            <Text style={{fontSize:60, color:'green', fontWeight:'bold'}}>{counterValue}</Text>
        </View>
    )
}

export default Counter;