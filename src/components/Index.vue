<template>
		<div>
			<div>
			<van-tabbar v-model="active">
				<van-tabbar-item to='./Book' icon="home-o">书城</van-tabbar-item>
				<van-tabbar-item to='./My' icon="user-o" >书架</van-tabbar-item>
				<van-tabbar-item to='./Read'icon="search" >分类</van-tabbar-item>
				<van-tabbar-item to='./Search'icon="search" >搜索</van-tabbar-item>
			</van-tabbar>
			</div>
			<router-view></router-view>
		</div>
</template>

<script>
	export default {
	  name: 'Index',
			data(){
				
				return{
					active: 0,
					isshow: true
					}
			}
	}
</script>

<style>
		
</style>
