import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"input the url:",
        name:"URL",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    console.log("qr is generated");
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in this environment.");
    } else {
      console.error("omething went wrong:", error);
    }
  });