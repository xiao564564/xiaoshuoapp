<template>
	<div>
		<van-nav-bar class="nav-top"
		:title= this.$route.query.data.name
		left-text="返回"
		@click-left="onClickLeft"
		left-arrow/>
		<div>
			<van-row>
				<van-col span="24">
					<div class="float" v-for="i in books[0]" :key="i._id" @click="goDetailed(i)">
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
	export default {
		name:'Rank',
		
		data(){
			return{
				books:[],
				img: 'http://statics.zhuishushenqi.com'	
			}
		},
		
		created(){
			
			var bookname = this.$route.query.data.name
			this.axios('/api/book/by-categories?gender=male&type=hot&major=' + bookname + '&minor=&start=0&limit=20').then(res=>{
			this.books.push(res.data.books)
			console.log(this.books)
			
			localStorage.setItem('BookName',JSON.stringify(bookname))	
			JSON.parse(localStorage.getItem('BookName'))	
			})
		},
		
		methods:{
			onClickLeft(){
				this.$router.push({path:'/Read'})
			},
			goDetailed(i){
				this.$router.push({path: '/Detailed', query: {data: i}})
			}
		}
	}
</script>

<style scoped>
	.nav-top{
		width: 100%;
		background: #1989FA;
		color: #DDDDDD;
		
	}
	.van-nav-bar__text{
		color: #DDDDDD;
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
