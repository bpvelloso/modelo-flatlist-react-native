import { TouchableOpacity, Image, StyleSheet, View } from "react-native"
import Texto from "../../../componentes/Texto"
import Botao from "../../../componentes/Botao"


export default function Detalhes({detalhes}) {
    
    return(
        <>
            <Texto style={estilos.nome}>{detalhes.nome}</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={detalhes.imagem} />
                <Texto style={estilos.nomeFazenda}>{detalhes.nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{detalhes.descricao}</Texto>
            <Texto style={estilos.preco}>{detalhes.preco}</Texto>
            <Botao label={detalhes.acao} />
        </>
    )
}

const estilos = StyleSheet.create({
    fazenda:{
        paddingVertical: 12,
        flexDirection: 'row'
    },
    imagemFazenda:{
        width:32,
        height:32
    },
    nome:{
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold'

    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 24,
        marginLeft: 10
    },
    descricao:{
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    preco:{
        color:'#2a9f85',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: 'bold'
    }
  
})