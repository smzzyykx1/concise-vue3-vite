// 提供公共方法
import { random } from 'lodash';
import { dayjs } from 'element-plus';
/**
 * 生成一个永不重复的ID
 * @param { Number } randomLength 获取的随机数长度最大16
 */
export function getUuiD(randomLength) {
    if(randomLength <= 16) {
        return random(1, true).toString().substring(2, randomLength + 2) + dayjs().valueOf();
    }
    return random(1, true).toString().substring(2, 18) + dayjs().valueOf();
}

//将数字转化三位一个逗号，可以转换金额，第二个参数带边小数点后位数
export function toCountNumber(num, fractionDigits) {
    let sNum = Number(num);

    if(isNaN(sNum)) {
        sNum = Number(0);
    }

    return sNum.toLocaleString('zh', { minimumFractionDigits: fractionDigits ? fractionDigits : 0, maximumFractionDigits: fractionDigits ? fractionDigits : 0 });
}