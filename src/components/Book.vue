<template>
		<div class="box">
		<div class="search">首页</div>
		<van-swipe :autoplay="3000" indicator-color="white">
			  <van-swipe-item >
				  <img class="auto-img" src="../assets/img/1.jpg">
			  </van-swipe-item>			  <van-swipe-item>
			      <img class="auto-img" src="../assets/img/2.jpg">
			  </van-swipe-item>			  <van-swipe-item>
				  <img class="auto-img" src="../assets/img/3.jpg">
			  </van-swipe-item>			  <van-swipe-item>
				  <img class="auto-img" src="../assets/img/4.jpg">
			  </van-swipe-item>			  <van-swipe-item>
				  <img class="auto-img" src="../assets/img/5.jpg">
			  </van-swipe-item>		</van-swipe>
			  
			  
				  <div class="recommended">
					  <span class="tj">-主编推荐-</span>
				  </div>
					<van-row >
					  <van-col span="24" class="a">
						<div v-for="(i,index) in books" :key="index" @click="go(i)">
						<img class="auto-img" :src="img + morebook[0][bookindex[index]].cover" alt="">
						<span class="font1">{{morebook[0][bookindex[index]].minorCate}}</span>
						<span class="font2">{{morebook[0][bookindex[index]].title}}</span>
						</div>
						
					  </van-col>
					</van-row>
					<van-button class="exchange" size="large" @click="gochange()">- 换一换 -</van-button>
				  <div class="recommended">
					  <span class="tj">-每日推荐-</span>
				  </div>
					<van-row >
					  <van-col span="24" class="a">
						<div v-for="(i,index) in increasebook" @click="go(i)" :key="index">
						<img class="auto-img" :src="img + i.cover" alt="">
						<span class="font1">{{i.minorCate}}</span>
						<span class="font2">{{i.title}}</span>
						</div>
						
					  </van-col>
					</van-row>					
				
						<van-button class="exchange tuij" size="large" @click="goMore()">- 查看更多 -</van-button>
		</div>
	

</template>
<script>
	const bk = "/api/ranking/54d43437d47d13ff21cad58b"
	
	export default {
		name: 'Book',
		data() {
		return {
			books: [],
			increasebook:[],
			img: 'http://statics.zhuishushenqi.com',
			changebook : [],
			morebook :[],
			bookindex:[0,1,2,3],
			res:null
		};
		},		
		created() {
			
			
			
			var ls = JSON.parse(localStorage.getItem("localdata")) 
			
			if(ls===undefined || ls === null){
			this.axios(bk).then(res => {
				this.res = res
				
				localStorage.setItem("localdata",JSON.stringify(res))


				this.morebook.push(res.data.ranking.books)
				for(var i = 0; i < res.data.ranking.books.length;i++){
					
					if(i === 4) {
						break;
					}
					
					this.books.push(res.data.ranking.books[i])
					this.increasebook.push(res.data.ranking.books[i+4])
					
				}
			})
			return
			}
			
			this.res = ls
			this.morebook.push(this.res.data.ranking.books)
			for(var i = 0; i < this.res.data.ranking.books.length;i++){
				
				if(i === 4) {
					return;
				}
				
				this.books.push(this.res.data.ranking.books[i])
				this.increasebook.push(this.res.data.ranking.books[i+4])
			}
			
		},
		
		methods:{
			gochange(){	
				if(this.changebook.length == 4){
					this.changebook = []
				}
				this.books=[]
				for(var i = 0; i < 4; i++){
					var sdsad = Math.floor((Math.random()*this.morebook[0].length))
					this.changebook.push(sdsad)
					this.books.push(this.res.data.ranking.books[sdsad])
				}
				this.bookindex = this.changebook
				/* console.log(this.morebook[0]) */
				/* console.log(this.changebook) */
				
			},
			
			goMore(){
				 this.$router.push({path:'/More'})
			},
			go(i) {
				this.$router.push({path: '/Detailed', query: {data: i}})
			}
			
		}
		
	}

</script>

<style>

	.auto-img{
		width: 100%;
	}
	.search{
		width: 100%;
		height: 50px;
		background: #1989FA;
		color: #D6E9C6;
		text-align: center;
		line-height: 50px;
		margin-bottom: 1px;
	}
	.recommended{
		width: 100%;
		background: #E5E5E5;
	}
	.exchange{
		list-style: none;
		width: 100%;
		background: skyblue;
	}
	.tuij{
		margin-bottom: 50px;
	}
	.a>div{
		width: 20%;
		height: 180px;
		float: left;
		margin: 15px 8px 0 10px;
	}
	.tj{
		height: 50px;
		text-align: center;
		display: block;
		color: #F56723 ;
		margin: 0 0 0 0;
		line-height: 50px;
	}
	.font1{
		font-size: 14px;
		font-weight: 800;
	}
	.font2{
		font-size: 13px;
		display:inline-block
	}
</style>
