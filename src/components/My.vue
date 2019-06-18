<template>
	<div>
		<div class="mynav-top">
			<p class="top-size">我的书架</p>
			<p class="exchange" @click="bookcheck">编辑</p>
			</div>
			<div class="detail">
				<p v-if="details" class="detail-p"></p>
				<p v-if="detail" class="detail-p" @click="removeBook()">删除</p>
			</div>
			<div>
				<div v-if="isshow" class="mybook">
				<img class="img-auto" src="../assets/img/mybook.png" alt="">
				<p class="mybook-fontsize">你的书架空空如也,快去书城添加小说吧！</p>
			</div>
			<div  v-if="bookshow" class="book" v-for="(i,index) in mybooks" :key='index'>
					<div @click="goNovel()" class="bookdetailed">
					<img class="img-auto" :src="img + i.data.cover">
					</div>
					<p ref='p' class="bookname">{{i.data.title}}</p>
					<input ref="check" class="bookcheck" type="checkbox" v-if="bookdefault">
				</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'My',
		data(){
			return{
				
			details: true,
						
			mybooks:[],
			
			img: 'http://statics.zhuishushenqi.com',
			
			isshow:	false,
			
			bookshow: true,
			
			bookdefault:false,
			
			detail: false
			}
		},
		
		created(){
					
			var a = JSON.parse(localStorage.getItem('MyBook')) 
			
			for(var i = 0; i < a.length; i++){
				for(var j = 0; j <a[i].length; j++){
					this.mybooks.push(a[i][j])
				}
			}	
			
			console.log(this.mybooks)
			
			if(this.mybooks.length == 0){
				this.isshow = true
				this.bookshow = false
			}
		},
		
		mounted(){
			
		},
		
		methods:{
			
			removeBook(){
				
				var Bookproduct = this.mybooks
				
						for(var i = 0; i < Bookproduct.length; i++){
							
							for(var n = 0; n <this.$refs.check.length; n++){
		
							 if(this.$refs.check[n].checked == true){
								
								Bookproduct.splice(i, 1);
						}		
					}
					
					if(this.mybooks.length == 0){
						this.isshow = true
						this.bookshow = false
					}
				}
				
				localStorage.removeItem('MyBook') 
				
					
				 localStorage.setItem('MyBook',JSON.stringify(this.mybooks))			
			},
			
			bookcheck(){
				if(this.bookdefault == false && this.detail == false){
					this.bookdefault = true
					this.detail = true
					this.details = false
				}else{
					this.bookdefault = false
					this.detail = false
					this.details = true
				}
				
			},
			
			goNovel(){
				this.$router.push({path:'/Novel',query:{data:this.mybooks[0].data._id}})	
			}
			
		}
			
	}
</script>

<style scoped>
	.mynav-top{
		background: #1989FA ;
	}
	.top-size{
		text-align: center;
		height: 50px;
		line-height: 50px;
		color: #DDDDDD;
		width: 40%;
		margin: 0;
		display: inline-block;
		margin-left: 6.5rem;
	}
	.img-auto{
		width: 100%;
		margin: 0;
		height: 140px;
	}
	.mybook{
		width: 150px;
		height: 80px;
		margin: 50px auto;
	}
	.mybook-fontsize{
		font-size:12px;
		color: #7D7E80;
	}
	.book{
		margin-top: 10px;
		margin-bottom: 20px;
		margin-left:20px;
		width: 26%;
		height: 160px;
		float: left;
		border: 1px solid #000000;
	}
	.bookdetailed{
		width: 100%;
		height: 120px;
	}
	.bookname{
		height: 20px;
		width: 100%;
		line-height: 20px;
		margin-top: 20px;
		margin-bottom: 0;
		text-align: center;	
		font-size: 13px;
		overflow: hidden;
	}
	.bookcheck{
		margin: 15px auto;
		width: 100%;
	}

	.exchange{
		margin: 0 auto;
		height: 50px;
		line-height: 50px;
		color: #DDDDDD;
		float: right;
		width: 45px;
		background-color: #1989FA ;
	}
	.detail{
		width: 100%;
		margin: 0;
	}
	.detail-p{
		width: 97%;
		height: 30px;
		line-height: 30px;
		margin: 0;
		text-align: right;
		
	}
</style>
