import * as shell from 'shelljs';
import * as fs from 'fs';

import { ProjectUtil } from '../utils/projects';
import { ProjectConfig } from '../models/ProjectConfig';

export class VersionCommand {
  TAGUI_VERSION:string = "0.1.0";

  nodeVersion:string;
  npmVersion:string;
  tagUiVersion:string;

  constructor() {
  }

  getVersions() : string {
    return '\n___________________________________'+'\n\n'+
    'tagui cli : '+this.TAGUI_VERSION+'\n' +
    'tagui     : '+this.getTagUiVersion()+'\n' +
    'node      : '+this.getNodeVersion() +
    'npm       : '+this.getNpmVersion() +'\n'+
    '___________________________________'+'\n';
  }

  getNodeVersion () :string {
    return shell.exec('node --version',{silent:true}).stdout;
  }
  getNpmVersion () :string {
    return shell.exec('npm --version',{silent:true}).stdout;
  }

  getTagUiVersion() : string {
    let version = "not project folder";

    if(fs.existsSync('tagui-config.json')){
      let config = ProjectConfig.parse( fs.readFileSync('tagui-config.json', 'utf8') );
      version = config.version;
    }

    return version;
  }
}
