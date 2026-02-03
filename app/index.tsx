import { View,Text,Button,StyleSheet} from "react-native";
import { useRouter } from "expo-router";
export default function App(){
    const router =useRouter()

    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>HOME</Text>
            <Text></Text>
            <Button title="ไปหน้า คำนวณพื่นที่สี่เหลี่ยม" onPress={() => router.navigate('/rectangle')}/>
             <Button title="ไปหน้า คำนวณพลังงานศักโน้มถ่วง" onPress={() => router.navigate('/Potential')}/>
    </View>
    )

}
const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: "black",
        justifyContent:"center",
        alignItems:"center"
    },
    textTitle:{
        fontSize:22,
        fontWeight:"700",
        color:"white"

    }

})