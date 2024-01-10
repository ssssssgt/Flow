<template>
  <div class="Content">
    <div class="logo">
      <img src="../assets/logo.png" width="230px" height="auto" >
    </div>
     <div class="title">
      <div class="title1">流  量  计  选  型</div>
      <div class="title2">Flowmeter  Selection</div> 
      <div class="container">
      <!-- 标题 -->
      <span class="container-title1"> 产品</span>
      <span class="container-title2"> 帮助与支持</span>
      <span class="container-title3"> 关于我们</span>
      <!-- 下拉菜单内容 -->
      </div>
    </div>
    

    </div>

   
</template>

<script>
export default {
  name: 'MyHeader',
};
</script>

<style lang="scss">
.Content{
  width: auto;
  height: 150px;
  border-bottom: 1px solid rgb(217, 210, 210);
  background-image:url("../assets/Header.png");

  




  .logo{
    margin-top:15px;
    height: 100px;
    margin-left:1100px;
    // background-color: rgb(255, 136, 0);
  }
 

  .title {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  background-color: #ffff;
  height: 130px;
  line-height: 30px;
  
 
.title1{
  font-size: 52px;
  // text-align:left;
  margin-left: 45px;
  font-family: "-apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif,SimHei,SimSun";
  line-height: 55px;
  // font-style: italic;
  font-weight: bold;
  color: rgb(24, 102, 170);
  transform: translateY(58%);
  margin-top: -120px;
  
}
.title2{
  font-size: 38px;
  // text-align:left;
  margin-left: 45px;
  margin-top: 15px;
  font-family: "Copperplate";
  line-height: 55px;
  //  font-style: italic;
  font-weight: bold;
  color: rgb(24, 102, 170);
  transform: translateY(50%);
}   
.container{
  margin-left:1000px;
  margin-top: -14.8px;
  font-family:'Raleway',sans-serif;
 letter-spacing: 4px;

  .container-title1{
  margin-left:45px;
  margin-top: -14.8px;
  }
  .container-title2{
    margin-left:35px;
  }
  .container-title3{
    margin-left:30px;
  }
}


//   h1 {
//   margin-left: 20px;
//   display: inline-block;
//   font-family: "Calibri Light ";
//   font-weight: bold;
// }

}

}






</style>