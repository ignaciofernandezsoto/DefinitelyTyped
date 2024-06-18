// export type Element = Blip | Entity | Marker | Pickup // TODO
import {GtaConnectedLibraryTypes} from "./gta-connected-library-types";
import ElementType = GtaConnectedLibraryTypes.ElementType;

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

export type Vec3 = unknown // TODO
export type TCuboid = unknown // TODO
export type TSphere = unknown // TODO
export type TTriangle = unknown // TODO
export type Matrix4x4 = unknown // TODO

export interface NetFlags { // TODO https://wiki.gtaconnected.com/NetFlags

}

export type ClientID = number

export namespace Shared {

    export interface Resource {
        readonly exports: { [key: string]: (...args: any[]) => any }
        getExport: (exportName: string) => any
        readonly isStarted: boolean
        readonly isStarting: boolean
        readonly name: string
        restart: () => void
        start: () => void
        stop: () => void
    }

    export interface Element {
        readonly type: ElementType
        getData: (dataName: string) => any
        getRotation: (dataName: string) => Vec3
        readonly id: number
        isCreatedFor: unknown,
        readonly isOwner: boolean
        isType: (elementType: ElementType) => boolean
        name: string
        readonly netFlags: NetFlags
        parent: Element
        position: Vec3
        removeAllData: () => void
        removeData: (dataName: string) => void
        rotation: Vec3
        setData: (dataName: string, data: any, syncWithClientsNow: boolean) => void
        readonly streamInDistance: number
        readonly streamOutDistance: number
        syncer: ClientID
        syncerId: unknown
        readonly children: Element[]
    }

    export interface Entity extends Element {
        heading: number
        interior: number
        matrix: Matrix4x4
        model: unknown // ?
        onScreen: unknown // ?
        visible: unknown // ?
    }

}
