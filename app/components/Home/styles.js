import {
    StyleSheet
} from 'react-native';

import Base from '../../../common/Base';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    heading: {
        fontSize: 25,
        padding: 10,
        textAlign: 'center'
    },
    input: {
        height: 40,
        width: Base.width / 1.2,
        fontSize: 14,
        padding: 10,
        marginTop: 20,
        borderColor: '#0379d5',
        borderWidth: 2
    },
    btn: {
        marginTop: 30,
        alignItems: 'center',
        width: Base.width / 1.2,
        height: 40,
        backgroundColor: '#0379d5'
    },
    LoginText: {
        marginTop: 10,
        fontSize: 16,
        color: '#fff'
    }
})