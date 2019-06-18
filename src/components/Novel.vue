<template>
	<div><transition name="fade">
		<div v-if="isshow" class="novel-nav-top">
			<button @click="go()" class="novel-button">返回</button>
		</div>
		</transition>
		<transition name="fade">
		<div v-if="isshow"  class="novel-bottom">
			<div class="novel-bottom-color">
				<p>默认</p>
				<p>夜间</p>
				<p>护眼</p>
			</div>
			<div class="novel-bottom-title">
			<p @click="goPre()">上一章</p>
			<p>目录</p>
			<p @click="goNext()">下一章</p>
			</div>
		</div>
		</transition>
		<div @click="show()" class="read">
			<div class="book-body-div" v-for="(i,index) in this.bookcontent" :key = "index">
			<p class="book-title">{{i.title}}</p>
			<p class="book-body">{{i.body}}</p>
<!-- 			<p class="book-title">{{bookcontent[index+1].title}}</p>
			<p class="book-body">{{bookcontent[index+1].body}}</p>
			<p class="book-title">{{bookcontent[index+2].title}}</p>
			<p class="book-body">{{bookcontent[index+2].body}}</p> -->
			</div>
			</div>
	</div>
</template>

<script>
	export default {
		name:'novel',
		data(){
			return{
				isshow: true,
				
				booktitle:[],
				
				bookcontent:[],
				
				index:0,
				
			}
		},
		
		created(){
			
			if(this.$route.query.data._id == undefined){
				console.log(this.$route.query)
			this.axios("/api/mix-atoc/"+ this.$route.query.data+"?view=chapters").then(res=>{
				for(var i = 0; i < res.data.mixToc.chapters.length; i++){
					this.booktitle.push(res.data.mixToc.chapters[i])
				}	
				for(var i = 0; i < this.booktitle.length; i++){
					
					var links = encodeURIComponent(this.booktitle[i].link)
					this.axios("chapterup/chapter/"+ links + '').then(res =>{
						this.bookcontent.push(res.data.chapter)  
					})
				}			
			})				
			
			/* console.log(this.bookcontent) */
				
			}
			else{
			this.axios("/api/mix-atoc/"+ this.$route.query.data._id +"?view=chapters").then(res=>{
				
				console.log(res.data.mixToc.title)
				for(var i = 0; i < res.data.mixToc.chapters.length; i++){
					this.booktitle.push(res.data.mixToc.chapters[i])
					
				}	
				for(var i = 0; i < this.booktitle.length; i++){
					var links = encodeURIComponent(this.booktitle[i].link)
					this.axios("chapterup/chapter/"+ links + '').then(res =>{
							this.bookcontent.push(res.data.chapter)  
					})
				}
			})}
		},
		
		methods:{
			go(){
				if(this.$route.query.data._id == undefined){
					this.$router.push({path:'My'})
				}else{
				this.$router.push({path:'/Detailed',query:{data:this.$route.query.data}})
				}
			},
			show(){
				if(this.isshow == true){
					this.isshow = false;
				}else{
					this.isshow = true;
				}
			},
			goNext(){
				this.index++
			},
			goPre(){
				this.index--
			}
		}
	}
</script>

<style scoped>
	.novel-nav-top{
		width: 100%;
		height: 50px;
		background: #1989FA;
		z-index: 10;
		position: fixed;
	}
	.novel-button{
		width: 25%;
		height: 50px;
		border: none;
		background: #1989FA;
		color: #DDDDDD;
	}
	.novel-bottom{
		width: 100%;
		height: 120px;
		background: #1989FA;
		position: fixed;
		bottom: 0;
	}
	.read{
		width: 100%;
		height: 800px;
		position: absolute;
		top: 0;
		z-index: -1;
	}
	.novel-bottom-color{
		float: left;
		width: 100%;
	}
	.novel-bottom-title{
		float: left;
		width: 100%;
	}
	.novel-bottom p{
		width: 30%;
		height: 30px;
		margin: 15px 5px;
		float: left;
		text-align: center;
	}
	.read p {
		width: 100%;
	}
	.book-title{
		text-align: center;
		font-size: 18px
	}
	.book-body-div{
		width: 90%;
		margin: 0 auto;
	}
	.book-body{
		text-indent:2em;
		font-size: 14px;
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to 
	{
	opacity: 0;
	}
</style>
