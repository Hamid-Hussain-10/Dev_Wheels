import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007191",
        tabBarStyle: {
          backgroundColor: "#e4c87a",
          color: "#ffffff",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <AntDesign name="home" size={24} color={color} />
            ) : (
              <FontAwesome name="home" size={24} color="#000000" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <AntDesign name="login" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          title: "SignUp",
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return <AntDesign name="smile-circle" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
