// type module
import fs from "fs/promises"  //file system
import fsn from "fs" //fs normal
import path from "path"

const basepath = "C:\\webdev\\javascript\\93 clear the clutter" //change path to directory where you have to format docs
let files =  await fs.readdir(basepath) //read the contents of a directory
//console.log(files);

for (const item of files) 
{
  let extension = item.split(".")[item.split(".").length -1]
 // console.log(extension); 

    if(  (extension != "js" && extension != "json") && item.split(".").length > 1)  //item.split(".").length > 1 it is not a folder
    {
            if(fsn.existsSync(path.join(basepath, extension)))//further path when folder created
            { 
                // Move the file to this directory if its not a js or json file
                //.rename to move the file into folder
                fs.rename(path.join(basepath, item), path.join(basepath, extension, item))
            }
            else
            {
                fs.mkdir(extension); //make folder for each extension
                fs.rename(path.join(basepath, item), path.join(basepath, extension, item)) //add first file of that extension
            }
    }  
}
