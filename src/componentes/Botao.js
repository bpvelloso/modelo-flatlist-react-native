import { StyleSheet, TouchableOpacity } from "react-native"
import Texto from "./Texto"

export default function Botao({label, onPress, style, styleTexto}) {
   
    if(!onPress) onPress = () => {console.log("NAC")}
    styleTexto = styleTexto? {...styleTexto, ...estilos.textoBotao}:estilos.textoBotao
    
    return(
        <TouchableOpacity style={[style, estilos.botao]} onPress={(evento=>onPress(evento))}>
            <Texto style={styleTexto}>{label}</Texto>
        </TouchableOpacity> 
    )
    
}

const estilos = StyleSheet.create({
    botao:{
        marginTop: 16,
        backgroundColor: "#2a9f85",
        paddingVertical: 25,
        borderRadius: 6
    },
    textoBotao:{
        textAlign:"center",
        color: "white",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
})