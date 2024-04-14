import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {add, asyncAdd, minus} from "../store/counter";
import {Button} from 'antd';


function TestThunk(props){

    return (
        <div style={{margin: '100px'}}>

            {props.num}
            <div style={{display: 'flex', justifyContent: "space-between"}}>
                <Button onClick={() => props.add(2)}>+</Button>
                <Button onClick={()=>props.minus(5)}>-</Button>
                <Button onClick={()=>props.asyncAdd(10)}>asyncAdd</Button>
            </div>
        </div>
    )

}


const mapStateToProps = (state)=>{
    console.log('mapStateToProps state', state)
    return {
        num: state.counterReducer
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        add: (num)=>{
            dispatch(add(num))
        },
        minus: (num = 1)=>{
            dispatch(minus(num))
        },
        asyncAdd: (num = 10)=>{
            dispatch(asyncAdd(num))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TestThunk);