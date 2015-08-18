app = require './app'
port = process.env.PORT or 5000
app.listen port, ->
  console.log "Express server listening on port #{port}.",
