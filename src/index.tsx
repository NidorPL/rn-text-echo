import * as React from "react"
import { Text } from "react-native";

export const ShowText = ({ text }: { text: string }) => {
    return <Text>{"echoo " + text}</Text>;
};
