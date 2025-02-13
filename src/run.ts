import * as core from '@actions/core';
import { processYaml } from './parseyaml';


export async function run() {

  try {

    const keyToExtract = core.getInput('key-to-extract', {required: true});
    const yamlFilePath = core.getInput('yaml-file-path', {required: true});
    const yamlOutputFilePath = core.getInput('yaml-output-file-path', {required: true});

    if (yamlFilePath != null) {

      processYaml(yamlFilePath, yamlOutputFilePath, keyToExtract)

    }

  } catch (error) {
    throw error
  }

}

run()

