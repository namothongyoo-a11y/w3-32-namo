import { View,Text,Button,StyleSheet,TextInput} from "react-native";
import { useState } from "react";

export default function Potential(){

    const[area, setArea] = useState(0)
    const [m, setWidth] = useState(0)
    const [h, setLength] = useState(0)

    function rectangleCal (){
            var result = m * 9.8 * h
            setArea(result)
        
    }

    return(
            <View style={styles.box}>
                <Text style={styles.textTitle}>คำนวณพื้นที่สี่เหลียม</Text>
                <Text></Text>
                {/* <Button title="ไปหน้า 2"/> */}
    
                <Text> มวล คือ {m} ซม. </Text>
                <Text>ความสูง คือ {h} ซม </Text>
                <Text> พลังงานศักโน้มถ่วง {area} ตร.ซม. </Text>
                <TextInput 
                style={styles.TextInput} 
                placeholder="กรอกความกว้าง" 
                placeholderTextColor="gray"
                value={m.toString()}
                onChangeText={(w) => setWidth(Number (w))}/>
    
    
                <TextInput 
                style={styles.TextInput}
                 placeholder="กรอกความยาว" 
                 placeholderTextColor="gray"
                 value={h.toString()}
                 onChangeText={(l) => setLength(Number (l))}/>
                 
                <Button title="คำนวณ" onPress={() => rectangleCal()}/>
    
                   
        </View>
    )


        
    }
    const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: "green",
        justifyContent:"center",
        alignItems:"center",
        gap:20

    },
    textTitle:{
        fontSize:22,
        fontWeight:"700",
        color:"white"

    },
    TextInput:{
        borderWidth:1,
        borderColor:"white",
        width:"80%",
        borderRadius:10
    }

})