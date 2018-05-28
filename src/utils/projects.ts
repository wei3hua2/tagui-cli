import * as fs from 'fs';
import * as path from 'path';

import * as shell from 'shelljs';

import { ProjectConfig } from '../models/ProjectConfig';

export class ProjectUtil {
  public static create(projectName:string) {
    fs.mkdirSync(projectName);
    fs.writeFileSync(projectName+'/tagui-config.json' , this.createTaguiMetaFile(projectName) );

    shell.cd(projectName);
    shell.exec('npm init -y');
    shell.exec('npm install --save tagui');
  }

  static createTaguiMetaFile (projectname:string) :string {
    let config = new ProjectConfig(projectname,'main');

    return JSON.stringify(config, null, 2);
  }
}
