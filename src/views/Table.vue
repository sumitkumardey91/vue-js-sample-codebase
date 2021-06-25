<template>
    <div>

      <div class="flex-box">

        <router-link :to="{name: 'parent'}">click for parent</router-link>

          <p v-changeColorDir="'blue'">I am table component</p>

            <p v-pin="10">Stick me 200px from the top of the page</p>

              <h1 v-changeColorDir> I am Default {{database}} </h1>


        <div>
           <div>
              <input type="radio" value="all" v-model="cityValue" > all
          </div>
            <div v-for="(item, index) in allCityName" :key="index">
                <input type="radio" :value="item" v-model="cityValue" > 
                <span v-changeColorDir="'pink'">{{item}}</span>

            </div>
        </div>

        <div>

          <select type="select" v-model="nameValue" >
           
            <option v-for="(name, i) in nameArr" :key="i" :value="name"> 
              
             <span v-changeColorDir> {{name}} </span>



            </option>

          </select>
        </div>

        <div>
           <el-input placeholder="Please input Name" v-model="filterByName" @input="actSearchFilter"></el-input>
        </div>


        <div>

            <el-select
            v-model="multipleItem"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="Choose tags for your article">
            <el-option
              v-for="(item) in nameArr"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </div>



        <div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox v-for="(name, i) in nameArr" :key="i" :label="name" ></el-checkbox>
          </el-checkbox-group>

        </div>

      </div>

        
        <el-table
            :data="tableData"
            :default-sort = "{prop: 'date', order: 'descending'}"
            style="width: 100%"
            :empty-text="'no row'"
            @row-click="ownFun"
            >

            <el-table-column
            prop="date"
            label="Date"
            sortable
            width="180">
            </el-table-column>

            <el-table-column
            prop="name"
            label="Name"
            width="180">
            </el-table-column>

            <el-table-column
            prop="Town"
            label="Town"
            :formatter="formatter">
            </el-table-column>
        </el-table>

   
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData:[],
        cityValue: '',
        allCityName: [],
        mainTableData: [],
        nameValue: '',
        nameArr: [],
        filterByName: '',
        checkList: [],
        multipleItem: [],
        database: ''
      }
    },
    watch: {
        cityValue (val) {
            console.log(val)
            this.filterCityName(val);
        },
        nameValue (name) {
            console.log(name)
        },
        // filterByName (val) {
        //   this.actSearchFilter(val);
        // }

        checkList (nameList) {
          this.filterNameListMul(nameList);
        },
        multipleItem (val) {
          console.log("val", val)
          this.filterNameListMul(val)
        }
    },
    methods: {
      ownFun (val) {
        console.log("val", val)
      },
      filterNameListMul (names) {

        console.log("this.", names);


        this.tableData = this.mainTableData;
        this.tableData = this.tableData.filter((item) => {
           
            let isAvai = names.find((name) => {
               if (name == item.name) {
                 return name;
               }
             })

             if (isAvai != undefined) {
               return item;
             }
           
        });


      },
      actSearchFilter (name) {
         this.tableData = this.mainTableData;
          this.tableData = this.tableData.filter((item) => {
              if (((item.name).toLowerCase()).includes(name)) {
                  return item;
              }
          });
    
      },
      formatter(row) {
        return row.address;
      },
      filterCityName (cityName) {

        this.tableData = this.mainTableData;

        if (cityName == 'all') {
            // dont filter, give me all
        } else {

            this.tableData = this.tableData.filter((item) => {
                if (item.address == cityName) {
                    return item;
                }

            });
        }



        //   a = 60
        //    b = a; 
        //    b =90
      },
      
    },
    mounted() {
        this.tableData = [{
          date: '2016-05-03',
          name: 'sand',
          address: 'Delhi'
        }, {
          date: '2016-05-02',
          name: 'raj',
          address: 'USA'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'USA'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'punjab'
        }]

        this.mainTableData = JSON.parse(JSON.stringify(this.tableData)) ;


        this.allCityName = this.tableData.map((item) => {
            return item.address;
        })

        this.allCityName = [... new Set(this.allCityName)]




        this.nameArr = this.tableData.map((item) => {
            return item.name;
        })

        this.nameArr = [... new Set(this.nameArr)]



        console.log("this.nameArr", this.nameArr)

        console.log("this.tableData", this.tableData)
        window.test = 9000

        this.database = window.test;










         // checking 

        // this.tableData.forEach((element) => {
        //     console.log("element", element)
        // });

      


        // // 
        // var arr = () => {
        //     this.
        // }

        // var arr = function () {
        //     this
        // }
        // ////////////////////////////////

        // function arr () {

        // }



    },
    beforeRouteEnter (to, from, next) {
         

      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/")
      }


    }

  }
</script>

<style lang="scss" scoped>
  .flex-box {
    display: flex;
    justify-content: space-between;
  }
</style>

