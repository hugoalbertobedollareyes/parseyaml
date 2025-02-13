import * as core from '@actions/core';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

// Function to read a YAML file
function readYaml(filePath: string): any {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents);
}

// Function to write a YAML file
function writeYaml(filePath: string, data: any): void {
    const yamlContent = yaml.dump(data);
    fs.writeFileSync(filePath, yamlContent, 'utf8');
}

// Function to extract a key from a JSON object
function extractKey(jsonData: any, key: string): any {
    return { [key]: jsonData[key] };
}

async function run() {

  try {

    const keyToExtract = core.getInput('key-to-extract', {required: true});
    const yamlFilePath = core.getInput('yaml-file-path', {required: true});
    const yamlOutputFilePath = core.getInput('yaml-output-file-path', {required: true});

    if (yamlFilePath != null) {

      // Read YAML file
      const yamlData = readYaml(yamlFilePath);

      // Convert YAML data to JSON
      const jsonData = JSON.parse(JSON.stringify(yamlData));

      // Extract key and create new JSON object
      const newJsonObject = extractKey(jsonData, keyToExtract);

      // Convert new JSON object back to YAML and write to file
      writeYaml(yamlOutputFilePath, newJsonObject);

    }

  } catch (error) {
    throw error
  }

}

run()

