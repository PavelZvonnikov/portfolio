import Info from '../components/Info/temp.vue';
import Form from '../components/Form/temp.vue';
import Weather from '../components/Weather/temp.vue';

export default {
  name: 'app',
  components: {
    Info,
    Form,
    Weather
  },
  data() {
    return {
      obj: {
        temp: 0,
        pressure: '0:00:00',
        sunset: 0,
        active: false,
      },
      key: '23fbf964c1eb2fa295dd50b21b675122',
      city: '',
    }
  },
  methods: {
    gettingWeather: async function (e) {
      e.preventDefault();
      if (this.city) {
        const link = await 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&units=metric`);
        const data = await link.json();

        const synSunset = data.sys.sunset;

        const date = new Date(synSunset * 1000);

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;

        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;

        const sunset = `${hours}:${minutes}:${seconds}`;

        this.obj.temp = data.main.temp;
        this.obj.data = data.name;
        this.obj.pressure = Math.round(data.main.pressure * 0.75006375541921);
        this.obj.sunset = sunset;
        this.obj.active = true;
      } 
    },
    inputChange: function (e) {
      this.city = e.target.value;
    },
    remove() {
      this.city = '';
      this.obj.temp = 0;
      this.obj.pressure = 0;
      this.obj.sunset = '0:00:00';
      this.obj.active = false;
    },
  },
}