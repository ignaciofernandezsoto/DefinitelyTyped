import {GTA_III_Server_Event_Names} from "./iii/event-name";
import {GTA_VC_Server_Element} from "./vc/element";
import {GTA_VC_Server_Event_Names} from "./vc/event-name";
import {GTA_SA_Server_Event_Names} from "./sa/event-name";
import {GTA_IV_Server_Event_Names} from "./iv/event-name";
import {Client, Colour, EventHandler, NetworkEventName} from "../index";
import {GTA_III_Server_Element} from "./iii/element";
import {GTA_SA_Server_Element} from "./sa/element";
import {GTA_IV_Server_Element} from "./iv/element";
import {GtaConnectedLibraryTypes} from "../gta-connected-library-types";
import {Shared} from "../element";
import EventName = GTA_Server.EventName;
import Resource = GTA_Server.Resource;

export namespace GTA_Server {
    export type EventName =
        GTA_III_Server_Event_Names.EventName
        | GTA_VC_Server_Event_Names.EventName
        | GTA_SA_Server_Event_Names.EventName
        | GTA_IV_Server_Event_Names.EventName
    export interface Resource extends Shared.Resource {}
    export type Element =
        GTA_III_Server_Element.Element
        | GTA_VC_Server_Element.Element
        | GTA_SA_Server_Element.Element
        | GTA_IV_Server_Element.Element
    export type Entity =
        GTA_III_Server_Element.Entity
        | GTA_VC_Server_Element.Entity
        | GTA_SA_Server_Element.Entity
        | GTA_IV_Server_Element.Entity
    export type Blip =
        GTA_III_Server_Element.Blip
        | GTA_VC_Server_Element.Blip
        | GTA_SA_Server_Element.Blip
        | GTA_IV_Server_Element.Blip
    export type Building =
        GTA_III_Server_Element.Building
        | GTA_VC_Server_Element.Building
        | GTA_SA_Server_Element.Building
        | GTA_IV_Server_Element.Building
    export type Physical =
        GTA_III_Server_Element.Physical
        | GTA_VC_Server_Element.Physical
        | GTA_SA_Server_Element.Physical
        | GTA_IV_Server_Element.Physical
    export type _Object =
        GTA_III_Server_Element._Object
        | GTA_VC_Server_Element._Object
        | GTA_SA_Server_Element._Object
        | GTA_IV_Server_Element._Object
    export type Marker =
        GTA_III_Server_Element.Marker
        | GTA_VC_Server_Element.Marker
        | GTA_SA_Server_Element.Marker
        | GTA_IV_Server_Element.Marker
    export type Pickup =
        GTA_III_Server_Element.Pickup
        | GTA_VC_Server_Element.Pickup
        | GTA_SA_Server_Element.Pickup
        | GTA_IV_Server_Element.Pickup
    export type PickupType = GtaConnectedLibraryTypes.PickupType;
}

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

/**
 * The `triggerNetworkEvent` function is used to trigger a custom network event.
 *
 * Use `null` to send the event to all clients or specify a client object. See `addNetworkHandler` for information regarding custom event handler functions.
 *
 * @example
 *
 * function makeCivilianWalkToPos(civilian, x, y, z) {
 *
 *    triggerNetworkEvent("walkToPos", null, civilian, x, y);
 *
 * }
 *
 * @param networkEventName The name of the network event, case-insensitive.
 * @param client Can be `null`. The client to trigger the network event for.
 * @param args Optional, defaults to n/a. Arguments to send to the scripting functions that are bound to the network event.
 * @see https://wiki.gtaconnected.com/triggerNetworkEvent
 */
export function triggerNetworkEvent(networkEventName: NetworkEventName, client?: Client, ...args: any[]): void

export function findResourceByName(resourceName: string): Resource

export function getResources(): Resource[]

export const thisResource: Resource

/**
 * The messageAllExcept function is used to add a message to the chat box for only one client.
 * @param message The message to display in the chat box.
 * @param client The client to not send the chat message to.
 * @param colour Optional, defaults to COLOUR_LIME. The text colour for the message.
 */
export function messageAllExcept(message: string, client: Client, colour?: Colour): void

/**
 * The messageClient function is used to add a message to the chat box for only one client.
 * @param message The message to display in the chat box.
 * @param client The client to send the chat message to.
 * @param colour Optional, defaults to COLOUR_LIME. The text colour for the message.
 */
export function messageClient(message: string, client: Client, colour?: Colour): void
