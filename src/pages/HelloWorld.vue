<template>
    <div class="content">
        <h2>Hello World !</h2>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "HelloWorld",
        created() {
            axios.get("/api/text.json")
                .then(function (res) {
                    console.log(res,"成功获取文件！！")
                })
                .catch(function () {
                    console.log("获取数据失败！！")
                })
        }
    }
</script>

<style lang="scss">
    .content{
        font-size: 24px;color: #282828;
        h2{
            width: 100%;height: auto;padding: 20px;
            margin: 180px auto 0 auto;text-align: center;
        }
    }
</style>
