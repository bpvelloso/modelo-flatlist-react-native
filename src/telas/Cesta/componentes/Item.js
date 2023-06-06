import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";


export default function Item({item:{nome,imagem}}) {
    console.log(">>"+nome)
    return <View style={estilos.item}>
            <Image style={estilos.imagemItem} source={imagem} />
            <Texto style={estilos.textoItem}>{nome}</Texto>   
        </View>
}


const estilos = StyleSheet.create({
    
    imagemItem:{
        width: 45,
        height: 45,
        marginLeft: 35
    },
    textoItem:{
        fontWeight:'bold',
        fontSize: 16,
        lineHeight: 32,
        marginLeft: 32,
        color: "#565656"
    },
    item:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ececec',
        paddingVertical: 16,
        alignItems: "center"
    }
})