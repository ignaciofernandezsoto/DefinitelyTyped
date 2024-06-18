import {Shared, TCuboid, TSphere, Vec3} from "../../element";
import {GtaConnectedLibraryTypes} from "../../gta-connected-library-types";

export namespace GTA_VC_Client_Element {

    import GTA_VC = GtaConnectedLibraryTypes.GTA_VC;

    export interface Element extends Shared.Element {
        readonly isLocal: boolean
        readonly isSyncer: boolean
    }

    export interface Entity extends Shared.Entity, Element {
        readonly boundingCentre: Vec3
        readonly boundingMax: Vec3
        readonly boundingMin: Vec3
        readonly boundingRadius: Vec3
        readonly collisionBoxCount: number
        readonly collisionBoxes: TCuboid[]
        readonly collisionLineCount: number
        readonly collisionLines: TCuboid[]
        readonly collisionsEnabled: boolean
        readonly collisionSphereCount: number
        readonly collisionSpheres: TSphere[]
        readonly collisionVertexCount: number
        readonly distanceFromCentreOfMassToBaseOfModel: number
        isOnScreen: boolean
        markAsNoLongerNeeded: () => void
        setProofs: (bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean) => void
        readonly status: number
    }

    export interface Blip extends Element {}

    export interface Building extends Entity {}

    export interface Physical extends Entity {
        centerOfMass: Vec3
        collisionPower: number
        mass: number
        turnVelocity: Vec3
        velocity: Vec3
    }

    export interface _Object extends Physical {}

    export interface Pickup extends Element {
        quantity: number
        readonly collected: boolean
        pickupType: GTA_VC.PickupType
        readonly modelIndex: number
    }

    export interface Marker extends Element {
        brightness: number
        cameraRange: number
        colour: number
        pulseFraction: number
        pulsePeriod: number
        radius: number
        rotateRate: number
    }

}
