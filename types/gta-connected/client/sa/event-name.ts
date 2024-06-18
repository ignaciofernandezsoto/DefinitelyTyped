export namespace GTA_SA_Client_Event_Names {
    /**
     * @see https://wiki.gtaconnected.com/Client/Events
     */
    export type EventName = CameraEventName | ChatEventName | CursorEventName | ElementEventName | EntityEventName | FocusEventName | GuiEventName | HudEventName | KeyEventName | MouseEventName | NetworkEventName | PedEventName | PickupEventName | ProcessEventName | RenderEventName | ResourceEventName | StreamingEventName | VehicleEventName

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
    type PedEventName = "OnPedBusted" | "OnPedChangeWeapon" | "OnPedCrouch" | "OnPedDead" | "OnPedEnteringVehicle" | "OnPedEnterVehicle" | "OnPedExitingVehicle" | "OnPedExitVehicle" | "OnPedFall" | "OnPedFireProjectile" | "OnPedInflictDamage" | "OnPedJump" | "OnPedSpawn" | "OnPedStartFightAttack" | "OnPedStartFightDefend" | "OnPedUncrouch" | "OnPedUseWeapon" | "OnPedWasted"
    type PickupEventName = "OnPickupCollected"
    type ProcessEventName = "OnProcess"
    type RenderEventName = "OnPostRender2D" | "OnPreRender" | "OnRender" | "OnRender2D" | "OnRenderEffects"
    type ResourceEventName = "OnResourceReady" | "OnResourceStart" | "OnResourceStop"
    type StreamingEventName = "OnStreamingMapLevelChange"
    type VehicleEventName = "OnVehicleExplode"

}
