<template>
	<view class="">
		<!-- 自定义导航栏 -->
		<view class="navBarBox">
			<!-- 状态栏占位 -->
			<view class="statusBar" :style="{ paddingTop: statusBarHeight + 'px' }"></view>
			<!-- 真正的导航栏内容 -->
			<view class="navBar">
				<view class="topTitle items-center px30">
					<uni-icons type="left" size="25"  @click="back"></uni-icons>
					<view class="">明细列表</view>
					<view class="w20"></view>
				</view>
			</view>
		</view>
		<view class="bgF5 h30"></view>
		<view class="bgF5 ">
			<view class="bgF5">
				<view class="selView mt10" >
					<view class="">筛选</view>
					<view class="ml30">
						<selectLay :value="tval" placeholder="全部" :options="datalist" @selectitem="selectitem" />
					</view>
				</view>
			</view>
			<view class="mt30 bg-whilt p30 text36" v-for="item in [1,2,3,4]" :key="item">
				<view class="flex between">
					<view class="col666">材料名称</view>
					<view class="col-black">热镀锌钢管</view>
				</view>
				<view class="bgBor"></view>
				<view class="flex between">
					<!-- left -->
					<view class="leftRight">
						<view class="col999">
							<view class="mt30">项目编号</view>
							<view class="mt30">规格型号</view>
							<view class="mt30">材料编号</view>
							<view class="mt30">数量</view>
							<view class="mt30">含税单价</view>
						</view>
						<view class="col-black text-right">
							<view class="mt30">123456</view>
							<view class="mt30">DN15</view>
							<view class="mt30">ABC123</view>
							<view class="mt30">666</view>
							<view class="mt30">666,666</view>
						</view>
					</view>
					<!-- right -->
					<view class="leftRight">
						<view class="col999">
							<view class="mt30">单位</view>
							<view class="mt30">品牌</view>
							<view class="mt30">档次</view>
							<view class="mt30">类型</view>
							<view class="mt30">材料总价</view>
						</view>
						<view class="col-black text-right">
							<view class="mt30">m</view>
							<view class="mt30">某某某</view>
							<view class="mt30">国标</view>
							<view class="mt30">钢材</view>
							<view class="mt30">666,666</view>
						</view>
					</view>
				</view>
				<view class="mt30"></view>
				<view class="bgBor"></view>
				<view class="col999 text24">
					<view class="">备注</view>
					<view class="mt20">在技术创新方面，我们始终紧跟时代步伐，积极引进和应用先进 的消防技术和设备。无论是智能化的火灾报警系统、高效的灭火 设备，还是先进的消防监控软件，我们都能迅速将其融入到施工 项目中，为客户提供最前沿、最可靠的消防解决方案。</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import selectLay from '@/uni_modules/select-lay/components/select-lay/select-lay.vue'
	export default {
		components:{selectLay},
		data() {
			return {
				// 状态栏高度
				statusBarHeight: 0,
				// 导航栏高度
				navBarHeight: 82 + 11,
				title: 'Hello',
				show: false,
				//模拟数据列表
				datalist: [{
						label: "label1",
						value: "value1"
					},
					{
						label: "label2",
						value: "value2"
					},
					{
						label: "label3",
						value: "value3"
					}
				],
				tval: "",
				
			}
		},
		created() {
			//获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
		},
		onLoad() {

		},
		methods: {
			selectitem(index, item) {
				console.log(item)
				if (index >= 0) {
					this.tval = item.value;
				} else {
					this.tval = ""
				}
			},
			back() {
				console.log('返回')
				uni.navigateBack()
			},
		}
	}
</script>

<style>
	.text-right{
		text-align: right;
	}
	.w36{
		width: 36rpx;
	} 
	.h36{
		height: 36rpx;
	}
	
	.h30{
		height: 30rpx;
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
	
	
	.leftRight{
		width: 43%;
		font-size: 28rpx;
		display: flex;
		justify-content: space-between;
		/* border: 1px solid red; */
		padding-bottom: 30rpx;
	}
	.bgBor{
		background-color: #F5F5F5;
		height: 2rpx;
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
	.mt30{
		margin-top: 30rpx;
	}
	.ml30{
		margin-left: 30rpx;
	}
	.selView {
		display: flex;
		align-items: center;
		padding: 15rpx;
		background-color: white;
	}
	.mt10{
		margin-top: 10rpx;
	}
	.w20 {
		width: 20rpx;
	}

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

	.topTitle {
		text-align: center;
		height: 88rpx;
		line-height: 88rpx;
		font-size: 36rpx;
		color: black;
		background-color: white;
		display: flex;
		justify-content: space-between;
	}

	.p30 {
		padding: 30rpx;
	}

	.bgF5 {
		background-color: #f5f5f5;
	}

</style>