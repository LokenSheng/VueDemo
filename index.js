const vm = new Vue({
    el: '#app',
    data: {
        filterText: '',
        addClassFlag: false,
        controlOptions: ['Male', 'Female', 'All'],
        optionActive: [false, false, true],
        sex: ['m', 'f'],
        personArr: [
            {
                name: '王港',
                src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4005587090,2408158268&fm=26&gp=0.jpg',
                des: '颈椎不好',
                sex: 'm',
                id: '056482'
            },
            {
                name: '刘莹',
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571915784984&di=a0056fd06188e87b922c60878e5ce6e2&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F79%2F64%2F5c05df1faf3b7_610.jpg',
                des: '我是谁',
                sex: 'f',
                id: '157894'
            },
            {
                name: '刘秀莹',
                src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4005587090,2408158268&fm=26&gp=0.jpg', 
                des: '我长得很好看',
                sex: 'f',
                id: '2849245'
            },
            {
                name: '刘金雷',
                src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4005587090,2408158268&fm=26&gp=0.jpg',
                des: '你没有见过陌生的脸',
                sex: 'm',
                id: '348515'
            },
            {
                name: '刘飞翔',
                src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4005587090,2408158268&fm=26&gp=0.jpg',
                des: '瓜皮刘',
                sex: 'm',
                id: '478454'
            }
        ],
    },
    methods: {
        filterBySex(index, option) {
            if (this.optionActive[index]) {
                return;
            }

            for (let i = 0; i < this.optionActive.length; i++) {
                this.optionActive[i] = false;
            }

            this.optionActive.splice(index, 1, true);

            this.sex.length = 0;

            switch (option) {
                case 'Male':
                    this.sex.push('m');
                    break;
                case 'Female':
                    this.sex.push('f');
                    break;
                case 'All':
                    this.sex.push('m', 'f');
            }
        }
    },
    computed: {
        personList() {
            const { personArr, filterText, sex } = this;
            return personArr.filter(item => item.name.includes(filterText) && sex.includes(item.sex))
        }
    }
})