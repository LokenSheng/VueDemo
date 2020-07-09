const config = {
    el: '#app',
    data: {
        inputFocus: false,
        inputVal: '',
        searchResList: []
    },
    methods: {
        searchRes(res) {
            this.searchResList = res.s;
        }
    },
    watch: {
        inputVal() {
            $.ajax({
                dataType: 'jsonp',
                url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
                data: {
                    wd: this.inputVal,
                    cb: 'vm.searchRes'
                }
            })
        }
    }
}
const vm = new Vue(config);