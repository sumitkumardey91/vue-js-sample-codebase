<template>
    <div>
        <h1>I am child component </h1>
        test only {{propsName}}


        {{filterData}}


        <el-row>
            <el-button type="success" @click="click()">Success</el-button>
    
        </el-row>
    </div>
    
</template>

<script>
export default {

    props: ['propsName', 'filterData'],
    methods: {
        click () {
            alert(1)
        }
    }
    
}
</script>

<style scoped>

</style>