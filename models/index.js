const User = require('./user.js')
const Activity = require('./activity.js')

User.hasMany(Activity)
Activity.belongsTo(User)

module.exports = { User, Activity }
