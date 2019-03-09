<template>
    <div>
        <div
            :style="{width: width}"
            class="box left">
            <span>{{ percent }}%</span>
            <button
                :disabled="disabled"
                @click="setWidth">run</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Classify',
    data() {
        return {
            width: 0,
            timer: '',
            disabled: false,
            percent: 0
        };
    },
    mounted() {
        this.inherit();
    },
    methods: {
        setWidth() {
            const requestAnimationFrame =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame;
            let that = this;
            that.disabled = true;
            let timer;
            that.width = 0;
            cancelAnimationFrame(timer);
            // (function set() {
            //     that.width = parseFloat(that.width) + 0.05 + 'rem';
            //     if (parseInt(that.width) > 7) { return; }
            //     requestAnimationFrame(set);
            // })();
            timer = requestAnimationFrame(function set() {
                that.width = parseFloat(that.width) + 0.05 + 'rem';
                that.percent = parseInt(parseFloat(that.width) / 7 * 100);
                if (parseFloat(that.width) > 7) {
                    that.disabled = false;
                    // that.percent = 100;
                    return;
                }
                requestAnimationFrame(set);
            });
        },
        inherit() {
            function Animal(name) {
                this.name = name;
                this.showName = function() {
                    alert(this.name);
                };
            };
            // class Animal {
            //     constructor(name) {
            //         this.name = name;
            //         this.showName = () => {
            //             alert(this.name);
            //         };
            //     }
            // }
            class People extends Animal {
                constructor(name) {
                    super(name);
                    this.getName = (aa) => {
                        alert(aa);
                    };
                }
            }
            let tom = new People('jerry');
            tom.getName('gg');
            tom.showName();
            // let luke = new Animal('bob');
            // luke.showName();
        }
    }
};
</script>

<style lang="less" scoped>
.box {
    background: red;
}
</style>
