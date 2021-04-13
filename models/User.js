module.exports = {
  name: "users",
  alias: "User",
  schema: {
    name: {
      type: String
    },
    email: {
      type: String
    },
    isAdmin: {
      type: Boolean
    }
  }
}