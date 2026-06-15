import { Config } from "tsoa";

const config: Config = {
  entryFile: "src/index.ts",
  noImplicitAdditionalProperties: "throw-on-extras",
  controllerPathGlobs: ["src/**/*Controller.ts"],
  spec: {
    "outputDirectory": "src/doc",
    "specVersion": 3,
    host: 'localhost'
  },
  routes: {
    "routesDir": "src/routes"
  }
}

export default config