class cartoon {
    constructor(title) {
        this.title = title;
    }
}
const app = {
    data() {
        return {
            cartoons: [{
                    image: './images/senku.jpg',
                    title: 'Ishigami Senku(อิชางามิ เซ็นคู)',
                    detail: 'จอมคลั่งวิทยาศาสตร์ผู้เป็นความหวังสุดท้ายของมนุษยชาติ เซ็นคูต้องการช่วยให้ทุกคนมีชีวิตรอดและทำให้โลกกลับสู่จุดที่เคยเป็นก้วยพลังแห่งวิทยาศาสตร์',
                    like: false,
                    unlike: true,
                    show: true
                },
                {
                    image: './images/tsukasa.jpg',
                    title: 'Shishio Tsukasa (ชิชิโอะ สึคาสะ)',
                    detail: 'นักเรียนมัธยมที่แข็งแกร่งที่สุดในญี่ปุ่น สึคาสะต้องการสร้างโลกใบใหม่ เขาต้องการช่วยเหลือแค่หนุ่มสาวที่มีจิตใจสะอาดและหยุดยั้งการฟื้นคืนอารยธรรมของเซ็นคู',
                    like: false,
                    unlike: true,
                    show: true
                },
                {
                    image: './images/kohaku.jpg',
                    title: 'Kohaku (โคฮาคุ)',
                    detail: 'เด็กสาวที่เกิดและเติบโตในสโตนเวิลด์ โคฮาคุเป็นนักรบที่แข็งแกร่งที่สุดของหมู๋บ้านอิชิงามิ เธอชื่นชมวิถีของเซ็นคูและกลายเป็นพันธมิตรที่แข็งแกร่งของเขา',
                    like: false,
                    unlike: true,
                    show: true
                }
            ],
            search: { click: false, notclick: true },
            searchMessages: '',
            notphoto: false,
            img: '',
            showimg: false
        }
    },
    methods: {
        toggleLike(index) {
            this.cartoons[index].like = !this.cartoons[index].like
            this.cartoons[index].unlike = !this.cartoons[index].unlike
        },
        searchClick() {
            this.search.click = !this.search.click
            this.search.notclick = !this.search.notclick
            this.searchMessages = ''
            this.showChar();
        },
        showImg(index) {
            this.img = this.cartoons[index].image
            this.showimg = true
        },
        closeImg() {
            this.showimg = false
        },
        searchName() {
            if (this.searchMessages) {
                for (let index = 0; index < this.cartoons.length; index++) {
                    const element = this.cartoons[index];
                    if (element.title !== this.searchMessages.toUpperCase()) {
                        element.show = false
                        this.notphoto = false
                    }
                    if (element.title.includes(this.searchMessages.toUpperCase())) {
                        element.show = true
                        this.notphoto = false
                    }
                    if (this.cartoons.every(element => !element.show)) {
                        this.notphoto = true
                    }
                }
            } else {
                this.showChar();
            }
        },
        showChar() {
            for (let index = 0; index < this.cartoons.length; index++) {
                this.cartoons[index].show = true
                this.not = false
            }
        }
    },
    computed: {
        LikePic() {
            return this.cartoons.filter(c => c.like).length
        }
    }
}
Vue.createApp(app).mount('#app')