/*
You get the task of adding ap page to a website running in Express.
The page should be accessible on the URI /form and contain a form,
given in form.pug. When the form has been filled it is posted to
/process-form that saves the data by calling the save-form-data that
is setup in the project. The module returns a promise, if it is
resolved you should render the template result. pug along with the
data, If an error ovvurs, render error.pug with the error.

Fill in the underlined ares and where comments ask for it.
-Promise have then and catch
-To render a template we use res.render(templateName, templateData)
*/

const save = require();
const app = express();

//...setup of app

app.(, (req, res, next) => {
  // show form


});

app.(, (req, res, next) => {
const data = req.body;
// handle promis and show data or error
save(data)

});
