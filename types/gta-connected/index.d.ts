export type Client = unknown // TODO

export interface EventType {
    preventDefault: () => void
    isDefaultPrevented: () => boolean
}

export interface CancellableEvent extends EventType {

}

export interface KeyEvent extends EventType {
    readonly down: boolean
    readonly keyCode: number
    readonly mod: number
    readonly repeat: number
    readonly scanCode: number
}

export type NetworkEventName = string

/**
 * Represents an event handler function.
 * @param event The event object.
 * @param args The arguments specific to the `eventName`.
 */
export type EventHandler<T extends EventType = EventType> = (event: T, ...args: any[]) => void

export const COLOUR_AQUA: number
export const COLOUR_BLACK: number
export const COLOUR_BLUE: number
export const COLOUR_FUCHSIA: number
export const COLOUR_GREEN: number
export const COLOUR_LIME: number
export const COLOUR_ORANGE: number
export const COLOUR_RED: number
export const COLOUR_SILVER: number
export const COLOUR_SKYBLUE: number
export const COLOUR_TRANSPARENT: number
export const COLOUR_WHITE: number
export const COLOUR_YELLOW: number

export type Colour = number

/**
 * The message function is used to add a message to the chat box.
 *
 * When used server-side, the message is shown for all players.
 * When used client-side, the message is only shown for the local player.
 * @param message The message to display in the chat box.
 * @param colour Optional, defaults to COLOUR_LIME. The text colour for the message.
 * @see https://wiki.gtaconnected.com/message
 */
export function message(message: string, colour?: Colour): void
