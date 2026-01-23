const express = require('express');
const cors = require('cors');
const app = express();
const studentsRoutes = require('./routes/studentsRoutes.js')
const teachersRoutes = require('./routes/teachersRoutes.js')
const coursesRoutes = require('./routes/coursesRoutes.js')


app.use(express.json())
app.use(cors());

app.use('/students', studentsRoutes)
app.use('/teachers', teachersRoutes)
app.use('/courses', coursesRoutes)

app.get('/', (req, resp) => {
    resp.send('Hi world')
})

app.listen(6500, () => {
  console.log('server working');
});
