/* NO LONGER USED -- PICTURES ARE CURRENTLY UPLOADED TO S3 */

var fs = require('fs');

// Create the "uploads" folder if it doesn't exist
fs.exists(__dirname + '/uploads', function (exists) {
    if (!exists) {
        console.log('Creating directory ' + __dirname + '/uploads');
        fs.mkdir(__dirname + '/uploads', function (err) {
            if (err) {
                console.log('Error creating ' + __dirname + '/uploads');
                process.exit(1);
            }
        })
    }
});

exports.upload = function(req, res, next) {

    console.log("upload");

    var file = req.files.file,
        filePath = file.path,
//        fileName = file.name, file name passed by client. Not used here. We use the name auto-generated by Node
        lastIndex = filePath.lastIndexOf("/"),
        tmpFileName = filePath.substr(lastIndex + 1),
        image = req.body;

    console.log(JSON.stringify(image));

    image.fileName = tmpFileName;
    console.log(tmpFileName);

//    images.insert(image, function (err, result) {
//        if (err) {
//            console.log(err);
//            return next(err);
//        }
//        res.json(image);
//    });

};