import{
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
    Modal
} from 'react-native';
import {Controller} from 'react-hook-form'
import {colors} from '../../constants/colors'
import React from 'react';
import {Feather} from '@expo/vector-icons'




interface OptionProps{
    label:string;
    value:string|number
}
interface SelectProps{
    name: string;
    control: any;
    placeholder?: string;
    error?: string;
    options: OptionProps[]
}

export function Select({name,control,placeholder,error,options}: SelectProps){
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name={name}

                render={({field:{onChange, onBlur, value }})=>(
                    <>
                        <TouchableOpacity style={styles.select}>
                            <Text>teste</Text>
                            <Feather name="arrow-down" size={16} collor="#000"/>
                        </TouchableOpacity>

                        <Modal
                            visible ={true}
                            animationType="fade"
                            transparent={true}
                            onRequestClose={()=> {}}
                        >

                            <TouchableOpacity 
                                style={styles.modalContainer}
                                activeOpacity={1}
                            >
                                <TouchableOpacity style={styles.modalContainer}>
                                    <FlatList
                                        contentContainerStyle={{ gap: 4}}
                                        data={options}
                                        keyExtractor={(item) => item.value.toString()}
                                        renderItem={({item}) => (
                                            <TouchableOpacity style={styles.option} >
                                                <Text>{item.label}</Text>
                                            </TouchableOpacity>
                                        )}
                                    />
                                    
                                </TouchableOpacity>


                            </TouchableOpacity>



                        </Modal>
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
    },
    select:{
        flexDirection: 'row',
        height:44,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        borderRadius:10

    },
    modalContainer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        flex:1,
        justifyContent:'center'
    },
    modalContent:{
        backgroundColor: colors.white,
        marginHorizontal:10,
        borderRadius:8,
        padding:20,
    },
    option:{
        paddingVertical:14,
        backgroundColor: 'rgba(208,208,208,0.40)',
        borderRadius: 4,
        paddingHorizontal:8,
        
    }


})