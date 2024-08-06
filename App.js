import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.atum}>
      <View style={styles.containerpai}>
      <Text style={styles.title}>Fundos de Investimento</Text>
      <Text style={styles.title1}>Imobiliário</Text>
      <Image style={styles.image1} source={require('./assets/FII.jpg')} />
      </View>
      
      <ScrollView style={styles.nada}>
      <View style={styles.container}>
        
        <Text style={styles.subtitle}>Top 12</Text>
        <Text style={styles.subsub}>12. Maxi Renda</Text>
        <Image style={styles.image} source={require('./assets/MXRF11.jpg')} />
        <Text style={styles.cota}>Cotação: R$ 10,06</Text>
        <Text style={styles.cota}>Dividend Yield: 12,43%</Text>
        <Text style={styles.subsub}>11. BTG Pactual Crédito Imobiliário</Text>
        <Image style={styles.image} source={require('./assets/BTCI11.jpg')} />
        <Text style={styles.cota}>Cotação: R$ 9,92</Text>
        <Text style={styles.cota}>Dividend Yield: 11,55%</Text>
        <Text style={styles.subsub}>10. Valora Real Estate III</Text>
        <Image style={styles.image} source={require('./assets/VGIR11-VALORA-RE-III.jpg')} />
        <Text style={styles.cota}>Cotação: R$ 9,89</Text>
        <Text style={styles.cota}>Dividend Yield: 13,65%</Text>
        <Text style={styles.subsub}>9. Cyrela Crédito</Text>
        <Image style={styles.image} source={require('./assets/CYCR11.jpg')} />
        <Text style={styles.cota}>Cotação: R$ 9,70</Text>
        <Text style={styles.cota}>Dividend Yield: 12,50%</Text>
        <Text style={styles.subsub}>8. WHG Real Estate</Text>
        <Image style={styles.image} source={require('./assets/WHGR11.jpg')} />
        <Text style={styles.cota}>Cotação: R$ 9,56</Text>
        <Text style={styles.cota}>Dividend Yield: 12,50%</Text>
        <Text style={styles.subsub}>7. SPX SYN Multiestratégia</Text>
        <Image style={styles.image} source={require('./assets/SPXS11.jpg')} />
        <Text style={styles.cota}>Cotação: R$ 9,32</Text>
        <Text style={styles.cota}>Dividend Yield: 12,94%</Text>
        <Text style={styles.subsub}>6. Kinea Securities</Text>
        <Image style={styles.image} source={require('./assets/KNSC11-KINEA-SECURITIES.jpg')} />
        <Text style={styles.cota}>Cotação: R$ 9,22</Text>
        <Text style={styles.cota}>Dividend Yield: 10,57%</Text>
        <Text style={styles.subsub}>5. Átrio Reit Recebíveis</Text>
        <Image style={styles.image} source={require('./assets/ARRI11-ATRIO-RECEBIVEIS-IMOBILIARIOS.jpg')} />
        <Text style={styles.cota}>Cotação: R$9,03</Text>
        <Text style={styles.cota}>Dividend Yield: 13,62%</Text>
        <Text style={styles.subsub}>4. Guardian Real Estate</Text>
        <Image style={styles.image} source={require('./assets/GARE11.jpg')} />
        <Text style={styles.cota}>Cotação: R$ 9,03</Text>
        <Text style={styles.cota}>Dividend Yield: 11,35%</Text>
        <Text style={styles.subsub}>3. Valora Hedge Fund</Text>
        <Image style={styles.image} source={require('./assets/VGIR11-VALORA-RE-III.jpg')} />
        <Text style={styles.cota}>Cotação: R$8,71</Text>
        <Text style={styles.cota}>Dividend Yield: 13,43%</Text>
        <Text style={styles.subsub}>2. BTG Pactual Fundo de Fundos</Text>
        <Image style={styles.image} source={require('./assets/BCFF11-BTG-Pactual-Fundo-de-Fundos.jpg')} />
        <Text style={styles.cota}>Cotação: R$8,24</Text>
        <Text style={styles.cota}>Dividend Yield: 10,31%</Text>
        <Text style={styles.subsub}>1. RBR ALPHA MULTIESTRATÉGIA REAL ESTATE</Text>
        <Image style={styles.image} source={require('./assets/RBRF11-RBR-ALPHA-MULTIESTRATEGIA-REAL-ESTATE.jpg')} />
        <Text style={styles.cota}>Cotação: R$7,50</Text>
        <Text style={styles.cota}>Dividend Yield: 9,08%</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  atum:{
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#d3b15d',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 20, 

  },
  containerpai:{
    backgroundColor:'#2e7d32',
    textAlign: 'center',
    alignItems: 'center',
  },
  nada: {
    flex: 1, 
    
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
    borderRadius: 20,
  },
  title: {
    marginTop: 20,
    paddingTop:10,
    fontSize:35,
    color: '#fff',
    fontWeight: 'bold',

  },
  title1: {
    fontSize: 35,
    color: '#fff',
    marginBottom:20,
    fontWeight: 'bold',

  },
  subtitle:{
    fontSize: 30,
    color:'#2e7d32',
    fontWeight: 'bold',
  
  },
  image1:{
    height: 200,
  },
  subsub:{
    marginTop: 10,
    fontSize:16,
  }
});
