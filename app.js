new Vue ({
    el:"#app",
    data: {
        skiLengths: '',
        weights: '',
        height: '',
        errorMessageText: '',
        title: 'SKI CALC',
        instruction: 'Enter your FIS height in cm',
        btn: 'CALCULATE',
        amountOfResults: 10,
        minValue: 140,
        maxValue: 200

    },
    methods: {
        calculateSki() {
            let skiLengths = [];
            let ski;
            if (this.height <= this.maxValue && this.height >= this.minValue) {
                
                h = 145;
                for (i = 0; i < this.amountOfResults; i++) {
                    ski = h * this.height / 100;
                    skiLengths.push(ski.toFixed(0));
                    h = h - 0.5
                }
                this.skiLengths = skiLengths;
                this.errorMessageText = '';
            } else {
                this.errorMessage();
            }
            
        },
        calculateWeight() {
            let weight;
            let kaalud = [];
            if (this.height <= this.maxValue && this.height >= this.minValue) {
                h = 21;
                for (i = 0; i < this.amountOfResults; i++) {
                    weight = h * this.height * this.height / 10000;
                    kaalud.push(weight.toFixed(1));
                    h = h - 0.125;
                }
                this.weights = kaalud;
                this.errorMessageText = '';
            } else {
                this.errorMessage();
            }
            
        },

        calculateResults() {
            this.calculateSki();
            this.calculateWeight();
        },

        errorMessage() {
            this.weights = '';
            this.skiLengths = '';
            this.errorMessageText = `Please enter a value between ${this.minValue}-${this.maxValue}.`;
        }

    },

   
});