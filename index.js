const vm = new Vue({
    el: '#app',
    data: {
        questionList: [
            {
                type: 'short',
                title: '1.请问你的姓名是？',
                chooseList: null,
                id: 0,
            },
            {
                type: 'single',
                title: '2.请问您的性别是？',
                chooseList: [
                    '男',
                    '女',
                    '保密',
                ],
                id: 1,
            },
            {
                type: 'multiple',
                title: '3. 请选择您的兴趣爱好：',
                chooseList: [
                    '看书',
                    '游泳',
                    '跑步',
                    '看电影',
                    '听音乐',
                ],
                id: 2,
            },
            {
                type: 'long',
                title: '4. 请介绍一下自己:',
                chooseList: null,
                id: 3,
            },
        ]
    },
    methods: {

    }
})

vm.questionList.forEach(question => {
    const answer = question.type === 'multiple' ? [] : '';
    vm.$set(question, 'answer', answer);
  });