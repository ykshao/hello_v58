/**
 * create by AbyssKitty on 2017/12/06
 * 获取天气预报的action
 */

import * as TYPES from '../ActionType';

/**
 * 获取天气预报的action
 */
export function actionGetWeather(list) {
    return (dispatch) => {
        //开始获取，发送一个dispatch
        dispatch(init(list));
        /**
         * 在这里假装做了一个类似于调接口的操作
         */
        //获取成功，发送一个dispatch
        dispatch(success(list));
    }
}

/**
 * 这里会通过dispatch把action送给reducer，TYPE是判断拿到的是哪个action。
 */
function init(list) {
    return {
        type: TYPES.ACTION_GETWEATHER_INIT,
        message: '开始获取',
        bean: list,
    }
}

function success(list) {
    return {
        type: TYPES.ACTION_GETWEATHER_SUCCESS,
        message: '获取成功',
        bean: list,
    }
}