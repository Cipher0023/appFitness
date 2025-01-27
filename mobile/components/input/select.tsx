import{
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import {Controller} from 'react-hook-form'
import {colors} from '../../constants/colors'
import React from 'react';

interface OptionsProps{
    label: string;
    value: string|number;
}

interface SelectProps{
    name: string;
    control: any;
    placeholder?: string;
    error?: string;
    options: OptionsProps[]
}

export function Select({name,control,placeholder,error,options}: SelectProps){
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}

                render={({field:{onChange, onBlur, value }})=>(
                    <>
                        <TouchableOpacity>
                            Selecione algo...
                        </TouchableOpacity>
                    </>
                )}
            />

            {error && <Text style= {styles.errorText} > {error}</Text>}
        </View>
    )
}

const styles =StyleSheet.create({

    container:{
        marginBottom: 16,
        marginTop: 0

    },
    input:{
        height: 44,
        backgroundColor: colors.white,
        borderRadius:10
    },
    errorText:{
        color: 'red',
        marginTop: 4,
    }


})