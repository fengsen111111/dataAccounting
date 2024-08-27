<template>
	<view class="">
		<!-- 自定义导航栏 -->
		<view class="navBarBox">
			<!-- 状态栏占位 -->
			<view class="statusBar" :style="{ paddingTop: statusBarHeight + 'px' }"></view>
			<!-- 真正的导航栏内容 -->
			<view class="navBar">
				<view class="top">
					项目列表
				</view>
			</view>
		</view>
		
		<view class="text-center bgF5 p30">
			<view class="card" v-for="item in [1,2,3,4]" :key="item">
				<view class="flex items-center between bg0997E6 p30 radius8">
					<view class="text36 bold">
						某某项目
					</view>
					<view class="text24" @click="handleTo">
						明细
					</view>
				</view>
				<view class="p30 bg-whilt">
					<view class="flex text28 col666 between items-center">
						<view class="">创建时间</view>
						<view class="">XXXX-XX-XX XX:XX</view>
					</view>
					<view class="flex mt40 text28 col666 between items-center">
						<view class="">材料数量</view>
						<view class="col-black">123456</view>
					</view>
					<view class="flex mt40 text28 col666 between items-center">
						<view class="">总成本金额</view>
						<view class="flex items-center">
							<view class="col-black">666,666,666</view>
							<!-- <image @click="handleShow" src="../../static/bottom.png" class="imgBottom" mode=""></image> -->
							<uni-icons v-if="show" @click="handleShow" type="up" size="20" color="#0997E6"></uni-icons>
							<uni-icons v-else @click="handleShow" type="down" size="20" color="#0997E6"></uni-icons>
						</view>
					</view>
					<view class="px20" v-if="show">
						<view class="flex mt40 text28 col666 between items-center">
							<view class="">材料项目</view>
							<view class="col-black">888,888,888</view>
						</view>
						<view class="flex mt40 text28 col666 between items-center">
							<view class="">人工项目</view>
							<view class="col-black">888,888,888</view>
						</view>
						<view class="flex mt40 text28 col666 between items-center">
							<view class="">器械项目</view>
							<view class="col-black">888,888,888</view>
						</view>
						<view class="flex mt40 text28 col666 between items-center">
							<view class="">管理费</view>
							<view class="col-black">888,888,888</view>
						</view>
						
						<view class="flex mt40 text28 col666 between items-center">
							<view class="">税金</view>
							<view class="col-black">888,888,888</view>
						</view>
					</view>
					
					<view class="mt40 p30 text24 col999 bgF5 radius8">
						<view class="">项目备注</view>
						<view class="mt20">在技术创新方面，我们始终紧跟时代步伐，积极引进和 应用先进的消防技术和设备。无论是智能化的火灾...</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				show: false,
				searchValue: '',
				// 状态栏高度
				statusBarHeight: 0,
				// 导航栏高度
				navBarHeight: 82 + 11,
			}
		},
		created() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		},
		onLoad() {

		},
		methods: {
			handleShow(){
				this.show = !this.show
			},
			handleTo(){
				uni.navigateTo({
					url:'/pages/details/index'
				})
			}
		}
	}
</script>

<style>
	.mt20{
		margin-top: 20rpx;
	}
	.bg-whilt{
		background-color: white;
	}
	.radius8{
		border-radius: 8rpx;
	}
	.col999{
		color: #999999;
	}
	.bg0997E6{
		background-color: #0997E6;
	}
	.imgBottom {
		width: 30rpx;
		height: 16rpx;
		margin-left: 20rpx;
	}

	.mt40 {
		margin-top: 40rpx;
	}

	.text28 {
		font-size: 28rpx;
	}

	.col666 {
		color: #666666;
	}

	.text24 {
		font-size: 24rpx;
	}

	.between {
		justify-content: space-between;
	}

	.items-center {
		align-items: center;
	}

	.text36 {
		font-size: 36rpx;

	}

	.bold {
		font-weight: bold;
	}
	.px30{
		padding-left: 30rpx;
		padding-right: 30rpx;
	}
	.px20{
		padding-left: 20rpx;
		padding-right: 20rpx;
	}
	.pb30{
		padding-bottom: 30rpx;
	}
	.flex {
		display: flex;
	}

	.top {
		text-align: center;
		height: 88rpx;
		line-height: 88rpx;
		font-size: 36rpx;
		color: black;
		background-color: white;
	}

	.p30 {
		padding: 30rpx;
	}
	.bgF5{
		background-color: #f5f5f5;
	}

	.card {
		margin-top: 30rpx;
		border-radius: 16rpx;
		color: white;
		box-shadow: 0rpx 2rpx 4rpx 1rpx rgba(0, 0, 0, 0.1);
	}
	
	.navBarBox {}
	
	.navBarBox .statusBar {}
	
	.navBarBox .navBar {
		padding-bottom: 8rpx;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.navBarBox .navBar .logo {
		width: 82rpx;
		height: 82rpx;
		margin-right: 10rpx;
	}
</style>