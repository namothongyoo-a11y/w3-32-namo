 import { View,Text,Button,StyleSheet,TextInput} from "react-native";
import { useState } from "react";

export default function Rectangle(){

//พท.สี่เหลียม = กว้าง * ยาว
//      60 = 6 * 10
//  Output = Input * Input 

    const[area, setArea] = useState(0)//  area = 20, setArea(20)
    const [width, setWidth] = useState(0)
    const [length, setLength] = useState(0)

    function rectangleCal (){
            var result = width * length
            setArea(result)
        
    }

    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>คำนวณพื้นที่สี่เหลียม</Text>
            <Text></Text>
            {/* <Button title="ไปหน้า 2"/> */}

            <Text>ความกว้าง คือ {width} ซม. </Text>
            <Text>ความกยาว คือ {length} ซม </Text>
            <Text> พื้นที่สี่เหลียม {area} ตร.ซม. </Text>
            <TextInput 
            style={styles.TextInput} 
            placeholder="กรอกความกว้าง" 
            placeholderTextColor="gray"
            value={width.toString()}
            onChangeText={(w) => setWidth(Number (w))}/>


            <TextInput 
            style={styles.TextInput}
             placeholder="กรอกความยาว" 
             placeholderTextColor="gray"
             value={length.toString()}
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