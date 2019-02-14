/**
 * create by AbyssKitty on 2017/12/06
 * reducers
 */

import * as TYPES from '../../ActionType';

/**
 * 这里可以初始化一个默认的实体类
 */
const initialState = {
    status: 'init',
    isSuccess: false,
    bean: null,
    message: '',
}

/**
 * 在这里可以拿到action并return给IndexReducers.js进行分发。
 * 
 * 根据type判断了是从哪个action过来的数据，并进行选择性return。
 */
export default function getWeather(state = initialState, action) {
    switch (action.type) {
        case TYPES.ACTION_GETWEATHER_INIT: // 初始状态
            return Object.assign({}, state, {
                status: 'init',
                isSuccess: false,
                bean: action.bean,
                message: action.message,
            });
            break;
        case TYPES.ACTION_GETWEATHER_SUCCESS: // 初始状态
            return Object.assign({}, state, {
                status: 'success',
                isSuccess: true,
                bean: action.bean,
                message: action.message,
            });
            break;
        default:
            return state;
    }
}