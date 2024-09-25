// 引入 request 文件
import {
	get,
	post
} from './index.js'
const base_url = 'https://p2p.sunshinephp.cn'

const api = {
	// 
	LOGIN_USER: base_url + '/api/user/login', // 
	DATA_LIAT: base_url + '/api/user/getProject', // 
	DATA_LIAT_DETAILS: base_url + '/api/user/getProjectDetail', // 
	USER_TYPE: base_url + '/api/user/getCate', // 
	
}

//  ----------------------------------------------------------------------
// 
export const getLogin = (params) => {
	return post(api.LOGIN_USER, params)
}
export const getCate = (params) => {
	return post(api.USER_TYPE, params)
}
//  
export const getProject = (params) => {
	return post(api.DATA_LIAT, params)
}         
// 
export const getProjectDetail = (params) => {
	return get(api.DATA_LIAT_DETAILS, params)
}  
//  end ----------------------------------------------------------------------

