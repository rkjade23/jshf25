const loadWritersMW = require ('../middlewares/loadWritersMW');
const loadBooksMW = require('../middlewares/loadBooksMW');
const deleteWriterMW = require('../middlewares/deleteWriterMW');
const deleteBookMW = require('../middlewares/deleteBookMW');
const loadWriterMW = require('../middlewares/loadWriterMW');
const loadBookMW = require('../middlewares/loadBookMW');
const saveWriterMW = require('../middlewares/saveWriterMW');
const saveBookMW = require('../middlewares/saveBookMW');
const renderMW = require('../middlewares/renderMW');

function subscribeToRoutes(app){


const objRepo = {};
app.get('/', loadWritersMW(objRepo), renderMW(objRepo));
app.get('/writer/edit/:id', loadWriterMW(objRepo), renderMW(objRepo));
app.get('/writer/new', renderMW(objRepo));
app.get('/writer/:id/books', loadBooksMW(objRepo), renderMW(objRepo));
app.get('/writer/delete/:id', loadWriterMW(objRepo), deleteWriterMW(objRepo));
app.get('/book/edit/:id',loadBookMW(objRepo), renderMW(objRepo));
app.get('/book/new', renderMW(objRepo));
app.get('/book/delete/:id', loadBookMW(objRepo), deleteBookMW(objRepo));
}

module.exports = subscribeToRoutes;