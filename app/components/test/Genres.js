import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

import {fetchData} from '../actions'
import {connect} from 'react-redux'

class Genres extends Component{

    componentWillMount(){
        this.props.fetchData('Avanzada')
    }

    render(){
        console.log(this.props)
        return(
            <Text>Genres</Text>
        )
    }
}

const mapStateToProps = state => {
    return {data: state.data}
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: (genres) => dispatch(fetchData(genres))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genres)