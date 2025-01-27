import {
    Text,
    View,
    Image,
    StyleSheet,
    Pressable,
    ScrollView    
} from 'react-native';

import  {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {colors} from '../../constants/colors'
import { Header } from '../../components/header';
import {Input} from '../../components/input/index';

export default function Create(){
    return(
        <View style= {styles.basic}>

            <Header
                step='Passo2'
                title='Finalizando dieta'
            />

        </View>
    );
}

const styles = StyleSheet.create({
    basic:{
        backgroundColor: colors.background,
        flex: 1
    },
})