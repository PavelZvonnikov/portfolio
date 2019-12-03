export default {
  name: 'About',

  computed: {
    allContacts() {
      return this.$store.getters.allContacts
    }
  }
}