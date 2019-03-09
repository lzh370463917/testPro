/*
 * @Author: lzh
 * @Date: 2019-01-04 13:47:41
 * @Last Modified by: lzh
 * @Last Modified time: 2019-01-04 15:54:46
 */
<template>
    <div class="home-container">
        <section class="search-box">
            <div>qqq</div>
            <div class="input">
                <span class="inline-block icon-wrapper"><i>搜索</i></span>
                <input
                    v-model="searchKey"
                    type="text"
                    class="inner-input">
            </div>
            <div>eeee</div>
        </section>
        <section class="banner-box"></section>
        <section class="classify-box"></section>
        <section class="unkown-box"></section>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            searchKey: ''
        };
    },
    methods: {

    }
};
</script>
<style lang="less" scoped>
.home-container {
    .search-box {
        height: 1.2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .input {
            height: 0.8rem;
            width: 6.8rem;
            background: #eeeeee;
            .icon-wrapper {
                width: 0.7333rem;
                height: 100%;
                vertical-align: top;
                line-height: 0.8rem;
            }
            .inner-input {
                width: 5.97rem;
                height: 100%;
                border: none;
                background: #eeeeee;
            }
        }
    }
}
</style>
