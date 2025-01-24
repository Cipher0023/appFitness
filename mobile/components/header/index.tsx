import { 
    View,Text,
    Image,
    StyleSheet,
    Pressable,
    SafeAreaView,
    Platform,
    StatusBar
} from 'react-native'

import {Feather} from '@expo/vector-icons'
import {colors} from "../../constants/colors"
import {router} from 'expo-router'

interface HeaderProps{
    step: string;
    title: string;
}

export function Header({step,title}: HeaderProps){
    return(

        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.row}>
                    <Pressable onPress={() => router.back()} >
                        <Feather name="arrow-left" size={24} color="#000"/>
                    </Pressable>

                    <Text style={styles.text} >
                        {step}<Feather name="loader" size={16} color="#000"/>
                    </Text>
                </View>

                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius:30,
        marginBottom: 14,
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight! +34 : 34

    },
    content:{
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:35,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius:15,
    },
    row:{
        flexDirection: 'row',
        gap: 8,
        
    },
    text:{
        fontSize: 18
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.background
    }


    
})