import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    Button, StyleSheet,
    Text, TouchableOpacity, View, FlatList, Image, TextInput
} from 'react-native';

export default function Student() {
    const [isBool, setisbool] = useState(false);
    const [data, setData] = useState([
        {
            url: "https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg",
            name: "Nguyen van hung",
            moTa: "Go to our CSS Images Tutorial to learn more about how to style images "
        },
        {
            url: "https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg",
            name: "Nguyen van hung",
            moTa: "Go to our CSS Images Tutorial to learn more about how to style images "
        },
        {
            url: "https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg",
            name: "Nguyen van hung",
            moTa: "Go to our CSS Images Tutorial to learn more about how to style images "
        },
        {
            url: "https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg",
            name: "Nguyen van hung",
            moTa: "Go to our CSS Images Tutorial to learn more about how to style images "
        },
        {
            url: "https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg",
            name: "Nguyen van hung",
            moTa: "Go to our CSS Images Tutorial to learn more about how to style images "
        },
    ]);

    const [name, setName] = useState("");
    const [moTa, setMoTa] = useState("");
    const [anh, setAnh] = useState("");

    return (
        <View style={{
            padding: 20,
        }}>
            <Text style={{ marginTop: 10, fontSize: 20 , fontWeight:"bold"}}>Name: Nguyễn Văn Hùng</Text>
            <Text style={{ marginBottom: 20 }}>MSV: PH25605</Text>
            <Button

                onPress={() => {
                    setisbool(!isBool);
                }}
                title='Thêm'

            >
            </Button>
            {
                isBool ? (
                    <>
                        <TextInput placeholder='Tên'
                            onChangeText={(text) => {
                                setName(text);
                            }}
                            style={{
                                width: "100%", borderWidth: 1, height: 40,
                                marginVertical: 8,
                                padding: 10
                            }} />
                        <TextInput placeholder='Mô tả'
                            onChangeText={(text) => {
                                setMoTa(text);
                            }}
                            style={{ width: "100%", borderWidth: 1, height: 40, padding: 10 }} />
                        <TextInput
                            onChangeText={(text) => {
                                setAnh(text);
                            }}
                            placeholder='link ảnh' style={{
                                width: "100%", borderWidth: 1, height: 40,
                                marginVertical: 8, padding: 10
                            }} />
                        <View style={{ flexDirection: "row", justifyContent:"flex-end" }}>
                            <TouchableOpacity
                            style={{
                    
                                backgroundColor:"#1e90ff",
                                borderRadius:5,
                                alignItems:"center",
                                marginRight:10,
                                justifyContent: "center",
                            }}
                                onPress={() => {
                                    setisbool(false)
                                }}>
                                <Text style={{color:"white", fontWeight:"bold", padding:10}}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={{
                                backgroundColor:"#1e90ff",
                                borderRadius:5,
                                alignItems:"center",
                                justifyContent: "center",
                            }}
                                onPress={() => {
                                   setData([...data,{anh, name,moTa}])
                                }}>
                                <Text style={{color:"white", fontWeight:"bold", padding:10}}>Save</Text>
                            </TouchableOpacity>
                        </View>

                    </>
                ) : null
            }
            <FlatList data={data}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View>
                                <Image style={{ height: 50, width: 50, borderRadius: 25, marginTop: 10 }}
                                    source={{ uri: item.url }} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ marginTop: 10 }}>{item.name}</Text>
                                <Text>{item.moTa}</Text>
                            </View>
                        </View>
                    )
                }} />
        </View>
    )


}