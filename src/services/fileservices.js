const path = require("path");

const uploatsinglefile = async (fileobject) => {
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    // save => public/images/upload
    //remember to create the upload folder first
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    // console.log(">>> check fileObject: ", path.resolve(__dirname, "../public/images/upload"))
    // console.log('>>check upload: ', uploadPath);

    // abc.png => abc-timestamp.png

    //get image extension
    let extName = path.extname(fileobject.name);

    //get image's name (without extension)
    let baseName = path.basename(fileobject.name, extName);

    //create final path: eg: /upload/your-image.png
    let fieldName = `${baseName}-${Date.now()}${extName}`
    let fieldpath = `${uploadPath}/${fieldName}`;

    // console.log("final path: ", finalPath)
    try {
        await fileobject.mv(fieldpath);
        return {
            status: 'succees',
            path: fieldName,
            error: null
        }
    } catch (err) {
        console.log(">>> check error: ", err);
        return {
            status: 'failed',
            path: null,
            error: JSON.stringify(err)
        }
    }
}
const uploatmultiplefile = async (filesall) => {
    try {
        let uploadPath = path.resolve(__dirname, "../public/images/upload");
        let resultArr = [];
        let countsuccess = 0;
        for (let i = 0; i < filesall.length; i++) {
            //get image extension
            let extName = path.extname(filesall[i].name);
            //get image's name (without extension)
            let baseName = path.basename(filesall[i].name, extName);
            //create final path: eg: /upload/your-image.png
            let fieldName = `${baseName}-${Date.now()}${extName}`
            let fieldpath = `${uploadPath}/${fieldName}`;

            try {
                await filesall[i].mv(fieldpath);
                resultArr.push({
                    status: 'succees',
                    path: 'link-image',
                    filename: filesall[i].name,
                    error: null
                })
                countsuccess++;
            } catch (err) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    filename: filesall[i].name,
                    error: JSON.stringify(err)
                })
            }
        }
        return {
            countSuccess: countsuccess,
            detail: resultArr
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    uploatsinglefile, uploatmultiplefile
}