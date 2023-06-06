import { StyleSheet, Text } from "react-native";


export default function Texto({ children, style }){   
    let estiloAtual = estilo.texto
    if(style?.fontWeight === 'bold') 
        estiloAtual = estilo.textoNegrito
    
    return(    
        <Text style={ [ style, estiloAtual] } >{children}</Text>
    )
}

const estilo = StyleSheet.create({
    texto:{
        fontFamily: "MontserratRegular",
        fontWeight: 'normal'
    },
    textoNegrito:{
        fontFamily: "MontserratBold",
        fontWeight: 'normal'
    }
})