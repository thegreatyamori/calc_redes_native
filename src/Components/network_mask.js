import React, { Component } from "react";
import { FormLabel } from 'react-native-elements'
import {
  View,
  Picker,
  StyleSheet
} from "react-native";
// data
import { value } from "../Res/data/network.json";

export default class NetworkMask extends Component {
  /**
   * ### Constructor
   * @param {Object} props propiedades presentes en el componente, incluye el state
   * 
   * Para inicializar un state en el componente es necesario hacerlo en el constructor
   * El constructor en un componente de React es llamado antes de que este sea montado.
   * Cuando implementamos el constructor para un componente de React, debemos llamar a
   * _super(props)_ antes de cualquier otra linea de código.
   * De otra manera _this.props_ será _undefined_ en el constructor, lo cual puede ocasionar bugs.
   */
  constructor() {
    super();
    this.state = { network_mask: '' };
  }
  /**
   * ### Render (Obligatorio)
   * Se encarga de renderizar en la vista movil el componente
   * 
   */
  render() {
    state = this.props.state;
    return (
      <View>
        <FormLabel>Máscara de Subred</FormLabel>
        <View style={styles.contentView}>
          <View style={styles.leftSpinner}>
            <Picker
              mode={'dialog'}
              selectedValue={this.state.network_mask}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ network_mask: itemValue })
                this.props.sendValue(itemValue)
              }}>
              {value.map((data, i) => { return <Picker.Item label={data.dec} value={data.dec} key={i} /> })}
            </Picker>
          </View>
          <View style={styles.rightSpinner} >
            <Picker
              mode={'dialog'}
              selectedValue={this.state.network_mask}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ network_mask: itemValue })
                this.props.sendValue(itemValue)
              }}>
              {value.map((data, i) => { return <Picker.Item label={data.bit} value={data.dec} key={i} /> })}
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentView: { flexDirection: 'row' },
  leftSpinner: { width: '55%' },
  rightSpinner: { width: '45%' },
});