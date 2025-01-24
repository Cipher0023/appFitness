import { Text, View, Image, StyleSheet, Pressable, ScrollView} from "react-native";
import {colors} from '../../constants/colors'
import { Header } from '../../components/header';
import {Input} from '../../components/input/index';

import  {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'


const schema = z.object({
    name: z.string().min(1, { message: "O nome é obrigatório"}),
    weight: z.string().min(1, { message: "O peso é obrigatório"}),
    height: z.string().min(1, { message: "A altura é obrigatória"}),
    age: z.string().min(1, { message: "A idade é obrigatória"}),
})

type FormData = z.infer<typeof schema>


export default function Step(){

    const {control, handleSubmit, formState: {errors, isValid}} = useForm <FormData> ({
        resolver: zodResolver(schema)
    })

    return(

        <View style= {styles.basic}>
            <Header
                step='Step 1'
                title='Vamos começar'
            />

            <ScrollView style= {styles.content}>
                <Text style= {styles.label}>Nome:</Text>

                <Input
                    name="name"
                    control={control}
                    placeholder="digite seu nome..."
                    error={errors.name?.message}
                    keyboardType="default"
                />

                <Text style= {styles.label}>Idade:</Text>

                <Input
                    name="age"
                    control={control}
                    placeholder="ex: 18"
                    error={errors.weight?.message}
                    keyboardType="default"
                />

                <Text style= {styles.label}>Altura:</Text>

                <Input
                    name="height"
                    control={control}
                    placeholder="ex 1.80"
                    error={errors.height?.message}
                    keyboardType="default"
                />

                <Text style= {styles.label}>Peso:</Text>

                <Input
                    name="weight"
                    control={control}
                    placeholder="ex: 78"
                    error={errors.weight?.message}
                    keyboardType="default"
                />

                <Pressable style= {styles.button}>
                    <Text style= {styles.buttonText}>Avançar</Text>
                </Pressable>

                

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    basic:{
        backgroundColor: colors.background,
        flex: 1
    },
    content:{
        paddingLeft: 16,
        paddingRight: 16,
    },
    label:{
        fontSize:16,
        fontWeight:'bold',
        color: colors.white,
        marginBottom: 8
    },
    button:{
        backgroundColor: colors.blue,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 16
    },
    buttonText:{
        color: colors.white,
        fontSize:20,
        fontWeight: 'bold'
    }
})