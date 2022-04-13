import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useAppDispatch } from '../app/hooks';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';


const ButtonRedux = () => {

    const dispatch = useAppDispatch();

    return (
        <>
            <TouchableOpacity
                onPress={() => dispatch(increment())}
                style={{
                    backgroundColor: '#000',
                    padding: 10,
                    borderRadius: 5,
                    margin: 10
                }}
            >
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF' }}>Increment</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => dispatch(decrement())}
                style={{
                    backgroundColor: '#29938d',
                    padding: 10,
                    borderRadius: 5,
                    margin: 10
                }}
            >
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF' }}>Decrement</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => dispatch(incrementByAmount(10))}
                style={{
                    backgroundColor: '#29938d',
                    padding: 10,
                    borderRadius: 5,
                    margin: 10
                }}
            >
                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF' }}>Add 10</Text>
            </TouchableOpacity>
        </>
    )
}

export default ButtonRedux

const styles = StyleSheet.create({})