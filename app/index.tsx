import { Text, View } from "react-native";
import Login from "./../components/Login";
import { auth } from '../configs/FirebaseConfig';
import { Redirect } from "expo-router";
import {Href} from 'expo-router'

export default function Index() {

  const user = auth.currentUser;
  const MY_ROUTE = "/myjourney" as Href

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user?
        <Redirect href={MY_ROUTE}/>:
        <Login/>
      }
    
    </View>
  );
}

