<template>
    <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        title="选择年月"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        class="datetime-picker"
    >
        <!-- <template #default>
            <div></div>
        </template> -->
    </van-datetime-picker>
</template>
<script>
import Vue from 'vue';
import { DatetimePicker } from 'vant';

Vue.use(DatetimePicker);


export default {
    // components: {
    //     DatetimePicker
    // },
    data() {
        return {
            msg: 'demo',
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
        }
    },
    methods: {
        formatter(type, val) {
          if (type === 'year') {
            return `${val}年`;
          } else if (type === 'month') {
            return `${val}月`;
          }
          return val;
        },
    },
}
</script>
<style lang="scss" scoped>
    /deep/ .van-picker__toolbar {
        display: none;
    }
    .datetime-picker {
        margin: 20px;
        border-radius: 10px;
        box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.15);
        overflow: hidden;
    }
</style>