const vm = new Vue({
    el: '#app',
    data: {
      filterObj: {},
      showFilterGoods: false,
      goodsList: [
        {
          title: '上装',
          typeList: ['全部', '针织衫', '毛呢外套', 'T恤', '羽绒服', '棉衣', '卫衣', '风衣' ],
          id: 1,
        },
        {
          title: '裤装',
          typeList: ['全部', '牛仔裤', '小脚/铅笔裤', '休闲裤' ,'打底裤', '哈伦裤'],
          id: 2,
        },
        {
          title: '裙装',
          typeList: ['全部', '连衣裙', '半身裙', '长袖连衣裙', '中长款连衣裙'],
          id: 3,
        }
      ]
    },
    methods: {
      addFilterHandle (typeIndex, goods, type, goodsIndex) {
        if(type === '全部') {
          return;
        }

        this.showFilterGoods = true;
        goods.index = typeIndex;

        vm.$set(this.filterObj, goodsIndex, type);
        
      },
      deleteFilterGoods (goodsKey) {
        this.$delete(this.filterObj, goodsKey);
        this.goodsList[goodsKey].index = 0;
        this.changeShowFilter();
      },
      changeShowFilter () {
        const filterObjStr = JSON.stringify(this.filterObj);
        this.showFilterGoods = filterObjStr !== '{}';
      }
    }
  })


  vm.goodsList.forEach(item => vm.$set(item, 'index', 0));
