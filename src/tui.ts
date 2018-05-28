import * as program from "commander";

import {NewCommand} from './commands/new';
import {ExecCommand} from './commands/exec';

program
  .version('0.1.0')
  .description(
'******************************************** '+'\n'+
'  _____           _   _ ___    ____ _     ___  '+'\n'+
' |_   _|_ _  __ _| | | |_ _|  / ___| |   |_ _| '+'\n'+
'   | |/ _` |/ _` | | | || |  | |   | |    | |  '+'\n'+
'   | | (_| | (_| | |_| || |  | |___| |___ | |  '+'\n'+
'   |_|\\__,_|\\__, |\\___/|___|  \\____|_____|___| '+'\n'+
'            |___/                              '+'\n\n'+
'  ******************************************** '
  )
  .usage('[command] [options]');

program
 .command('new <project-name>')
 .description('create a new project.')
 .on('--help', () => {
   console.log(`
  Examples:
     * tui new automate-signin

     This command will create a new project directory to execute Tagui automation.
     Together with default configuration.
  `);
 })
 // .option('-f, --foldername', 'Folder name')
 .action( (projectName, cmd) => {
   let newCom = new NewCommand(projectName);
   newCom.create();
 });

 program
  .command('run')
  .description('execute flow in project directory.')
  .on('--help', () => {
    console.log(`
  `)
  })
  .action ((dir, cmd) => {
    let execCom = new ExecCommand();
    execCom.execute();
  });

  // program.on('--help', function(){
  //   console.log(`
  // Examples:
  //
  //   This is a create
  //   That is a dog
  //     `);
  // });

program.parse(process.argv);

if(process.argv.length < 3)
  program.help();
