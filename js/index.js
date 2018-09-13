new Vue({
    el: '#demo',
    data: {
        show: 0,
        date: '',
        m: '',
        d: '',
        h: '',
        min: '',
        s: '',
    },
    methods: {
        getTime() {
            this.date = new Date(2018, 8, 15, 11, 08, 0, 0) - new Date();
            this.m = Math.floor(this.date / (3600 * 24 * 31 * 1000));
            this.d = Math.floor((this.date - this.m * (3600 * 24 * 31 * 1000) - (3600 * 24  * 1000)) / (3600 * 24 * 1000)+1);
            this.h = Math.floor((this.date - this.m * (3600 * 24 * 31 * 1000) - (3600 * 24  * 1000) - this.d * (3600 * 24 * 1000)) / (3600 * 1000));
            this.min = Math.floor((this.date - this.m * (3600 * 24 * 31 * 1000) - (3600 * 24  * 1000) - this.d * (3600 * 24 * 1000) - this.h * (3600 * 1000)) / (60 * 1000));
            this.s = Math.floor((this.date - this.m * (3600 * 24 * 31 * 1000) - (3600 * 24  * 1000) - this.d * (3600 * 24 * 1000) - this.h * (3600 * 1000) - this.min * (60 * 1000)) / 1000);
        },
    },
    filters: {
        addZero(num) {
            // return num < 10 ? '0' + num : num;
            if (num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        }
    },
    mounted() {
        this.getTime();
        this.timer = setInterval(() => {
            this.getTime();
        }, 1000);
    }
})
