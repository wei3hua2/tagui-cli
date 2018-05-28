export class ProjectConfig {
  version:string;
  projectName:string;

  entryFile:string;

  // <empty> , headless , firefox or chrome
  browserType?:string;

  debug?:boolean;
  quiet?:boolean;
  speed?:boolean;
  test?:boolean;
  report?:boolean;

  baseline?:string;

  inputs?:string[];

  constructor(projectName:string, entryFile:string){
    this.version = "0.1";
    this.projectName = projectName;
    this.entryFile = entryFile;
  }

  public static parse(json:string) {
    let obj = JSON.parse(json);
    let config = new ProjectConfig(obj.projectName, obj.entryFile);

    config.browserType = obj.browserType;
    config.debug = obj.debug;
    config.quiet = obj.quiet;
    config.speed = obj.speed;
    config.test = obj.test;
    config.baseline = obj.baseline;
    config.inputs = obj.inputs;

    return config;
  }
}
