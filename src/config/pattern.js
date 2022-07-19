/**
 * 常用正则校验
 * @date 2021/10/11
 * @Author Zuojt
 * */

// 只能输入数字
export const numberPattern = /^[1-9]\d*$/

// 数字、英文
export const numStringPattern = /^[A-Za-z0-9]+$/

// 中英文、数字、短划线、下划线和小数点
export const numStringPointPattern = /^[\u4E00-\u9FA5A-Za-z0-9-_.]+$/

// 中文
export const ChinesePattern = /^\u4E00-\u9FA5$/

// 手机号校验
export const phonePattern = /^1\d{10}$/
// /^[1](([3][0-9])|([4][5,7,9])|([5][0-9])|([6][6])|([7][3,5,6,7,8])|([8][0-9])|([9][8,9]))[0-9]{8}$/

// 座机号校验
// export const TelephonePattern = /^(0[0-9]{2,3}-)([2-9][0-9]{6,7})+(-[0-9]{1,4})?$/
export const TelephonePattern = /^0\d{2,3}[-]?\d{7,8}$/

// 传真校验
export const FaxPattern = /^0\d{2,3}[-]?\d{7,8}([-]?\d{1,6})?$/

// 邮箱校验
export const emailPattern =
  // eslint-disable-next-line
  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/

// 身份证校验
export const IDCardPattern = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

// 企业统一信用代码
export const enterpriseCreditCodePattern = /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/

// 时间格式校验 <24小时格式>
export const dateTime24Pattern = /^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/

// 时间格式校验 <12小时格式>
export const dateTime12Pattern = /^[01][0-3]:[0-5][0-9]:[0-5][0-9]$/
