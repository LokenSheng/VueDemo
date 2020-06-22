const vm = new Vue({
    el: '#app',
    data: {
        num1: 0,
        num2: 0,
        type: '+',
        result: 0
    },
    methods: {
        handleClick() {
            const { type, num1, num2 } = this;
            switch (type) {
                case '+':
                    this.result = num1 + num2;
                    break;
                case '-':
                    this.result = num1 - num2;
                    break;
                case '*':
                    this.result = num1 * num2;
                    break;
                case '/':
                    this.result = num1 / num2;
                    break;
            }
        }
    }
})