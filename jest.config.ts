import type { JestConfigWithTsJest } from "ts-jest";
import { defaults as tsjPreset } from "ts-jest/presets";
const jestConfig: JestConfigWithTsJest = {
  transform: {
    ...tsjPreset.transform,
  },
};
export default jestConfig;