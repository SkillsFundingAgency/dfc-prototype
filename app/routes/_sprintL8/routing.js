module.exports = function (router) {

    // CHANGE ME TO THE VERSION YOURE WORKING ON
    var version = "/_sprintL8/";
    var sprint = 'sprint9/';
    var e2e ='e2e/';
    var contact ='contact-us/';

    router.post(version + sprint + e2e + contact + 'select-option', function (req, res){
        req.session.option = req.body.why;
        if (req.body.why == "adviser") {
            res.redirect(301, version + sprint + e2e + contact + 'your-details-adviser');
        }
        else {
            res.redirect(301, version + sprint + e2e + contact + 'your-details');
        }
    });

    router.post(version + sprint + e2e + contact + 'your-details', function (req, res){
        if (req.session.option == "technical") {
            res.redirect(301, version + sprint + e2e + contact + 'technical');
        }
        else {
            res.redirect(301, version + sprint + e2e + contact + 'feedback');
        }
    });

};