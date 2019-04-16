const appData = require('./data.json')
const sliders = appData.sliders
const dinner = appData.dinner
const tickets = appData.tickets
const tours = appData.tours

module.exports = {
  devServer: {
    before: function (app, server) {
      app.get('/api/sliders', function (req, res) {
        res.json({
          code: 0,
          data: sliders
        })
      })
      app.get('/api/dinner', function (req, res) {
        res.json({
          code: 0,
          data: dinner
        })
      })
      app.get('/api/tickets', function (req, res) {
        res.json({
          code: 0,
          data: tickets
        })
      })
      app.get('/api/tours', function (req, res) {
        res.json({
          code: 0,
          data: tours
        })
      })
    }
  }
}
