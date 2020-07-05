import React, { Component } from "react";
import {
  View,
  Text,
  Linking,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";

export default class QRCodeScreen extends Component {

    state = {
      modalVisible: false,
      success: null,
      url: '',
    };
  
    openLink = () => {
        alert(this.state.url)
    };
  
    handleButton = () => {
      
    }
  
    onSuccess = async (e:any) => {
      await this.setState({ success: true, modalVisible: true, url: e.data });
    };
}