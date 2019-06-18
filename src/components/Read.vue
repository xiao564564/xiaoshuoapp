<template>
	<div>
		<van-nav-bar class="nav-top" title="分类"/>
			<p>男生</p>
			<div>
				<van-row>
					<van-col span="24">
						<div @click="goRank(i)" v-for="i in classification" :key="i.name" class="box">
						<p class="read-size">{{i.name}}</p>
						<p class="read-hot">{{i.bookCount}}</p>
						</div>
					</van-col>
				</van-row>
			</div>
	</div>
</template>

<script>
	
	const cl = "/api/cats/lv2/statistics"
	
	export default {
		name:'Read',
		data(){
		return {
			classification:[]
			 };
		},
		
		created(){
			this.axios(cl).then(res => {
			
			this.classification = res.data.male
			})
		},
		
		methods:{
			goRank(i){
				this.$router.push({path:'/Rank',query:{data:i}})	
			}
		}
			
	}
</script>

<style scoped>
	.nav-top{
		width: 100%;
		height: 50px;
		background: #1989FA;
		margin-bottom: 20px;
	}
	p{
		text-align: center;
		margin: 0;
	}
	.box{
		border: 1px solid #7D7E80;
		width: 30%;
		height: 45px;
		float: left;
		margin: 20px 5px 10px 5px;
	}
	.read-size{
		font-size: 15px;
		margin-top: 2px;
		color: #000000;
		font-weight: 700;
	}
	.read-hot{
		font-size: 13px;
		color: #7D7E80;
	}
</style>
