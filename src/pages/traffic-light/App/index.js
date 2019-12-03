import Info from '../components/Info/temp.vue'

export default {
  name: 'app',
  components: {
    Info
  },
  data() {
    const state = {
      activeColor: 0,
      timeToChange: 0,
      count: 0,
      timerID: "",
      colorsList: [
        {
          color: 'red',
          seconds: 10,
          id: 1
        },
        {
          color: 'yellow',
          seconds: 3,
          id: 2
        },
        {
          color: 'green',
          seconds: 15,
          id: 3
        },
        {
          color: 'yellow',
          seconds: 3,
          id: 2
        },
      ],
    };

    return state;
  },
  methods: {
    light: function() {
      const routerValue = Number((this.$route.path).slice(-1));
      this.activeColor = routerValue - 1;
      this.timeToChange = this.colorsList[this.activeColor].seconds;

      this.timerID = setInterval(() => {
        this.count++;
        this.timeToChange--;
        if (this.count > this.colorsList[this.activeColor].seconds) {
          this.activeColor = (this.activeColor < 3) ? this.activeColor + 1 : 0;
          this.count = 0;
          this.timeToChange = this.colorsList[this.activeColor].seconds;
          this.$router.push({ path: `${this.colorsList[this.activeColor].id}` });
        }
      }, 1000);
    },
  },
  mounted: function() {
    this.light();
  },
  beforeDestroy: function() {
    clearInterval(this.timerID);
  }
}