var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "your project name",
        default: this.appname,
      }
    ]);
  }

  writing() {
    const temp = [
      'public/favicon.ico',
      'public/index.html',
      'babel.config.js',
      'package-lock.json',
      'package.json',
      'README.md',
      '.gitignore',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/App.vue',
      'src/main.js',
    ]
    temp.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
};