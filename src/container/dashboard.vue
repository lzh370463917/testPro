<template>
    <div class="container clearfix">
        <router-view></router-view>
        <footer>
            <router-link
                v-for="(tab,index) in tabs"
                :key="index"
                :to="{name: tab.value}"
                :class="{'active-item' : route === tab.value}"
                class="tab-item">
                {{ tab.label }}
            </router-link>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'Index',
    data() {
        return {
            tabs: [
                { label: '首页', value: 'home' },
                { label: '分类', value: 'classify' },
                { label: '我的', value: 'my' }
            ]
        };
    },
    computed: {
        route() {
            return this.$route.name;
        }
    },
    methods: {

    }
};
</script>
<style lang="less" scoped>
.container {
    width: 100%;
    height: 100%;
    position: relative;
    footer {
        width: 100%;
        height: 1rem;
        background: #ffffff;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .tab-item {
            color: #666666;
        }
        .active-item {
            color: #ff447b;
        }
    }
}
</style>
