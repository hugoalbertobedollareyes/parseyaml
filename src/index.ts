import * as core from '@actions/core'
import * as fs from 'fs'
import * as yaml from 'js-yaml'

async function run() {

  try {

    const yamlFilePath = core.getInput('yaml-file-path')

    if (yamlFilePath != null) {
      const data = yaml.load(fs.readFileSync(yamlFilePath, { encoding: 'utf-8' }));

      fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));

      // Display the file data
      console.log(data);
    }


  } catch (error) {
    throw error
  }

}

run()