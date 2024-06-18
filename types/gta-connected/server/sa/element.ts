import {ClientID, Shared} from "../../element";
import {Client} from "../../index";

export namespace GTA_SA_Server_Element {
    export interface Element extends Shared.Element {
        dimension: number
        existsFor: (client: Client) => boolean
        resource: Shared.Resource
        setExistsFor: (client: Client, exists: boolean) => boolean
        setSyncer: (clientId: ClientID, forced?: boolean) => void
        clearExistsFor: () => void
    }

    export interface Pickup extends Element {}

    export interface Entity extends Shared.Entity, Element {}

    export interface Blip extends Element {}

    export interface Building extends Entity {}

    export interface Physical extends Entity {}

    export interface _Object extends Physical {}

    export interface Marker extends Element {}

}
