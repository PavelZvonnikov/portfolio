import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contactList: [
      {
        img: require("@/assets/images/phone.svg"),
        text: "+7 (977) 858-79-74"
      },
      {
        img: require("@/assets/images/mail.svg"),
        text: "pavelzvonnikov@yandex.ru"
      },
      {
        img: require("@/assets/images/telegram.svg"),
        text: "@P_Zvonnikov"
      }
    ],

    headersList: {
      skills: "Experience",
      tasks: "Projects"
    },

    skillList: [
      {
        length: "Июнь 2019 — сентябрь 2019",
        months: "4 месяца",
        position: "learn.javascript.ru",
        duties: "Стажер: Проходил обучение по курсу Javascript/DOM/Интерфейсы",
        id: 1
      },
      {
        length: "Январь 2017 — июнь 2019",
        months: "2 года 7 месяцев",
        position: "Автомеханик",
        duties: "Ремонт и обслуживание автомобилей",
        id: 2
      },
      {
        length: "Июнь 2019 — сентябрь 2019",
        months: "4 месяца",
        position: "Лаборант Брянского инженерно-технологического университета",
        duties:
          "Верстка макетов сайта электронного университета. Ремонт и обслуживание компьютеров. Установка ПО.",
        id: 3
      }
    ],

    projectList: [
      {
        path: "portfolio/traffic-light",
        name: "traffic-light",
        img: require("@/assets/images/traffic-light.png")
      },
      {
        path: "portfolio/weather-widget",
        name: "weather-widget",
        img: require("@/assets/images/weather-widget.png")
      },
      {
        path: "portfolio/todo-app",
        name: "todo-app",
        img: require("@/assets/images/todo-app.png")
      }
    ]
  },
  getters: {
    allContacts(state) {
      return state.contactList;
    },

    allSkills(state) {
      return state.skillList;
    },

    allProjects(state) {
      return state.projectList;
    }
  }
});
