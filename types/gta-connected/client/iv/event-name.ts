export namespace GTA_IV_Client_Event_Names {
    /**
     * @see https://wiki.gtaconnected.com/Client/Events
     */
    export type EventName = CameraEventName | ChatEventName | CursorEventName | ElementEventName | EntityEventName | FocusEventName | GuiEventName | HudEventName | KeyEventName | MouseEventName | NetworkEventName | PedEventName | PickupEventName | ProcessEventName | RenderEventName | ResourceEventName

    type CameraEventName = "OnBeforeProcessCamera" | "OnCameraProcess"
    type ChatEventName = "OnChatOutput"
    type CursorEventName = "OnCursorDown" | "OnCursorMove" | "OnCursorUp"
    type ElementEventName = "OnElementDestroy" | "OnElementStreamIn" | "OnElementStreamOut"
    type EntityEventName = "OnEntityProcess"
    type FocusEventName = "OnFocus" | "OnLostFocus"
    type GuiEventName = "OnGUIAnchorClick" | "OnGUIClick"
    type HudEventName = "OnBeforeDrawHUD" | "OnDrawHUD" | "OnDrawnHUD"
    type KeyEventName = "OnCharacter" | "OnKeyDown" | "OnKeyUp"
    type MouseEventName = "OnMouseConnected" | "OnMouseDisconnected" | "OnMouseDown" | "OnMouseLeave" | "OnMouseMove" | "OnMouseUp" | "OnMouseWheel"
    type NetworkEventName = "OnDisconnect"
    type PedEventName = "OnPedDead" | "OnPedSpawn" | "OnPedWasted"
    type PickupEventName = "OnPickupCollected"
    type ProcessEventName = "OnProcess"
    type RenderEventName = "OnPostRender2D" | "OnPreRender" | "OnRender" | "OnRender2D"
    type ResourceEventName = "OnResourceReady" | "OnResourceStart" | "OnResourceStop"

}
