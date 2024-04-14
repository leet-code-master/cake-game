export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
/**
 * @param num
 * @returns 生成随机颜色值
 */
export const generateColorFromNumber = (num: number) => {
  // 将数字转换为16进制字符串
  const hex = num.toString(16);
  // 生成随机颜色值
  const color = `#${hex}${hex}${hex}`;
  return color;
};
/**
 * 范围随机
 * @param lowerValue
 * @param upperValue
 * @returns
 */
export function randomFrom(lowerValue: number, upperValue: number) {
  return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}
/**
 *数字随机分割
 *
 * @param {*} number
 * @param {*} count
 * @return {*}
 */
export function randomFigure(number: number, count: number) {
  let arr = [];
  let num = number / count;
  while (count > 0) {
    let res = count == 1 ? number : randomFrom(1, Math.floor(num));
    arr.push(res);
    count--;
    number -= res;
    num = number / count;
  }
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var index = parseInt(Math.random() * (len - i));
    var temp = arr[index];
    arr[index] = arr[len - i - 1];
    arr[len - i - 1] = temp;
  }
  return arr;
}
