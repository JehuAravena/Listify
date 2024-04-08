const express = require('express');
const cors = require('cors');
const http = require('http');
const { initSocket } = require('./common/config/socket');

const app = express();
const port = 3000; 
const server = http.createServer(app);
initSocket(server);

const connection = require('./common/config/database');
const taskRoutes = require('./task/route/taskRoutes');
const userRoutes = require('./user/route/userRoutes');
const roleRoutes = require('./role/route/roleRoutes');
const levelRoutes = require('./level/route/levelRoutes');
const loginRoutes = require('./login/route/loginRoutes');
const rolePermissionRoutes = require('./rolePermission/route/rolePermissionRoutes');

app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/api', taskRoutes);
app.use('/api', userRoutes);
app.use('/api', roleRoutes);
app.use('/api', levelRoutes);
app.use('/api', loginRoutes);
app.use('/api', rolePermissionRoutes);

connection.connect((err) => {
	if (err) {
		console.error('Error al conectar a la base de datos: ' + err.message);
	} else {
		console.log('Conexión a la base de datos establecida.');
	}
});

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
