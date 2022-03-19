function organizeFn(dirPath){
    let desPath ;
    // console.log("organize coomand implmented on " + dirPath + " 😍😍 ");
    // 1. input -> directory path

    if(dirPath==undefined) {
        // console.log("Kindly enter the Path");
        desPath = process.cwd();
        return;
    }
    let doesExist = fs.existsSync(dirPath);
    if(doesExist){
        // 2. create -> organize files - directory 
        desPath = path.join(dirPath + "Organize_Files");
        if(fs.existsSync(desPath)==false){
            fs.mkdirSync(desPath);
        }
    }
    else{
        console.log("Kindly enter the correct Path");
        return ;
    }
    organizeHelperFn(dirPath,desPath);
 
}

function organizeHelperFn(src,dest){
     // 3 . identify category of all files in input directory
   let childNames = fs.readdirSync(src);//readig all the files
    //  console.log(childNames);
    for(let i=0;i<childNames.length;i++){
        let childAddress = path.join(src,childNames[i]);// to getting the address of all present file 
        // knowing the files if that is dir or file directory
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
            // console.log(childNames[i]);// getting all the files 
             
             let category = getCategory(childNames[i]);
            //  console.log(category);
        // 4 . copy files in organize directory in respective category
        sendFiles(childAddress,dest,category);


        }



    }
   
}

function getCategory(name){
    let extension = path.extname(name);//give extension with .extension name
    extension=extension.slice(1);//remove dot
    // console.log(extension);
    //now search this in types
    for(let type in types){
        let currTypeArr = types[type];
        for(let i=0;i<currTypeArr.length;i++){
            if(extension==currTypeArr[i]){
                return type;//we will get to no rom media archives doc and apps which one it is;
            }
        }
        

    }
    return "others";

}

function sendFiles(srcFiles,destFiles,category){
    let categoryPath = path.join(destFiles,category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    let FilePathName = path.basename(srcFiles);
    let desfilePath = path.join(categoryPath,FilePathName);
    fs.copyFileSync(srcFiles,desfilePath);
    fs.unlinkSync(srcFiles);
    console.log(FilePathName,"copied to",category);

}