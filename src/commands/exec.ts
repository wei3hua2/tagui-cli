import * as fs from 'fs';
import * as shell from 'shelljs';

import { ProjectUtil } from '../utils/projects';
import { ProjectConfig } from '../models/ProjectConfig'

export class ExecCommand {

  // static EXEC_PATH = `./node_modules/.bin/tagui ${filename}`;

  constructor() {
  }

  validate() {
    //1. tagui-config.json not found
    //2. ...details...
  }

  execute() {
    let projectConfig = this.readConfig();
    console.log(projectConfig);

    let browserType = !projectConfig.browserType ? '' : projectConfig.browserType;
    let debug = !projectConfig.debug ? '' : 'debug';
    let quiet = !projectConfig.quiet ? '' : 'quiet';
    let report = !projectConfig.report ? '' : 'report';
    let test = !projectConfig.test ? '' : 'test';
    let speed = !projectConfig.speed ? '' : 'speed';
    let baseline = !projectConfig.baseline ? '' : 'baseline';

    let inputs = !projectConfig.inputs ? '' : 'inputs';

    let execCmd = `./node_modules/.bin/tagui ${projectConfig.entryFile} ${browserType} ${debug} ${quiet} ${report} ${test} ${speed} ${baseline}`;

    console.log(execCmd);

    shell.exec(execCmd);
  }

  readConfig() : ProjectConfig {
    let content = fs.readFileSync('tagui-config.json', 'utf8');
    return ProjectConfig.parse(content);
  }
}
