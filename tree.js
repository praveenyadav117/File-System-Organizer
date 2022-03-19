function treeFn(dirPath){
    
    if(dirPath==undefined) {
        // console.log("Kindly enter the Path");
        treeHelper(process.cwd(), "");
        
        return;
    }
    let doesExist = fs.existsSync(dirPath);
    if(doesExist){
       treeHelper(dirPath, "");
    }
    else{
        console.log("Kindly enter the correct Path");
        return ;
    }
}

function treeHelper(dirPath, indent){
    //is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile==true){
        let Filename = path.basename(dirPath);
        console.log(indent + " |------>>> " + Filename);
    }else{
        let dirName = path.basename(dirPath); 
        console.log(indent + " {{------>>>}} " + dirName);
        let children = fs.readdirSync(dirPath);
        for(let i=0;i<children.length;i++){
            let childrenPath = path.join(dirPath,children[i]);
            treeHelper(childrenPath , indent + "\t");
        }

    }
}