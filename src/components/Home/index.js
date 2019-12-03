import store from '../../store.js'

import About from '../About/temp.vue'
import Header from '../Header/temp.vue'
import Skill from '../Skill/temp.vue'
import Project from '../Project/temp.vue'

export default {
  name: 'home',
  components: {
    About,
    Header,
    Skill,
    Project
  },
  computed: {
  experience() {
    return store.state.headersList.skills
  },
  projectList() {
    return store.state.headersList.tasks
  },
},
}