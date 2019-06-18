<template>
	<div>
			<van-nav-bar class="nav-top"
				title="每日推荐"
				left-text="返回"
				@click-left="go()"
				left-arrow/>
		<div>
			<van-row>
				<van-col span="24">
					<div class="float" v-for="i in books" :key="i._id" @click="goDetailed(i)">
					<div>
					<img  class="book" :src="img + i.cover" >
					</div>
					<div class="width">
					<p class="title">{{i.title}}</p>
					<p class="style">{{i.minorCate}}</p>
					<p class="author">{{i.author}}</p>
					<p class="short">{{i.shortIntro}}</p>
					</div>
					</div>
				</van-col>
			</van-row>
		</div>
	</div>
</template>
<script>
	
	const bk = "/api/ranking/54d43437d47d13ff21cad58b"
	
	export default {
		
		name: 'more',
		
		
		data(){
			return {				
				books: [],
				img: 'http://statics.zhuishushenqi.com'			
			}
		},
			
			created(){
				this.axios(bk).then(res => {
					this.books = res.data.ranking.books
				})
		},
		
		methods:{
			
			go(){
				this.$router.push({path:'/Book'})
			},
			goDetailed(i){
				this.$router.push({path: '/Detailed', query: {data: i}})
			}
		}
	}
</script>

<style>
	.nav-top{
		width: 100%;
		height: 50px;
		border-bottom: 1px solid #000000;
	}
	.book{
		width: 100px;
		height: 140px;
		border: 1px solid #000000;
		margin: 15px 15px 15px 15px;
	}
	.title{
		font-size: 17px;
		font-weight: 800;
	}
	.author{
		font-size: 12px;
		font-weight: 500px;
	}
	.style{
		font-size: 14px;
		font-weight: 600px;
	}
	.short{
		font-size: 12px;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		
	}
	p{
		margin: 15px 0;
	}
		
	.float{
		overflow: hidden;
		border-bottom: 1px solid #7D7E80;
	}
	.float>div{
		float: left;
		
	}
	.width{
		width: 60%;
	}
</style>
