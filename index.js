
const vm = new Vue({
    el: '#app',
    data: {
       curMask:'',
       needDoList: [],
       completeList: [] 
    },
    methods: {
        handleInput (e) {
            this.curMask = e.target.value;
        },
        addMask () {
            if(this.curMask==='') {
                return;
            }
            this.needDoList.push({
                title: this.curMask,
                id: Math.random()
            });
            this.curMask = '';
        },
        deleteMask (index, type) {
            const toDoList = type === 'need' ? this.needDoList : this.completeList;
          toDoList.splice(index, 1);
        },
        doCheck (index, type) {
            if(type === 'need') {
                const completeMask = this.needDoList.splice(index, 1);
                this.completeList.push(...completeMask);
              } else {
                const noCompleteMask = this.completeList.splice(index, 1);
                this.needDoList.push(...noCompleteMask);
              }
        }
    }
});