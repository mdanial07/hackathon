import React, { Component } from 'react'
import {
    Container, Header, Content, List, Right, Left, ListItem,
    Item, Label, Input, Switch, Title, Thumbnail, Text, Separator,
    Body, TabHeading, Button, Footer
} from 'native-base';
import { View, AsyncStorage, Image, StyleSheet, TextInput, Alert } from "react-native"
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ChatBoxMiddleware } from '../../store/middlewares/chatboxMiddleware'

function mapDispatchToProps(dispatch) {
    return {
        chatmessages: (chat, Key) => dispatch(ChatBoxMiddleware.ChatMessages(chat, Key)),
        chatbox: (key) => dispatch(ChatBoxMiddleware.ChatBox(key)),
    }
}

function mapStateToProps(state) {
    return {
        chat: state.ChatBox.chatBox
    }
}
class ChatBox extends Component {

    constructor(props) {
        super(props);
        this.state = { msg: '', uid: '', mainKey: '', }
    }
    static navigationOptions = {
        title: 'Login Page',
        header: null,
    }
    componentWillMount() {
        console.disableYellowBox = true;
        AsyncStorage.getItem('familytracker', (err, result) => {
            if (result !== null) {
                let data = JSON.parse(result);
                var uid = data._id;
                this.setState({ uid: uid })
            }
        });

        let mainkey = this.props.navigation.state.params.key
        console.log(mainkey)
        this.setState({ mainKey: mainkey })
    }

    back = () => {
        this.props.navigation.navigate('circles')
    }

    chatMessages = () => {
        let Key = this.state.mainKey
        let message = this.state.msg;
        if (message != '') {
            let chat = {
                uid: this.state.uid,
                msg: this.state.msg,
            }
            console.log(chat, Key)
            this.props.chatmessages(chat, Key)
            this.props.chatbox(Key)

            this.setState({ msg: null })
        }
        else {
            Alert.alert(
                'Alert',
                'Message Box is empty',
                [
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            )
        }
    }

    render() {
        console.log(this.props.chat)
        return (
            <Container>
                <Header style={{ backgroundColor: '#05b8cc' }}>
                    <Left>
                        <Button transparent onPress={this.back} >
                            <Icon style={{ color: '#fff' }} size={20} name='arrow-left' />
                        </Button>
                    </Left>
                    <Body >
                        <Title >Circle Name</Title>
                    </Body>

                </Header>
                <Content style={{ flex: 1, backgroundColor: '#fff', paddingBottom: 20 }}>
                    {
                        this.props.chat.map((msg, i) => {
                            if (this.state.uid == msg.uid) {
                                return (
                                    <View key={i} style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10, marginRight: 10, marginLeft: 15, }}>
                                        <Text style={{
                                            backgroundColor: '#5fd0ff', flex: 1,
                                            borderRadius: 25, margin: 5,
                                            color: '#fff',
                                            paddingTop: 5,
                                            paddingBottom: 5,
                                            paddingLeft: 20,
                                            paddingRight: 10,
                                        }}>
                                            {msg.msg}
                                        </Text>
                                        <Image
                                            style={{ width: 40, height: 40, marginTop: 3, marginLeft: 5, borderRadius: 25 }}
                                            /* source={{ uri: '../Images/profile1.jpg' }} */
                                            source={require('../Images/profile1.jpg')}
                                        />
                                    </View>
                                )
                            }
                            else {
                                return (
                                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10, marginRight: 15 }}>
                                        <Image
                                            style={{ width: 40, height: 40, marginTop: 3, marginRight: 5, borderRadius: 25 }}
                                            source={{ uri: 'http://www.energogreen.com/wp-content/uploads/2017/02/profile-icon-9-grey.png' }}
                                        />
                                        <Text
                                            style={{
                                                backgroundColor: '#ebebeb',
                                                flex: 1, borderRadius: 25,
                                                color: '#000',
                                                margin: 5, paddingTop: 5,
                                                paddingBottom: 5, paddingLeft: 20,
                                                paddingRight: 10
                                            }}
                                        >
                                            {msg.msg}
                                        </Text>
                                    </View>
                                )
                            }
                        })
                    }

                    {/* <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10, marginRight: 15 }}>
                        <Icon style={{ color: '#CD0000', marginTop: 8, marginRight: 5 }} size={30} name='user-o' onPress={this.back} />
                        <Thumbnail size={5} source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />
                        <Image
                            style={{ width: 40, height: 40, marginTop: 3, marginRight: 5, borderRadius: 25 }}
                            source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }}
                        />

                        <Text
                            style={{
                                backgroundColor: '#dadedf',
                                flex: 1, borderRadius: 25,
                                margin: 5, paddingTop: 5,
                                paddingBottom: 5, paddingLeft: 20,
                                paddingRight: 10
                            }}
                        >
                            Hello How are you what are you doing what are you doing what are you doing
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10, marginRight: 15 }}>
                        <Icon style={{ color: '#CD0000', marginTop: 8, marginRight: 5 }} size={30} name='user-o' onPress={this.back} />
                        <Thumbnail size={5} source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />
                        <Image
                            style={{ width: 40, height: 40, marginTop: 3, marginRight: 5, borderRadius: 25 }}
                            source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }}
                        />

                        <Text
                            style={{
                                backgroundColor: '#dadedf',
                                flex: 1, borderRadius: 25,
                                margin: 5, paddingTop: 5,
                                paddingBottom: 5, paddingLeft: 20,
                                paddingRight: 10
                            }}
                        >
                            Hello How are you
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10, marginRight: 10, marginLeft: 15, }}>
                        <Icon style={{ color: '#CD0000', marginTop: 8, marginRight: 5 }} size={30} name='user-o' onPress={this.back} />
                        {<Thumbnail size={5} source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }} />}
                        <Text style={{
                            backgroundColor: '#dadedf', flex: 1, borderRadius: 25, margin: 5,
                            paddingTop: 5,
                            paddingBottom: 5,
                            paddingLeft: 20,
                            paddingRight: 10,
                        }}> Hello How are you </Text>
                        <Image
                            style={{ width: 40, height: 40, marginTop: 3, marginLeft: 5, borderRadius: 25 }}
                            source={{ uri: 'https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/21432894_1192746394162794_1096900880755878585_n.jpg?oh=ef1d58816ee341804cbcd9f366528413&oe=5A5314D1' }}
                        />
                    </View> */}

                </Content>
                <Footer style={{ backgroundColor: '#e0e0e0', }}>
                    <Icon style={{ color: '#05b8cc', margin: 10 }} size={30} name='user-o' onPress={this.back} />
                    <TextInput
                        style={{ color: '#000', marginTop: 8, flex: 1, fontSize: 16 }}
                        placeholder="Type you message..."
                        placeholderTextColor="#262525"
                        onChangeText={(msg) => this.setState({ msg })}
                        underlineColorAndroid='#e0e0e0'
                    />
                    <Icon style={{ color: '#05b8cc', margin: 10 }} size={30} name='send' onPress={this.chatMessages} />
                </Footer>

            </Container>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);



const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'stretch',

    }
})