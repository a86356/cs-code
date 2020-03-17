import {createApi} from './axios';





export const registerAdmin = createApi('register');//注册管理员
export const login = createApi('login');//管理员登录
export const addstudent = createApi('addstudent');//新增学生
export const deletestudent = createApi('deletestudent');//删除学生
export const updatestudent = createApi('updatestudent');//更新学生信息
export const getstudent = createApi('getstudent');//获得学生列表


