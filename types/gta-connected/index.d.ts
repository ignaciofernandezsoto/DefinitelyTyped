export type Client = unknown // TODO

export type Event = CancellableEvent | KeyEvent
export type CancellableEvent = unknown
export type KeyEvent = unknown

export type NetworkEventName = string

/**
 * Represents an event handler function.
 * @param event The event object.
 * @param args The arguments specific to the `eventName`.
 */
export type EventHandler = (event: Event, ...args: any[]) => void
