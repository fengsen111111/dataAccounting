<template>
	<view class="">
		<view class="mt30 text-center h88 text36 col-black bg-whilt">
			工程成本报价系统
		</view>
		<view class="text-center bgF5">
			<image src="../../static/login.png" class="loginImg" mode=""></image>
			<view class="text36 bold">
				四川儒朋建筑工程有限公司
			</view>
			<view class="inputView">
				<view class="flex items-center">
					<image src="../../static/user.png" class="iconImg" mode=""></image>
					<view class="text-left ml30" :class="nickname?'col-black':''">
						<input type="text" v-model="nickname" class="w-full" placeholder="输入账号"/>
					</view>
				</view>
			</view>
			<view class="inputViewtwo">
				<view class="flex items-center">
					<image src="../../static/mima.png" class="iconImg" mode=""></image>
					<view class="text-left ml30" :class="password?'col-black':''" >
						<input type="password" v-model="password" class="w-full" placeholder="输入密码"/>
					</view>
				</view>
			</view>
			<view class="btn" @click="handleLogin">
				登录
			</view>
		</view>
	</view>
</template>

<script>
	import { getLogin } from '@/request/api.js'
	export default {
		data() {
			return {
				title: 'Hello',
				nickname:'jack',
				password:'123456',
			}
		},
		onLoad() {
		},
		methods: {
			handleLogin(){
				getLogin({
					account: this.nickname,
					password: this.password
				}).then((res)=>{
					console.log('登陆成功',res.data.data.userinfo);
					uni.navigateTo({
						url:'/pages/list/index'
					})
					localStorage.setItem('token',res.data.data.userinfo.token)
				})
				
			}
		}
	}
</script>

<style>
	.mt30{
		margin-top: 30rpx;
	}
.btn{
	background: #0997E6;
	border-radius: 8rpx 8rpx 8rpx 8rpx;
	font-size: 36rpx;
	color: white;
	text-align: center;
	width: 90%;
	margin: 60rpx auto;
	padding-top: 27rpx;
	padding-bottom: 27rpx;
}
.w-full{
	width: 100%;
}
.ml30{
	margin-left: 30rpx;
}
.iconImg{
	width: 26rpx;
	height: 30rpx;
}
.text-left{
	text-align: left;
}
.items-center{
	align-items: center;
}
.flex{
	display: flex;
}
.bgF5{
	background-color: #F5F5F5;
}
.inputView{
	background-color: white;
	margin-top: 80rpx;
	padding: 30rpx 60rpx;
	color: #999999;
}
.inputViewtwo{
	background-color: white;
	margin-top: 1rpx;
	padding: 30rpx 60rpx;
	color: #999999;
}
.bold{
	font-weight: bold;
}
.text-center{
	text-align: center;
}
.h88{
	height:88rpx
}
.text36{
	font-size: 36rpx;
}
.col-black{
	color: black;
}
.loginImg{
	width: 300rpx;
	height: 160rpx;
	margin: 80rpx auto;
}
.bg-whilt{
	background-color: white;
}
</style>
