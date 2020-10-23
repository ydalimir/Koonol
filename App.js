import React, { useEffect } from "react";

import Navigation from "./app/navigations/Navigations";
import { firebaseApp } from "./app/utils/firebase";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Setting a timer"]);



export default function App() {

  return (<Navigation />);
    
};
