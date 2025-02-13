import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { json } from 'stream/consumers';

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

    let keyArray = key.split("\.")
    let currentObject = jsonData;
    
    for(let i = 0; i < keyArray.length; i++) {
        currentObject = currentObject[keyArray[i]]
    }

    return currentObject;

    
}

export function processYaml(inputYamlPath: string, outputYamlPath: string, keyToExtract: string): void {
  
  // Read YAML file
  const yamlData = readYaml(inputYamlPath);
  console.log(yamlData);

  // Convert YAML data to JSON
  const jsonData = JSON.parse(JSON.stringify(yamlData));
  console.log(jsonData);

  // Extract key and create new JSON object
  console.log(keyToExtract)
  const newJsonObject = extractKey(jsonData, keyToExtract);
  console.log(newJsonObject)
  
  // Convert new JSON object back to YAML and write to file
  writeYaml(outputYamlPath, newJsonObject);

}