import { Controller, Get, Route, Tags } from "tsoa";

@Tags('Modules')
@Route('api/v1/module')
export class ModuleController extends Controller {
    @Get()
    public async getModuleV1(): Promise<string> {
        return "hola"
    }
}