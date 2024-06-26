import React from "react";
{
    /*import external google fonts */
}
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useState } from "react";
import image from "../assets/BackgroundImage.png";
import icon from "../assets/person1.png";
import {
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text,
    Button,
    TextInput,
} from "react-native";

const Start = ({ navigation }) => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");

    {
        /*menu for colors used to set background color in Chat screen */
    }
    const screenBackgroundColors = {
        a: "#090C08",
        b: "#474056",
        c: "#8A95A5",
        d: "#B9C6AE",
    };

    {
        /*load external google fonts in array */
    }
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
    });

    {
        /*no external fonts to use if failed to load into array */
    }
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.titleText}>Welcome</Text>
                <View style={styles.innerContainer}>
                    <View style={styles.sectionStyle}>
                        <Image source={icon} style={styles.imageStyle} />
                        <TextInput
                            style={styles.textInput}
                            value={name}
                            onChangeText={setName}
                            placeholder="Type your username here"
                        />
                    </View>

                    <View style={styles.box2}>
                        <Text style={[styles.lightGrey, styles.poppinsText]}>
                            Choose Background Color:
                        </Text>
                        {/* coloured buttons to set color of background for the Chat screen */}
                        <View style={styles.colorPicker}>
                            <TouchableOpacity
                                style={[
                                    styles.circle,
                                    {
                                        backgroundColor:
                                            screenBackgroundColors.a,
                                    },
                                ]}
                                onPress={() =>
                                    setColor(screenBackgroundColors.a)
                                }
                            ></TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.circle,
                                    {
                                        backgroundColor:
                                            screenBackgroundColors.b,
                                    },
                                ]}
                                onPress={() =>
                                    setColor(screenBackgroundColors.b)
                                }
                            ></TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.circle,
                                    {
                                        backgroundColor:
                                            screenBackgroundColors.c,
                                    },
                                ]}
                                onPress={() =>
                                    setColor(screenBackgroundColors.c)
                                }
                            ></TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.circle,
                                    {
                                        backgroundColor:
                                            screenBackgroundColors.d,
                                    },
                                ]}
                                onPress={() =>
                                    setColor(screenBackgroundColors.d)
                                }
                            ></TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("Chat", {
                                name: name,
                                color: color,
                            })
                        }
                    >
                        <Text style={styles.textStyle}>Start Chatting</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

{
    /* styling for rendered UI */
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        height: "44%",
        width: "88%",
        backgroundColor: "#fff",
        alignItems: "center",
        marginBottom: 24,
        justifyContent: "space-around",
    },
    image: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    textInput: {
        padding: 15,
        width: "100%",
        margin: "0 0 0 30",
        fontFamily: "Poppins_500Medium",
        color: "#bcbcbc",
    },
    button: {
        alignItems: "center",
        width: "88%",
        backgroundColor: "#757083",
        padding: 10,
        height: 50,
        justifyContent: "center",
        border: "none",
        borderRadius: 5,
    },
    titleText: {
        fontFamily: "Poppins_700Bold",
        fontSize: 45,
        fontWeight: "600",
        color: "#fff",
        alignItems: "center",
        marginTop: 48,
    },
    circle: {
        position: "relative",
        height: 40,
        width: 40,
        borderRadius: 50,
        margin: 3,
    },
    selectedCircle: {
        padding: 10,
    },
    textStyle: {
        color: "#fff",
        fontFamily: "Poppins_500Medium",
        fontWeight: "400",
    },

    box2: {
        alignItems: "flex-start",
        gap: 10,
        marginLeft: -80,
        marginBottom: 10,
    },
    colorPicker: {
        flex: 4,
        flexDirection: "row",
        alignSelf: "flex-start",
        alignItems: "center",
        width: "100%",
    },
    grey: {
        color: "#5b5b5b",
    },
    lightGrey: {
        color: " #757083",
        opacity: "50%",
    },
    poppinsText: {
        fontFamily: "Poppins_500Medium",
    },
    sectionStyle: {
        flexDirection: "row",
        width: "88%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        borderWidth: 0.5,
        borderColor: "#5b5b5b",
        borderRadius: 5,
        margin: 10,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: "stretch",
        alignItems: "center",
        color: "#bcbcbc",
    },
});

export default Start;
