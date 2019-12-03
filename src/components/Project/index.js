export default {
  name: 'Project',
  
  computed: {
    allProjects() {
      return this.$store.getters.allProjects
    }
  }
  }