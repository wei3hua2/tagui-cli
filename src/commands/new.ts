import { ProjectUtil } from '../utils/projects';

export class NewCommand {

  projectName:string;

  constructor(pName: string) {
    this.projectName = pName;
  }

  public create () {
    ProjectUtil.create(this.projectName);
  }
}
