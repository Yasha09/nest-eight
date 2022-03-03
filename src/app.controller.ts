import {Controller, Get} from "@nestjs/common";

@Controller('/api')
export class AppController {
    @Get('/bro')
    getRootRoute() {
        return 'hi bro'
    }

    @Get('bye')
    getByeRoute() {
        return 'Bye bro !!!'
    }
}