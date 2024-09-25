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
			<view class="card" v-for="item in dataList" :key="item.id">
				<view class="flex items-center between bg0997E6 p30 radius8">
					<view class="text36 bold">
						{{item.name}}
					</view>
					<view class="text24 flex items-center" @click="handleTo(item)">
						明细
						<uni-icons type="right" size="16" color="#ffffff"></uni-icons>
					</view>
				</view>
				<view class="p30 bg-whilt">
					<view class="flex text28 col666 between items-center">
						<view class="">创建时间</view>
						<view class="">{{item.createtime}}</view>
					</view>
					<view class="flex mt40 text28 col666 between items-center">
						<view class="">材料数量</view>
						<view class="col-black">{{item.number}}</view>
					</view>
					<view class="flex mt40 text28 col666 between items-center">
						<view class="">总成本金额</view>
						<view class="flex items-center">
							<view class="col-black">{{item.total_price}}</view>
							<!-- <image @click="handleShow" src="../../static/bottom.png" class="imgBottom" mode=""></image> -->
							<uni-icons v-if="show" @click="handleShow" type="up" size="20" color="#0997E6"></uni-icons>
							<uni-icons v-else @click="handleShow" type="down" size="20" color="#0997E6"></uni-icons>
						</view>
					</view>
					<view class="px20" v-if="show">
						<view v-for="(iss,index) in item.pcrel" :key="index">
							<view class="flex mt40 text28 col666 between items-center">
								<view class="">项目名字</view>
								<view class="col-black">{{iss.cate_name}}</view>
							</view>
							<view class="flex mt40 text28 col666 between items-center">
								<view class="">项目价格</view>
								<view class="col-black">{{iss.show_price}}</view>
							</view>
						</view>
					</view>
					<view class="flex mt40 text28 col666 between items-center">
						<view class="">管理费</view>
						<view class="col-black">{{item.admin_price}}</view>
					</view>
					<view class="flex mt40 text28 col666 between items-center">
						<view class="">税金</view>
						<view class="col-black">{{item.taxes}}</view>
					</view>
					<view class="mt40 p30 text24 col999 bgF5 radius8">
						<view class="">项目备注</view>
						<view class="mt20" style="text-indent:24px">{{item.remark}}</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		getProject
	} from '@/request/api.js'
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
				dataList: [],
				limit: 10
			}
		},
		created() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
			this._getProject()
		},
		onReachBottom(){
			console.log('到底了');
			this.limit = this.limit+10
			this._getProject()
		},
		onLoad() {

		},
		methods: {
			_getProject() {
				getProject({
					page: 1,
					limit: this.limit
				}).then((res) => {
					this.dataList = res.data.data.data
					console.log('list', this.dataList);
				})
			},
			handleShow() {
				this.show = !this.show
			},
			handleTo(item) {
				uni.navigateTo({
					url: '/pages/details/index?id=' + item.id
				})
			}
		}
	}
</script>

<style>
	.mt20 {
		margin-top: 20rpx;
	}

	.bg-whilt {
		background-color: white;
	}

	.radius8 {
		border-radius: 8rpx;
	}

	.col999 {
		color: #999999;
	}

	.bg0997E6 {
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

	.px30 {
		padding-left: 30rpx;
		padding-right: 30rpx;
	}

	.px20 {
		padding-left: 20rpx;
		padding-right: 20rpx;
	}

	.pb30 {
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

	.bgF5 {
		background-color: #f5f5f5;
	}

	.card {
		margin-bottom: 30rpx;
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