export namespace GTA_IV_Server_Event_Names {
    /**
     * @see https://wiki.gtaconnected.com/Server/Events
     */
    export type EventName = ElementEventName | PedEventName | PickupEventName | PlayerEventName | ProcessEventName | ResourceEventName | ServerEventName;

    type ElementEventName = "OnElementDestroy" | "OnElementStreamIn" | "OnElementStreamOut"
    type PedEventName = "OnPedSpawn" | "OnPedWasted"
    type PickupEventName = "OnPickupCollected"
    type PlayerEventName = "OnPlayerChat" | "OnPlayerCommand" | "OnPlayerConnect" | "OnPlayerJoin" | "OnPlayerJoined" | "OnPlayerQuit"
    type ProcessEventName = "OnProcess"
    type ResourceEventName = "OnResourceStart" | "OnResourceStop"
    type ServerEventName = "OnServerStart"
}
