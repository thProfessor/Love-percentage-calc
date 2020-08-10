import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Appbar, Button } from "react-native-paper";
import Displaylove from "./components/Displaylove";

class App extends React.Component {
  state = {
    fname: "",
    sname: "",
    result: "loading",
  };

  submitit() {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      {
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key":
            "b80af3bd31msh05c50e56b5a675ap13e310jsnbf84c721a620",
        },
      }
    )
      .then((data) => data.json())
      .then((data2) => {
        this.setState({
          result: data2,
        });
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love % Calculator"
            style={{ alignItems: "center" }}
          />
        </Appbar.Header>
        <TextInput
          label="Person1(male)"
          value={this.state.fname}
          onChangeText={(text) => this.setState({ fname: text })}
        />
        <TextInput
          label="Person2(female)"
          value={this.state.sname}
          onChangeText={(text) => this.setState({ sname: text })}
        />
        <Button
          icon="cards-heart"
          mode="contained"
          onPress={this.submitit.bind(this)}
          style={{ margin: 10 }}
        >
          Calculate
        </Button>
        <Displaylove data={this.state.result} />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
