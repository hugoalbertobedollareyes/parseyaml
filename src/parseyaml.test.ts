import { processYaml } from './parseyaml';
//import { dirname } from 'path';
//import { fileURLToPath } from 'url';

// jest.mock('fs');
// jest.mock('js-yaml');

describe('processYaml', () => {

    //const __dirname = dirname(fileURLToPath(import.meta.url))
    console.log('Current path:' + __dirname)

    const inputYamlPath = __dirname + "/test/values.yaml";
    const outputYamlPath = __dirname + '/test/config.yaml';
    const keyToExtract = 'opentelemetry-collector.config';
    
    const yamlData = { key_to_extract: 'value', other_key: 'other_value' };
    const jsonData = JSON.stringify(yamlData);
    const newJsonObject = { key_to_extract: 'value' };

    // beforeEach(() => {
    //     (fs.readFileSync as jest.Mock).mockReturnValue('yamlContent');
    //     (yaml.load as jest.Mock).mockReturnValue(yamlData);
    //     (yaml.dump as jest.Mock).mockReturnValue('newYamlContent');
    // });

    // afterEach(() => {
    //     jest.clearAllMocks();
    // });

    it('should read a YAML file, convert it to JSON, extract a key, convert it back to YAML, and write to a file', () => {
        processYaml(inputYamlPath, outputYamlPath, keyToExtract);

        // expect(fs.readFileSync).toHaveBeenCalledWith(inputYamlPath, 'utf8');
        // expect(yaml.load).toHaveBeenCalledWith('yamlContent');
        // expect(JSON.parse(JSON.stringify(yamlData))).toEqual(JSON.parse(jsonData));
        // expect(fs.writeFileSync).toHaveBeenCalledWith(outputYamlPath, 'newYamlContent', 'utf8');
    });

});