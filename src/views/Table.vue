<template>
    <div>

             <div>
        <input type="radio" value="all" v-model="cityValue" > all
        </div>
        <div v-for="(item, index) in allCityName" :key="index">
            <input type="radio" :value="item" v-model="cityValue" > {{item}}

        </div>

        <div>

          <select type="select" v-model="nameValue" >
           
            <option v-for="(name, i) in nameArr" :key="i" :value="name"> {{name}} </option>

          </select>
        </div>


        
        <el-table
            :data="tableData"
            :default-sort = "{prop: 'date', order: 'descending'}"
            style="width: 100%">

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
        nameArr: []
      }
    },
    watch: {
        cityValue (val) {
            console.log(val)
            this.filterCityName(val);
        },
        nameValue (name) {
            console.log(name)
        }
    },
    methods: {
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



    }
  }
</script>

<style lang="scss" scoped>

</style>

