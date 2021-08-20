const nextRoutes = require('next-routes')

const routes = module.exports = nextRoutes()

routes.add('/contactme', '/contactme')
routes.add('/aboutme', '/aboutme')
routes.add('mycv', '/mycv')