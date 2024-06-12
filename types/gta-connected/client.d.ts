import {NetworkEventName as SharedNetworkEventName} from "./index";

/**
 * @see https://wiki.gtaconnected.com/Client/Events
 */
export type EventName = CameraEventName | ChatEventName | CursorEventName | DodoEventName | ElementEventName | EntityEventName | FocusEventName | GuiEventName | HudEventName | KeyEventName | MouseEventName | NetworkEventName | PedEventName | PickupEventName | ProcessEventName | RenderEventName | ResourceEventName | StreamingEventName | VehicleEventName

type CameraEventName = "OnBeforeProcessCamera" | "OnCameraProcess"
type ChatEventName = "OnChatOutput"
type CursorEventName = "OnCursorDown" | "OnCursorMove" | "OnCursorUp"
type DodoEventName = "OnRegisterDodoFlightTime"
type ElementEventName = "OnElementDestroy" | "OnElementStreamIn" | "OnElementStreamOut"
type EntityEventName = "OnEntityProcess"
type FocusEventName = "OnFocus" | "OnLostFocus"
type GuiEventName = "OnGUIAnchorClick" | "OnGUIClick"
type HudEventName = "OnBeforeDrawHUD" | "OnDrawHUD" | "OnDrawnHUD"
type KeyEventName = "OnCharacter" | "OnKeyDown" | "OnKeyUp"
type MouseEventName = "OnMouseConnected" | "OnMouseDisconnected" | "OnMouseDown" | "OnMouseLeave" | "OnMouseMove" | "OnMouseUp" | "OnMouseWheel"
type NetworkEventName = "OnDisconnect"
type PedEventName = "OnPedBusted" | "OnPedChangeWeapon" | "OnPedCrouch" | "OnPedDead" | "OnPedEnteredVehicle" | "OnPedEnteringVehicle" | "OnPedEnterVehicle" | "OnPedExitedVehicle" | "OnPedExitingVehicle" | "OnPedExitVehicle" | "OnPedFall" | "OnPedFireProjectile" | "OnPedInflictDamage" | "OnPedJump" | "OnPedSpawn" | "OnPedStartClosingVehicleDoor" | "OnPedStartFightAttack" | "OnPedStartFightDefend" | "OnPedStartOpeningVehicleDoor" | "OnPedUncrouch" | "OnPedUseWeapon" | "OnPedWasted"
type PickupEventName = "OnPickupCollected"
type ProcessEventName = "OnProcess"
type RenderEventName = "OnPostRender2D" | "OnPreRender" | "OnRender" | "OnRender2D" | "OnRenderEffects"
type ResourceEventName = "OnResourceReady" | "OnResourceStart" | "OnResourceStop"
type StreamingEventName = "OnStreamingMapLevelChange"
type VehicleEventName = "OnVehicleExplode"

/**
 * The `isConnecting` variable is used to fetch the status of connecting to a server, for the local client.
 *
 * A boolean, `bool true` if the client is connecting to a server, `bool false` otherwise.
 * @see https://wiki.gtaconnected.com/isConnecting
 */
declare const isConnecting: boolean

/**
 * The `isConnected` variable is used to fetch the server-connection status of the local client.
 *
 * A boolean, `bool true` if the client is connected to a server, `bool false` otherwise.
 * @see https://wiki.gtaconnected.com/isConnected
 */
declare const isConnected: boolean

/**
 * The `triggerNetworkEvent` function is used to trigger a custom network event.
 * @param networkEventName The name of the network event, case-insensitive.
 * @param args Optional, defaults to n/a. Arguments to send to the scripting functions that are bound to the network event.
 * @see https://wiki.gtaconnected.com/triggerNetworkEvent
 */
export function triggerNetworkEvent(networkEventName: SharedNetworkEventName, ...args: any[]): void

/**
 * The `connect` function is used to connect to a server.
 * @param host The host to connect to.
 * @param port The port to connect to.
 * @param password Optional, defaults to "". The password to connect.
 * @see https://wiki.gtaconnected.com/connect
 */
export function connect(host: string, port: number, password?: string): void

/**
 * The `disconnect` function is used to disconnect from a server.
 * @see https://wiki.gtaconnected.com/disconnect
 */
export function disconnect(): void
