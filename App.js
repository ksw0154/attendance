import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loading from "./Loading";
import * as SplashScreen from 'expo-splash-screen';
import MainPage from "./MainPage";

// export default function App() {
//   return <Loading />;
// }

export default class App extends Component {
  state={
    isLoading : true
  }

componentDidMount = async() => {
  setTimeout(() => {this.setState({isLoading: false})}, 3000);
}
  render() {
    if(this.state.isLoading){
      return <Loading />
    }
    else {
      return <MainPage />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 3,
    backgroundColor: "blue"
  }
});