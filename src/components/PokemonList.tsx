import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { PokemonClient } from 'pokenode-ts';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setPokemon } from '../features/pokemon/pokemonSlice';
import { increment, decrement, incrementByAmount, decrementByAmount } from '../features/counter/counterSlice';
import Pokemon, { Stats } from '../models/Pokemon';
import Counter from './Counter';
import { Colors } from '../colors';



const PokemonList = () => {


    const dispatch = useAppDispatch();
    const currentPokemon = useAppSelector(state => state.pokemon);
    const counter = useAppSelector(state => state.counter.value);

    useEffect(() => {
        const fetchPokemon = async () => {
            const api = new PokemonClient();
            await api
                .getPokemonById(counter)
                .then(pokemon => {
                    const currentPokemonStats: Stats = {
                        hp: pokemon.stats[0].base_stat,
                        attack: pokemon.stats[1].base_stat,
                        defense: pokemon.stats[2].base_stat,
                        specialAttack: pokemon.stats[3].base_stat,
                        specialDefense: pokemon.stats[4].base_stat,
                        speed: pokemon.stats[5].base_stat
                    };

                    const newPokemon: Pokemon = {
                        id: pokemon.id,
                        name: pokemon.name,
                        image: pokemon?.sprites?.front_default?.toString(),
                        height: pokemon.height,
                        weight: pokemon.weight,
                        type: pokemon?.types[0]?.type?.name?.toString(),
                        move: pokemon?.moves[0]?.move?.name?.toString(),
                        stats: currentPokemonStats,
                        color: pokemon?.types[0]?.type?.name?.toString() === 'grass'
                            ? Colors.grass
                            : pokemon?.types[0]?.type?.name?.toString() === 'fire'
                                ? Colors.fire
                                : Colors.unknown,

                    };

                    dispatch(setPokemon(newPokemon));
                })
                .catch(err => {
                    console.log(err);
                })
        }
        fetchPokemon();

    }, [counter, dispatch]);

    const nextButton = () => {
        dispatch(increment());
    }
    const prevButton = () => {
        dispatch(decrement());
    }

    const incrementByAmountButton = (value: number) => {
        dispatch(incrementByAmount(value));
    }

    const decrementByAmountButton = (value: number) => {
        dispatch(decrementByAmount(value));
    }



    return (
        <>
            <View style={[styles.container, { backgroundColor: currentPokemon.color }]}>
                <StatusBar barStyle={"light-content"} />
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000'}}>{currentPokemon.name.toLocaleUpperCase()}</Text>
                    <Text style={{textAlign:'center', fontSize:18, color:'#5679BC'}}>#{currentPokemon.id}</Text>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={{ uri: currentPokemon.image }}
                    />
                </View>

                <View style={{alignItems:'center', bottom:10}}>
                    <Text style={styles.hp}>HP  {currentPokemon.stats?.hp}</Text>
                    <Text style={styles.hp}>ATTACK {currentPokemon.stats?.attack}</Text>
                    <Text style={styles.hp}>DEFENSE {currentPokemon.stats?.defense}</Text>
                    <Text style={styles.hp}>SPECIAL_ATTACK {currentPokemon.stats?.specialAttack}</Text>
                    <Text style={styles.hp}>SPECIAL_DEFENSE {currentPokemon.stats?.specialDefense}</Text>
                    <Text style={styles.hp}>SPEED {currentPokemon.stats?.speed}</Text>
                </View>

                <ScrollView style={{bottom:10}}>
                    <TouchableOpacity
                        onPress={nextButton}
                        style={{
                            backgroundColor: '#29938d',
                            padding: 10,
                            borderRadius: 5,
                            margin: 10
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF' }}>NextPokemon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={prevButton}
                        style={{
                            backgroundColor: '#29938d',
                            padding: 10,
                            borderRadius: 5,
                            margin: 10
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF' }}>PrevPokemon</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=> incrementByAmountButton(100)}
                        style={{
                            backgroundColor: '#29938d',
                            padding: 10,
                            borderRadius: 5,
                            margin: 10
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF' }}>Increment 100</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=> decrementByAmountButton(100)}
                        style={{
                            backgroundColor: '#29938d',
                            padding: 10,
                            borderRadius: 5,
                            margin: 10
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#FFF' }}>Decrement 100</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </>

    )
}


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: Colors.ice
    },
    hp: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#8384C9'
    }
})

export default PokemonList
