import Vue from 'vue'
import moment from 'moment'//导入文件

Vue.filter('dateFormat', function (val) {
    if (val != null) {
        var date = new Date(parseInt(val.replace("/Date(", "").replace(")/", ""), 10));
        //月份为0-11，所以+1，月份小于10时补个0
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        return date.getFullYear() + "-" + month + "-" + currentDate;
        //返回年-月-日   2015-6-20
    }
    return ""
});
Vue.filter('capitalize1', function (value) {
    if (value) {
        var data = moment(value).format('YYYY-MM-DD HH:mm');
        return data;
    } else {
        return "--";
    }
});

Vue.filter('capitalize', function (value) {

    if (!value) {
        return "--";
    } else {
        return value;
    }
});