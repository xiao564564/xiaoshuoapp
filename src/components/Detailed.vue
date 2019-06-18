<template>
	<div>
		 <van-nav-bar class="bookdetailed"
			title="书籍详细"
			left-text="返回首页"
			left-arrow
			@click-left="onClickLeft"/>
			
			<div>
				<van-row>
					<van-col span="24">
						<div class="float" v-for="i in deta" :key="i._id">
							<div>
							<img class="img-auto" :src="img + i.cover" >
							</div>
							<div class="width">
								<h3>{{i.title}}</h3>
								<p class="bookauthor">{{i.author}}</p>
								<p class="booktype">{{i.majorCate}}&nbsp;{{i.minorCate}}</p>
								<p class="hot">{{'热度'+ i.retentionRatio +'%'}}</p>
							</div>
							<div class="bookshort">
							<p class="bookintroduce">书籍简介</p>
							<p class="shortp">{{i.shortIntro}}</p>
							</div>
							<div class="buttonstyle">
								<van-button @click="goNovel()" class="buttonstyle-free" type="default">免费试读</van-button>
								<van-button @click="myBook()" class="buttonstyle-order" type="default">加入书架</van-button>
								<van-button class="buttonstyle-order" type="default">缓存</van-button>
							</div>
						</div>
					</van-col>
				</van-row>
			</div>
			
	</div>
</template>

<script>
	export default {
		name:'Detailed',
		
		data(){
			return{
			deta: [],
			img: 'http://statics.zhuishushenqi.com',
			Book: []
		}
	},
		created() {
			this.deta = this.$route.query
			this.Book.push(this.deta)
		},
		
		methods:{
			onClickLeft(){
				this.$router.push({path:'/Book'})
			},
			goNovel(){
				this.$router.push({path:'/Novel',query:{data:this.$route.query.data}})	
			},
			myBook(){
				
				
				var a = JSON.parse(localStorage.getItem('MyBook'))
				if(a == undefined){
					var bb = this.Book
					localStorage.setItem('MyBook',JSON.stringify(bb))
					return
				}else{
					a.push(this.Book)
				}
				localStorage.setItem('MyBook',JSON.stringify(a))
				
				
			}
		}
	}
</script>

<style>
.img-auto{
	width: 100px;
	height: 140px;
	margin: 15px 15px 15px 15px;
}
.detailed{
	border: 1px solid #000000;
	margin-top: 30px;
	height: 500px;
}
.detailed-a{
	width: 140px;
	height: 180px;
}
.float{
		overflow: hidden;
}
.float>div{
		float: left;		
}
.width{
		width: 60%;
		
}
.bookdetailed{
	border-bottom: 1px solid #7D7E80;
}
.bookshort{
	width: 100%;
	border-top: 1px solid #7D7E80;
	border-bottom: 1px solid #7D7E80;
}
.shortp{
	 text-indent:2em; 
	 padding:0px; 
	 margin:10px 8px;	 
	 line-height: 25px;
}

.van-nav-bar__left{
	font-size: 16px;
}
.bookintroduce{
	font-size: 16px;
	font-weight: 800;
	margin: 10px auto;
	width: 70px;
}
.booktype{
	font-size: 13px;
}
.bookauthor{
	font-size: 15px;
	font-size: large;
}
.hot{
	font-size: 15px;
}
.buttonstyle{
	width: 100%;
	margin: 15px 0;
}
.buttonstyle-free{
	color: #DDDDDD;
	background: #ED6A0C;
	width: 28%;
	border-radius: 8px;
	margin-left: 10px;
}
.buttonstyle-order{
	border: 1px solid #7D7E80;
	width: 28%;
	border-radius: 8px;
	margin-left: 15px;
}
</style>
