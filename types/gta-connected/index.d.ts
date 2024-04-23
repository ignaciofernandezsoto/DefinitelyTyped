import {EventName as ClientEventName} from "./client";
import {EventName as ServerEventName} from "./server";

export type Client = unknown // TODO

export type Element = Blip | Entity | Marker | Pickup // TODO
export type Blip = unknown // TODO
export type Entity = Building | Physical // TODO
export type Building = unknown // TODO
export type Physical = _Object | Ped | Vehicle // TODO
export type _Object = unknown // TODO
export type Ped = Player // TODO
export type Player = unknown // TODO
export type Vehicle = Train // TODO
export type Train = unknown // TODO
export type Marker = unknown // TODO
export type Pickup = unknown // TODO

export type Event = CancellableEvent | KeyEvent
export type CancellableEvent = unknown
export type KeyEvent = unknown

export type EventName = ClientEventName | ServerEventName | string
export type NetworkEventName = string

/**
 * Represents an event handler function.
 * @param event The event object.
 * @param args The arguments specific to the `eventName`.
 */
type EventHandler = (event: Event, ...args: any[]) => void

/**
 * The addEvent function is used to add an event type.
 * @param eventName The name of the event, case-insensitive.
 * @param minRequiredArgCount The minimum amount of required arguments.
 * @see https://wiki.gtaconnected.com/addEvent
 */
export function addEvent(eventName: EventName, minRequiredArgCount: number): void

/**
 * The `addEventHandler` function is used to add a handler to call when an event occurs.
 * If the event is not an event provided by GTAC, it must be registered first by calling `addEvent`.
 * @param eventName The name of the event, case-insensitive.
 * @param handler The scripting function to call when the event occurs.
 * @see https://wiki.gtaconnected.com/addEventHandler
 */
export function addEventHandler(eventName: EventName, handler: EventHandler): void

/**
 * The `bindEventHandler` function is used to add a handler to call when an event occurs for the source item.
 * @param eventName The name of the event, case-insensitive.
 * @param source The source element.
 * @param handler The scripting function to call when the event occurs for the source element.
 * @see https://wiki.gtaconnected.com/bindEventHandler
 */
export function bindEventHandler(eventName: EventName, source: Element, handler: EventHandler): void

/**
 * The removeEventHandler function is used to remove a handler from being called when an event occurs.
 * @param eventName The name of the event, case-insensitive.
 * @see https://wiki.gtaconnected.com/removeEventHandler
 */
export function removeEventHandler(eventName: EventName): void

/**
 * The `triggerEvent` function is used to trigger an event, which is only triggered on the same endpoint (server or client).
 * Use `triggerNetworkEvent` for script communication between client and server or vice versa.
 * @param eventName The name of the event, case-insensitive.
 * @param source Optional, defaults to `null`. The source element to trigger the event for, used in `bindEventHandler` but not in `addEventHandler`.
 * @param args Optional, defaults to `null`. Arguments to be sent to scripting function that are bound to the event.
 * @see https://wiki.gtaconnected.com/triggerEvent
 */
export function triggerEvent(eventName: EventName, source?: Element, ...args: any[]): void

/**
 * The `unbindEventHandler` function is used to remove a handler from being called when an event occurs for the source item.
 * @param eventName The name of the event, case-insensitive.
 * @param source The source Element
 * @see https://wiki.gtaconnected.com/unbindEventHandler
 */
export function unbindEventHandler(eventName: EventName, source: Element): void

/**
 * The `removeNetworkHandler` function is used to remove a handler from being called when a network event occurs.
 *
 * This only works on custom network events, added by `addNetworkHandler`.
 * @param networkEventName The name of the network event, case-insensitive.
 * @see https://wiki.gtaconnected.com/removeNetworkHandler
 */
export function removeNetworkHandler(networkEventName: NetworkEventName): void


// PREVIOUS SCAFFOLDING

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace myLib;

/*~ If this module has methods, declare them as functions like so.
 */
export function myMethod(a: string): string;
export function myOtherMethod(a: number): number;

/*~ You can declare types that are available via importing the module */
export interface someType {
  name: string;
  length: number;
  extras?: string[];
}

/*~ You can declare properties of the module using const, let, or var */
export const myField: number;

/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
export namespace subProp {
  /*~ For example, given this definition, someone could write:
   *~   import { subProp } from 'yourModule';
   *~   subProp.foo();
   *~ or
   *~   import * as yourMod from 'yourModule';
   *~   yourMod.subProp.foo();
   */
  function foo(): void;
}
