<template>
	<div>
		<form>
			<van-search ref="search" v-model="keyWord" placeholder="输入小说名字" show-action background="#1989FA" @focus="focusFn">
				<div slot="action" @click="search">搜索</div>
			</van-search>
		</form>
		<div>
			<van-row>
				<van-col span="24">
					<div class="float" v-for="(i,index) in searchProducts " :key="index" @click="goDetailed(i)">
					<div>
					<img class="book" :src="img + i.cover" >
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
		name: 'Search',
		
		data(){
			return {
				keyWord: '',
				
				isFocus: true,
				
				searchProducts:[],
				
				img: 'http://statics.zhuishushenqi.com'	
			}
		},
		
		created(){
			
		},
		
		methods:{
			search(){
				
				this.isFocus = false;
				
				if (this.keyWord == '' || this.keyWord == undefined) {
					this.$toast('搜索关键不能为空');
					return;
				}
						
				var match = new RegExp('('+ this.keyWord +')','img')
				
				var productDatas = JSON.parse(localStorage.getItem('localdata')).data.ranking.books
				
				
				productDatas.forEach(v => {
					if (match.test(v.title)) {
						this.searchProducts.push(v);
					}
				})
				
				console.log(productDatas)
				
				
				console.log(match)
			},
			
			focusFn() {
				this.isFocus = true;
			},
			goDetailed(i){
				this.$router.push({path: '/Detailed', query: {data: i}})
			}
		}
	}
</script>

<style lang="less" scoped>
	.van-search__content{
		background-color: #fff;
	}

	.van-search__action{
		color: #fff;
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
