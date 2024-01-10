<template>
  <div id="MyFooter">
    <div>
      <Db/>
    </div>
    <div class="re1">
      <ExportWord2/>
    </div>
    <div class="re">
      <!-- <el-button type="file" @click="handleFileUpload()">点击导入</el-button> -->
      <input type="file" @change="handleFileUpload">
      </div>
    <div class="part1">
      <selectType :projectData="projectData"></selectType>
    </div>
    <div class="part2">
     <fluid :processData="processData" :outcmomeData="outcmomeData" :fluidData="fluidData">
     </fluid>
     <size :sizeData="sizeData"></size>  
    </div>
    <div class="part3">
      <chat :chartData="chartData"></chat>
   <loss :measurementData="measurementData" :lossImage="lossImage"></loss> 
  </div>
  <div class="part4">
    <specs :speciImage="speciImage" :speciData="speciData" :table8Data="table8Data" :accessData="accessData"></specs>
  </div>
   <div class="part5">
     <draw :dimensionalData="dimensionalData" :dimenData="dimenData" :materialData="materialData" :drawImages="drawImages"></draw> 
    </div>
  </div>
</template>
<script>
import mammoth from 'mammoth'
import { Divider as ElDivider } from 'element-ui'
import Chat from '@/components/information/Chat'
import Process from '@/components/information/Process'
import Fluid from '@/components/information/Fluid'
import Outcome from '@/components/information/Outcome'
import Size from '@/components/information/Size'
import Loss from '@/components/information/Loss'
import Specs from '@/components/information/Specs'
import Draw from '@/components/information/Draw'
import selectType from '@/pages/select-type.vue'
import ExportWord2 from '@/components/export-word2.vue'
import Db from '@/components/Db.vue'
export default {
  name: 'MyFooter',
  components: {
    Process,
    Fluid,
    Outcome,
    Size,
    Chat,
    Loss,
    Specs,
    Draw,
    selectType,
    ElDivider,
    ExportWord2,
    Db
},
  data() {
    return {
      processData:[],//存储解析后工艺参数的结果
      fluidData:[],//存储解析后的介质参数结果
      sizeData:[],//解析存储后的多口径比对结果
      chartData:[],//解析存储后的流量计图表
      measurementData: [],//存储解析后的测量误差及压力损失
      outcmomeData: [],//存储解析后的计算结果
      projectData: [],//存储解析后的项目信息
      table8Data: [], // 存储表格8的数据,动态标题
      speciData:[],//存储解析后的流量计规格
      accessData:[],//存储解析后的流量计附件
      dimensionalData:[],//存储解析后的结构尺寸图
      dimenData:[],//存储解析后的流量计安装尺寸
      materialData:[],//存储解析后的流量计材质
      //存储不同页面的图片
      drawImages:[],
      speciImage:[],
      lossImage:[],
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      mammoth.convertToHtml({ arrayBuffer: file })
        .then((result) => {
          const html = result.value;
          // 使用cheerio加载HTML
          const cheerio = require('cheerio');
          const $ = cheerio.load(html);
          // 存储图片信息的数组
          const images = [];
          // 获取HTML中的图片信息
          $('img').each((index, element) => {
            const src = $(element).attr('src');
            const alt = $(element).attr('alt');
            const imageInfo = { src, alt };
            images.push(imageInfo);
            // 从HTML中删除图片节点，以避免影响表格结构的解析
            $(element).remove();
          });
          console.log('保存的图片信息：', images);
          // 只选择最后两张图片存储到drawImage中
          this.drawImages = images.slice(-2);
          console.log(this.drawImages)
          //放第一张照片
          this.lossImage=[images[0]]
          console.log("这是第一张照片",this.lossImage)
          //放第二张图片
          this.speciImage=[images[2]]
          console.log("这是第二张照片",this.speciImage)
          // 从HTML中删除所有的图片节点
          $('img').remove();
          // console.log('删除成功')

          // 获取处理后的HTML内容
          const processedHtml = $.html();
          // 使用cheerio加载处理后的HTML
          const $processed = cheerio.load(processedHtml);

          // 获取所有表格元素
          const tables = $processed('table');
          // console.log(tables)
          // 处理表格部分

          // 找到页面中的第八个表格并提取数据
          const table8 = $('table').eq(9); // eq()从0开始计数，所以使用7来表示第八个表格
          const rows = table8.find('tr');

          const tableData = [];

          // 遍历每一行并提取数据
          for (let i = 1; i < rows.length; i++) {
            const row = $(rows[i]);
            const cells = row.find('td');

            // 提取第一列的值作为键，提取第二列的值作为对应的值
            const key = $(cells[0]).text().trim();
            let value = $(cells[1]).text().trim();
            if (key.includes('输出方式')) {
              value = value.split(',')
            }else if(key.includes('仪表类型')){
              value = value.split(',')
            }else if(key.includes('功能类型')){
                  value = value.split(',');
            }else if(key.includes('连接方式')){
                  value = value.split(',');
            }else if(key.includes('表体材质')){
                  value = value.split(',');
            }else if(key.includes('公称口径')){
                  value = value.split(',');
            }else if(key.includes('公称压力')){
                  value = value.split(',');
            }else if(key.includes('探头材质')){
                  value = value.split(',');
            }else if(key.includes('防')){
                  value = value.split(',');
            }else if(key.includes('供电电源')){
                  value = value.split(',');
            }else if(key.includes('通讯功能')){
                  value = value.split(',');
            }else if(key.includes('通讯接口')){
                  value = value.split(',');
            }else if(key.includes('仪表结构')){
                  value = value.split(',');
            }
            // 将键值对存储到对象中
            tableData[key] = value;
          }
          console.log(tableData);
          this.table8Data = tableData
          tables.each((index, element) => {
            const table = $processed(element);
            const tableName = table.find('tr:first-child td:first-child strong').text().trim();
            if (tableName == '测量误差及压力损失 Measurement error & Pressure loss') {
              // 获取表格中的所有行
              const rows = table.find('tr');
              // console.log(rows)
              // 创建一个对象用于存储表格数据
              const tableData = [];
              // 获取第一行的所有单元格作为键
              const keys = $(rows[1]).find('td').map((index, element) => $(element).text().trim()).get();
              console.log(keys)
              // 遍历每一行（跳过第一行）
              for (let i = 2; i < rows.length; i++) {
                const row = $(rows[i]);
                const cells = row.find('td');
                // 将剩余单元格的文本内容作为值存储到对应的键里面
                for (let j = 0; j < cells.length; j++) {
                  const value = $(cells[j]).text().trim();
                  if (!tableData[keys[j]]) {
                    tableData[keys[j]] = [];
                  }
                  tableData[keys[j]].push(value);
                }
              }
              // 在控制台打印提取的表格数据
              // console.log('测量误差及压力损失表格数据：', tableData);
              // 对提取的表格数据进行进一步处理或展示
              this.measurementData = tableData
              console.log(this.measurementData)
            } 
            else if (tableName == '计算结果 Calculated results') {
              // 处理计算结果、多口径比对、介质参数和流量计图表等逻辑
              const rows = table.find('tr');
              // 创建一个对象或数组用于存储表格数据
              const tableData = [];
              // 遍历每一行并提取数据
              for (let i = 2; i < rows.length; i++) { // 注意这里可能需要调整起始索引
                const row = $(rows[i]);
                const cells = row.find('td');
                // 提取第一列的值作为第一层的键
                const key1 = $(cells[0]).text().trim();
                // 提取每个单元格的值，并根据需要存储到相应的数据结构中
                for (let j = 1; j < cells.length; j++) {
                  const cell = $(cells[j]);
                  // 提取该单元格的值，并将其存储到对象或数组中对应的键值下
                  const value = cell.text().trim();
                  const key2 = $(rows[1]).find('td').eq(j).text().trim();
                  const key = `${key1}-${key2}`;
                  if (!tableData[key1]) {
                    tableData[key1] = {};
                  }
                  tableData[key1][key2] = value;
                }
              }
              // console.log(tableData);
              this.outcmomeData = tableData;
              // console.log(this.outcmomeData)
            } else if (tableName == '项目信息 Project') {
              const rows = table.find('tr');
              const tableData = [];
              // 遍历每一行并提取数据
              for (let i = 1; i < rows.length; i++) {
                const row = $(rows[i]);
                const cells = row.find('td');

                // 提取第一列的值作为键，提取第二列的值作为对应的值
                const key = $(cells[0]).text().trim();
                let value = $(cells[1]).text().trim();
                if (key === '流量计类型') {
                  value = value.split(','); // 将逗号分隔的字符串拆分成数组
                }
                // 将键值对存储到对象中
                tableData[key] = value;
              }
              // console.log(tableData);
              this.projectData = tableData
              // console.log("项目信息是",this.projectData)
            } else if (tableName == '工艺参数 Proccess parameter') {
              const rows = table.find('tr');
              const tableData = [];
              // 遍历每一行并提取数据
              for (let i = 1; i < rows.length; i++) {
                const row = $(rows[i]);
                const cells = row.find('td');
                // 提取第一列的值作为键，提取第二列的值作为对应的值
                const key = $(cells[0]).text().trim();
                let value = $(cells[1]).text().trim();
                if (key == '管道材质') {
                  value = value.split(','); // 将逗号分隔的字符串拆分成数组
                }else if(key=='介质名称'){
                  value = value.split(',');
                }
                // 将键值对存储到对象中
                tableData[key] = value;
              }
              // console.log(tableData);
              this.processData = tableData
              console.log("项目信息是",this.processData)
            }else if (tableName == '流量计规格 Specifications'){
              const rows = table.find('tr');
              const tableData = [];
              // 遍历每一行并提取数据
              for (let i = 1; i < rows.length; i++) {
                const row = $(rows[i]);
                const cells = row.find('td');

                // 提取第一列的值作为键，提取第二列的值作为对应的值
                const key = $(cells[0]).text().trim();
                let value = $(cells[1]).text().trim();
                // 将键值对存储到对象中
                if (key.includes('最高使用温度')) {
                  value = value.split(','); // 将逗号分隔的字符串拆分成数组
                }else if(key=='本体材质'){
                  value = value.split(',');
                }else if(key=='检测体材质'){
                  value = value.split(',');
                }else if(key=='安装方式'){
                  value = value.split(',');
                }else if(key=='温压补偿方式'){
                  value = value.split(',');
                }else if(key=='流量计防护等级'){
                  value = value.split(',');
                }else if(key=='准确度等级'){
                  value = value.split(',');
                }else if(key=='最高使用压力(Mpa)'){
                  value = value.split(',');
                }else if(key.includes('发生体')){
                  value = value.split(',');
                }else if(key=='流量计法兰材质'){
                  value = value.split(',');
                }else if(key=='电器接口形式'){
                  value = value.split(',');
                }else if(key=='流量计连接标准'){
                  value = value.split(',');
                }else if(key=='分体电缆长度'){
                  value = value.split(',');
                }else if(key=='插入式连接方式'){
                  value = value.split(',');
                }
                tableData[key] = value;
              }
              // console.log(tableData);
              this.speciData = tableData
              // console.log("1234",this.speciData)

            }else if (tableName == '流量计附件 Accessories'){
              const rows = table.find('tr');
              const tableData = [];
              // 遍历每一行并提取数据
              for (let i = 1; i < rows.length; i++) {
                const row = $(rows[i]);
                const cells = row.find('td');

                // 提取第一列的值作为键，提取第二列的值作为对应的值
                const key = $(cells[0]).text().trim();
                let value = $(cells[1]).text().trim();
                if (key === '流量配套法兰螺栓') {
                  value = value.split(','); // 将逗号分隔的字符串拆分成数组
                }else if(key==='流量配套密封垫片'){
                  value = value.split(',');
                }else if(key==='分体支架'){
                  value = value.split(',');
                }else if(key==='法兰螺栓材质'){
                  value = value.split(',');
                }else if(key==='垫片材质'){
                  value = value.split(',');
                }
                // 将键值对存储到对象中
                tableData[key] = value;
              }
              // console.log(tableData);
              this.accessData = tableData
              console.log(this.accessData)
              
            }else if (tableName == '结构尺寸图 Dimensional drawing'){
              const rows = table.find('tr');
              const tableData = [];
              // 遍历每一行并提取数据
              for (let i = 1; i < rows.length; i++) {
                const row = $(rows[i]);
                const cells = row.find('td');

                // 提取第一列的值作为键，提取第二列的值作为对应的值
                const key = $(cells[0]).text().trim();
                const value = $(cells[1]).text().trim();

                // 将键值对存储到对象中
                tableData[key] = value;
              }
              // console.log(tableData);
              this.dimensionalData = tableData
              // console.log(this.dimensionalData)
            }else if (tableName == '流量计安装尺寸 Dimensions'){
              const rows = table.find('tr');
              const tableData = [];
              // 遍历每一行并提取数据
              for (let i = 1; i < rows.length; i++) {
                const row = $(rows[i]);
                const cells = row.find('td');

                // 提取第一列的值作为键，提取第二列的值作为对应的值
                const key = $(cells[0]).text().trim();
                const value = $(cells[1]).text().trim();

                // 将键值对存储到对象中
                tableData[key] = value;
              }
              // console.log(tableData);
              this.dimenData = tableData
              // console.log(this.dimenData)

            }else if (tableName == '介质参数 Fluid properties'){
              const rows = table.find('tr');
              // 创建一个对象或数组用于存储表格数据
              const tableData = [];
              // 遍历每一行并提取数据
              for (let i = 2; i < rows.length; i++) { // 注意这里可能需要调整起始索引
                const row = $(rows[i]);
                const cells = row.find('td');
                // 提取第一列的值作为第一层的键
                const key1 = $(cells[0]).text().trim();
                // 提取每个单元格的值，并根据需要存储到相应的数据结构中
                for (let j = 1; j < cells.length; j++) {
                  const cell = $(cells[j]);
                  // 提取该单元格的值，并将其存储到对象或数组中对应的键值下
                  const value = cell.text().trim();
                  const key2 = $(rows[1]).find('td').eq(j).text().trim();
                  const key = `${key1}-${key2}`;
                  if (!tableData[key1]) {
                    tableData[key1] = {};
                  }
                  tableData[key1][key2] = value;
                }
              }
              // console.log(tableData);
              this.fluidData = tableData;
              // console.log(this.fluidData)


            }else if (tableName == '多口径比对 Compare sizes'){
              const rows = table.find('tr');
              // 创建一个对象或数组用于存储表格数据
              const tableData = [];
              // 遍历每一行并提取数据
              for (let i = 2; i < rows.length; i++) { // 注意这里可能需要调整起始索引
                const row = $(rows[i]);
                const cells = row.find('td');
                // 提取第一列的值作为第一层的键
                const key1 = $(cells[0]).text().trim();
                // 提取每个单元格的值，并根据需要存储到相应的数据结构中
                for (let j = 1; j < cells.length; j++) {
                  const cell = $(cells[j]);
                  // 提取该单元格的值，并将其存储到对象或数组中对应的键值下
                  let value = cell.text().trim();
                  const key2 = $(rows[1]).find('td').eq(j).text().trim();
                  const key = `${key1}-${key2}`;
                  if (!tableData[key1]) {
                    tableData[key1] = {};
                  }
                  if (key1 == '仪表尺寸' && key2 == '当前尺寸') {
                    value = value.split(','); // 将 "当前尺寸" 的值转换为数组
                  }
                  tableData[key1][key2] = value;
                }
              }
              // console.log(tableData);
              this.sizeData= tableData;
            }else if (tableName == '流量计图表 Chart'){
              const rows = table.find('tr');
              // 创建一个对象或数组用于存储表格数据
              const tableData = [];
              // 遍历每一行并提取数据
              for (let i = 2; i < rows.length; i++) { // 注意这里可能需要调整起始索引
                const row = $(rows[i]);
                const cells = row.find('td');
                // 提取第一列的值作为第一层的键
                const key1 = $(cells[0]).text().trim();
                // 提取每个单元格的值，并根据需要存储到相应的数据结构中
                for (let j = 1; j < cells.length; j++) {
                  const cell = $(cells[j]);
                  // 提取该单元格的值，并将其存储到对象或数组中对应的键值下
                  const value = cell.text().trim();
                  const key2 = $(rows[1]).find('td').eq(j).text().trim();
                  const key = `${key1}-${key2}`;
                  if (!tableData[key1]) {
                    tableData[key1] = {};
                  }
                  tableData[key1][key2] = value;
                }
              }
              // console.log(tableData);
              this.chartData= tableData;
              // console.log(this.chartData)
            }else if (tableName == '流量计材质 Material'){
              const rows = table.find('tr');
              const tableData = [];
              // 遍历每一行并提取数据
              for (let i = 1; i < rows.length; i++) {
                const row = $(rows[i]);
                const cells = row.find('td');

                // 提取第一列的值作为键，提取第二列的值作为对应的值
                const key = $(cells[0]).text().trim();
                const value = $(cells[1]).text().trim();

                // 将键值对存储到对象中
                tableData[key] = value;
              }
              // console.log(tableData);
              this.materialData= tableData
              // console.log(this.materialData)

            }else{
            }
          });

          // 根据images数组将图片插入到页面的相应位置
          // 这里需要根据具体情况进行处理，例如使用Vue.js的数据绑定和循环渲染功能

        })
        .catch((error) => {
          console.error('解析文件时出现错误：', error);
        });
    }
  },
}



</script>

<style>
.re{
  width: auto;
  height: 50px;
  margin-left: -500px;
  background: url("../assets/8.webp");
}
.re1{
  height: 50px;
  width: auto;
  background: url("../assets/8.webp");
}

  .divder1 {
  width: 100px;
}
.one{
  position: fixed;
}

 .img1{
  position: absolute;
  margin-top: -25px; 
  margin-left: 1410px;
  
 }
 .img2{
  position: absolute;
  margin-top: -3px; 
  margin-left: 1410px;
  
 }
 .img3{
  position: absolute;
  margin-top: 20px; 
  margin-left: 1410px;
  
 }
 .img4{
  position: absolute;
  margin-top: 45px; 
  margin-left: 1410px;
  
 }

 .part2{
  width: auto;
  height: 1200px;
  margin-top: -1px;
  background: url("../assets/截屏2023-10-31\ 16.10.13.png");
 
  
 }
 .part3{
  width: auto;
  height: 1620px;
  margin-top:-50px;
  background: url("../assets/8.webp");
  background-repeat: no-repeat;
  background-size:cover ; 
 
  


 }
 
.part4{
  width: auto;
  border: 1px solid rgb(217, 210, 210);
  /* border-bottom:1px solid rgb(217, 210, 210) ; */
  margin-top: -1px;
  height: 1900px;
  /* background: url("../assets/截屏2023-10-31\ 16.10.06.png"); */
  background: url("../assets/截屏2023-10-31\ 16.10.13.png");
  /* background-repeat: no-repeat; */
  /* background-size:cover ;  */
}
.part5{
  width: auto;
  margin-top: -1px;
  height: 1380px;
  background: url("../assets/8.webp");
  background-repeat: no-repeat;
  background-size:cover ; 
}

</style>