import express from 'express';

const app = express();
const PORT =  3000;

// middleware para analizar JSON en el cuerpo de la solicitud
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// probando el get (se muestra en localhost:3000 )
app.get('/', (req, res) => {
    res.send('Hola servidor desde .js');
});

// para iniciar el server el console log se imprime en la terminal
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});