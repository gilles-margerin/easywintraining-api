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
    providerId: {
      type: String
    },
    isAdmin: {
      type: Boolean
    }
  }
}