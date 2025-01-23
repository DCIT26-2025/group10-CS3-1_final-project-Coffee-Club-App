import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import TabsLayout from "../navigation/_layout";
import { NavigationContainer } from "@react-navigation/native";
import { supabase } from "../lib/supabase";
import Auth from "../screens/LoginScreen";
import { Session } from "@supabase/supabase-js";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <View>{session && session.user ? <TabsLayout /> : <Auth />}</View>;
}
