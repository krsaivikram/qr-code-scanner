
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner'
export default class Transactionscreen extends React.Component{
  constructor(){
    super();
    this.state={
     hasCameraPermissions:null,
     Scanned:false,
     scanData:"",
     buttonstate:"normal"
    }
  }
   GetCameraPermission=async()=>{
     const {Status}=await Permissions.askAsync(Permissions.CAMERA)
     this.setState({hasCamerPermissions:Status=="granted",buttonstate:"clicked",Scanned:false})
   }
   HandleBarcodeScanner=async({type,data})=>{
     this.setState({Scanned:true,scanData:data,buttonstate:"normal"})
   }
    render(){
      const hasCameraPermissions=this.state.hasCameraPermissions;
      const Scanned=this.state.Scanned;
      const buttonstate=this.state.buttonstate;
      if(buttonstate=="clicked"&&hasCameraPermissions){
      return(<BarCodeScanner onBarCodeScanned={Scanned?undefined:this.HandleBarcodeScanner}
      style={StyleSheet.absoluteFillObject}
      />)
      }
      else if(buttonstate=="normal"){
  return (
      <View style={styles.container}>
     <Text style={styles.displayText}>{hasCameraPermissions===true?this.state.scanData:"RequestCameraPermissions"} </Text>

  
    <TouchableOpacity onPress={this.GetCameraPermission}><Text>Scan QR CODE</Text></TouchableOpacity>
    </View>
  );}
}
}
const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center' }, displayText:{ fontSize: 15, textDecorationLine: 'underline' }, scanButton:{ backgroundColor: '#2196F3', padding: 10, margin: 10 }, buttonText:{ fontSize: 20, } });
