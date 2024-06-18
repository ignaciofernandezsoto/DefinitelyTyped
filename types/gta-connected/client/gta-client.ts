import {GTA_III_Client_Event_Names} from "./iii/event-name";
import {GTA_VC_Client_Event_Names} from "./vc/event-name";
import {GTA_SA_Client_Event_Names} from "./sa/event-name";
import {GTA_IV_Client_Event_Names} from "./iv/event-name";
import {GTA_III_Client_Element} from "./iii/element";
import {GTA_VC_Client_Element} from "./vc/element";
import {GTA_SA_Client_Element} from "./sa/element";
import {GTA_IV_Client_Element} from "./iv/element";
import {EventHandler, NetworkEventName} from "../index";
import {GtaConnectedLibraryTypes} from "../gta-connected-library-types";
import {Shared} from "../element";

export namespace GTA_Client {
    export type EventName = GTA_III_Client_Event_Names.EventName | GTA_VC_Client_Event_Names.EventName | GTA_SA_Client_Event_Names.EventName | GTA_IV_Client_Event_Names.EventName
    export type Resource = Shared.Resource | {
        isReady: () => boolean
    }
    export type Element = GTA_III_Client_Element.Element | GTA_VC_Client_Element.Element | GTA_SA_Client_Element.Element | GTA_IV_Client_Element.Element
    export type Entity = GTA_III_Client_Element.Entity | GTA_VC_Client_Element.Entity | GTA_SA_Client_Element.Entity | GTA_IV_Client_Element.Entity
    export type Blip = GTA_III_Client_Element.Blip | GTA_VC_Client_Element.Blip | GTA_SA_Client_Element.Blip | GTA_IV_Client_Element.Blip
    export type Building = GTA_III_Client_Element.Building | GTA_VC_Client_Element.Building | GTA_SA_Client_Element.Building | GTA_IV_Client_Element.Building
    export type Physical = GTA_III_Client_Element.Physical | GTA_VC_Client_Element.Physical | GTA_SA_Client_Element.Physical | GTA_IV_Client_Element.Physical
    export type _Object = GTA_III_Client_Element._Object | GTA_VC_Client_Element._Object | GTA_SA_Client_Element._Object | GTA_IV_Client_Element._Object
    export type Pickup = GTA_III_Client_Element.Pickup | GTA_VC_Client_Element.Pickup | GTA_SA_Client_Element.Pickup | GTA_IV_Client_Element.Pickup
    export type PickupType = GtaConnectedLibraryTypes.PickupType;
    export type Marker = GTA_III_Client_Element.Marker | GTA_VC_Client_Element.Marker | GTA_SA_Client_Element.Marker | GTA_IV_Client_Element.Marker

    /**
     * The `isConnecting` variable is used to fetch the status of connecting to a server, for the local client.
     *
     * A boolean, `bool true` if the client is connecting to a server, `bool false` otherwise.
     * @see https://wiki.gtaconnected.com/isConnecting
     */
    export declare const isConnecting: boolean

    /**
     * The `isConnected` variable is used to fetch the server-connection status of the local client.
     *
     * A boolean, `bool true` if the client is connected to a server, `bool false` otherwise.
     * @see https://wiki.gtaconnected.com/isConnected
     */
    export declare const isConnected: boolean

    /**
     * The addEvent function is used to add an event type.
     * @param eventName The name of the event, case-insensitive.
     * @param minRequiredArgCount The minimum amount of required arguments.
     * @see https://wiki.gtaconnected.com/addEvent
     */
    export declare function addEvent(eventName: EventName, minRequiredArgCount: number): void

    /**
     * The `addEventHandler` function is used to add a handler to call when an event occurs.
     * If the event is not an event provided by GTAC, it must be registered first by calling `addEvent`.
     * @param eventName The name of the event, case-insensitive.
     * @param handler The scripting function to call when the event occurs.
     * @see https://wiki.gtaconnected.com/addEventHandler
     */
    export declare function addEventHandler(eventName: EventName, handler: EventHandler): void

    /**
     * The `bindEventHandler` function is used to add a handler to call when an event occurs for the source item.
     * @param eventName The name of the event, case-insensitive.
     * @param source The source element.
     * @param handler The scripting function to call when the event occurs for the source element.
     * @see https://wiki.gtaconnected.com/bindEventHandler
     */
    export declare function bindEventHandler(eventName: EventName, source: Element, handler: EventHandler): void

    /**
     * The removeEventHandler function is used to remove a handler from being called when an event occurs.
     * @param eventName The name of the event, case-insensitive.
     * @see https://wiki.gtaconnected.com/removeEventHandler
     */
    export declare function removeEventHandler(eventName: EventName): void

    /**
     * The `triggerEvent` function is used to trigger an event, which is only triggered on the same endpoint (server or client).
     * Use `triggerNetworkEvent` for script communication between client and server or vice versa.
     * @param eventName The name of the event, case-insensitive.
     * @param source Optional, defaults to `null`. The source element to trigger the event for, used in `bindEventHandler` but not in `addEventHandler`.
     * @param args Optional, defaults to `null`. Arguments to be sent to scripting function that are bound to the event.
     * @see https://wiki.gtaconnected.com/triggerEvent
     */
    export declare function triggerEvent(eventName: EventName, source?: Element, ...args: any[]): void

    /**
     * The `unbindEventHandler` function is used to remove a handler from being called when an event occurs for the source item.
     * @param eventName The name of the event, case-insensitive.
     * @param source The source Element
     * @see https://wiki.gtaconnected.com/unbindEventHandler
     */
    export declare function unbindEventHandler(eventName: EventName, source: Element): void

    /**
     * The `removeNetworkHandler` function is used to remove a handler from being called when a network event occurs.
     *
     * This only works on custom network events, added by `addNetworkHandler`.
     * @param networkEventName The name of the network event, case-insensitive.
     * @see https://wiki.gtaconnected.com/removeNetworkHandler
     */
    export declare function removeNetworkHandler(networkEventName: NetworkEventName): void

    /**
     * The `triggerNetworkEvent` function is used to trigger a custom network event.
     * @param networkEventName The name of the network event, case-insensitive.
     * @param args Optional, defaults to n/a. Arguments to send to the scripting functions that are bound to the network event.
     * @see https://wiki.gtaconnected.com/triggerNetworkEvent
     */
    export declare function triggerNetworkEvent(networkEventName: NetworkEventName, ...args: any[]): void

    /**
     * The `connect` function is used to connect to a server.
     * @param host The host to connect to.
     * @param port The port to connect to.
     * @param password Optional, defaults to "". The password to connect.
     * @see https://wiki.gtaconnected.com/connect
     */
    export declare function connect(host: string, port: number, password?: string): void

    /**
     * The `disconnect` function is used to disconnect from a server.
     * @see https://wiki.gtaconnected.com/disconnect
     */
    export declare function disconnect(): void

    export declare function findResourceByName(resourceName: string): Resource

    export declare function getResources(): Resource[]

    export declare const thisResource: Resource
}
