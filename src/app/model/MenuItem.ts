import { RoutingEnum } from "./enum/RoutingEnum";

export class MenuItem{
    route: RoutingEnum;
    title: string;
    constructor(route: RoutingEnum, title: string){
        this.route = route;
        this.title = title;
    }
}