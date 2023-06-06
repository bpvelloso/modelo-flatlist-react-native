import { Dimensions, Image, StyleSheet, Text, ScrollView, View, FlatList } from "react-native";
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import mock from '../../json/dados-cesta.json'
import Itens from "./componentes/Item";
import Texto from "../../componentes/Texto";
import Item from "./componentes/Item";


export default function Cesta() {
    
    return(
        <FlatList 
            data={mock.itens.lista}
            renderItem={Item}
            keyExtractor={item => item.nome}
            ListHeaderComponent={
                    <>
                        <Topo titulo={mock.topo.titulo}/>
                        <View style={estilos.cesta}>
                            <Detalhes detalhes={mock.detalhes} />
                            <Texto style={estilos.titulo}>{mock.itens.titulo}</Texto>    
                        </View>
                    </>
            } >
        </FlatList>
    )
}

const estilos = StyleSheet.create({
    titulo:{
        color: '#464646',
        fontWeight:'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
     },
    cesta:{
        paddingHorizontal: 8,
        paddingVertical: 26
    }
})
