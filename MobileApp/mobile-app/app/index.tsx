import { Text, View, Button, TextInput } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginTop: 0,
          width: "50%",
          borderRadius: 50,
          color: "white",
        }}
        placeholder="Type here..."
        onChangeText={(text) => console.log(text)}
        defaultValue="Hello"
      />
      <Button
        title="Submit"
        onPress={() => {
          alert("Submitted");
        }}
      />
      
    </View>
  );
}
