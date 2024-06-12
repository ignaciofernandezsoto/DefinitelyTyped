// export type Element = Blip | Entity | Marker | Pickup // TODO
import {GtaConnectedLibraryTypes} from "./gta-connected-library-types";
import ElementType = GtaConnectedLibraryTypes.ElementType;
import GTA_III = GtaConnectedLibraryTypes.GTA_III;
import GTA_VC = GtaConnectedLibraryTypes.GTA_VC;
import GTA_SA = GtaConnectedLibraryTypes.GTA_SA;

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

export interface Element {
    readonly type: ElementType
}

export type PickupType = GTA_III.PickupType | GTA_VC.PickupType | GTA_SA.PickupType

export interface Pickup {
    quantity: number
    readonly collected: boolean
    pickupType: PickupType
}
