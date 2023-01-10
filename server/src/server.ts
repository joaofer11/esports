import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
	return res.json([
		{ id: 1, anúncio: 'anúncio 1' },
		{ id: 2, anúncio: 'anúncio 2' },
		{ id: 3, anúncio: 'anúncio 3' },
		{ id: 4, anúncio: 'anúncio 4' },
	])
});

app.listen(3333)