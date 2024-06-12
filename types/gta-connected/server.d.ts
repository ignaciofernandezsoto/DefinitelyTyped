import {Client, NetworkEventName} from "./index";
import {Element as SharedElement} from "./element";

/**
 * @see https://wiki.gtaconnected.com/Server/Events
 */
export type EventName = ElementEventName | PedEventName | PickupEventName | PlayerEventName | ProcessEventName | ResourceEventName | ServerEventName;

type ElementEventName = "OnElementDestroy" | "OnElementStreamIn" | "OnElementStreamOut"
type PedEventName = "OnPedCrouch" | "OnPedEnterVehicle" | "OnPedExitVehicle" | "OnPedFall" | "OnPedJump" | "OnPedSpawn" | "OnPedUncrouch" | "OnPedWasted"
type PickupEventName = "OnPickupCollected"
type PlayerEventName = "OnPlayerChat" | "OnPlayerCommand" | "OnPlayerConnect" | "OnPlayerJoin" | "OnPlayerJoined" | "OnPlayerQuit"
type ProcessEventName = "OnProcess"
type ResourceEventName = "OnResourceStart" | "OnResourceStop"
type ServerEventName = "OnServerStart"

export interface Element extends SharedElement {
    dimension: number
}

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
