import { Component } from "./Component";
import { Mediator } from "./Mediator";

const mediator = Mediator.getInstance();
export const appComponent = new Component(mediator, "appComponent")
export const authComponent = new Component(mediator, "authComponent")


export const mediatorSetup = () => {
    mediator.register(authComponent)
    mediator.register(appComponent)
}




