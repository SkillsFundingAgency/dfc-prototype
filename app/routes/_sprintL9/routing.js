module.exports = function (router) {

    // CHANGE ME TO THE VERSION YOURE WORKING ON
    var version = "/_sprintL9/";
    var e2e ='e2e/';
    var contact ='contact-us/';

    router.post(version + e2e + contact + 'select-option', function (req, res){
        req.session.option = req.body.why;
        if (req.body.why == "adviser") {
            res.redirect(301, version + e2e + contact + 'contact-an-adviser');
        }
        if (req.body.why == "technical") {
            res.redirect(301, version + e2e + contact + 'technical');
        }
        if (req.body.why == "feedback") {
            res.redirect(301, version + e2e + contact + 'feedback');
        }
    });


    router.post(version + e2e + contact + 'contact-an-adviser', function (req, res){
        res.redirect(301, version + e2e + contact + 'your-details-adviser');
    });

    router.post(version + e2e + contact + 'technical', function (req, res){
        res.redirect(301, version + e2e + contact + 'your-details');
    });

    router.post(version + e2e + contact + 'feedback', function (req, res){
        res.redirect(301, version + e2e + contact + 'your-details');
    });

    router.post(version + e2e + contact + 'your-details', function (req, res){
        res.redirect(301, version + e2e + contact + 'thanks-feedback');
    });

    router.post(version + e2e + contact + 'your-details-adviser', function (req, res){
        res.redirect(301, version + e2e + contact + 'thanks-adviser');
    });

};