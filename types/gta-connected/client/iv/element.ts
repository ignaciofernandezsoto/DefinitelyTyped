import {Shared, TCuboid, TSphere, Vec3} from "../../element";

export namespace GTA_IV_Client_Element {

    export interface Element extends Shared.Element {
        readonly isLocal: boolean
        readonly isSyncer: boolean
    }

    export interface Entity extends Shared.Entity, Element {
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
        setProofs: (bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean) => void
    }

    export interface Blip extends Element {}

    export interface Building extends Entity {}

    export interface Physical extends Entity {
        centerOfMass: Vec3
        mass: number
        turnVelocity: Vec3
        velocity: Vec3
    }

    export interface _Object extends Physical {}

    export interface Pickup extends Element {
        readonly collected: boolean
        pickupType: number // TODO ?
        readonly modelIndex: number
    }

    export interface Marker extends Element {}

}
