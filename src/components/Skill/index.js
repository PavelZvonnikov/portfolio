export default {
  name: 'Skill',
  
  computed: {
    allSkills() {
      return this.$store.getters.allSkills
    }
  }
  }