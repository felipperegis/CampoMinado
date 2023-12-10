import { Dimensions  } from "react-native";

const parms = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // proporção do painel superior da tela
    difficultLevel:0.1,
    getColumns() {
        const width = Dimensions.get('windows').width
        return Math.floor(width / this.blockSize)
    },
    
}