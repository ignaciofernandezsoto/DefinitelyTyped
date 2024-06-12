// Namespace name is to ensure no collisions to global variable happens
export namespace GtaConnectedLibraryTypes {

    export enum ElementType {
        ELEMENT_BLIP = 258,
        ELEMENT_BUILDING = 1030,
        ELEMENT_ELEMENT = 0,
        ELEMENT_ENTITY = 6,
        ELEMENT_MARKER = 8194,
        ELEMENT_OBJECT = 526,
        ELEMENT_PED = 30,
        ELEMENT_PHYSICAL = 14,
        ELEMENT_PICKUP = 4098,
        ELEMENT_PLAYER = 94,
        ELEMENT_TRAIN = 2190,
        ELEMENT_TRANSFORMABLE = 2,
        ELEMENT_VEHICLE = 142
    }

    export namespace GTA_III {
        export enum PickupType {
            PICKUP_IN_SHOP = 1,
            PICKUP_ON_STREET,
            PICKUP_ONCE,
            PICKUP_ONCE_TIMEOUT,
            PICKUP_COLLECTABLE1,
            PICKUP_IN_SHOP_OUT_OF_STOCK,
            PICKUP_MONEY,
            PICKUP_MINE_INACTIVE,
            PICKUP_MINE_ARMED,
            PICKUP_NAUTICAL_MINE_INACTIVE,
            PICKUP_NAUTICAL_MINE_ARMED,
            PICKUP_FLOATINGPACKAGE,
            PICKUP_FLOATINGPACKAGE_FLOATING,
            PICKUP_ON_STREET_SLOW
        }
    }

    export namespace GTA_VC {
        export enum PickupType {
            PICKUP_IN_SHOP = 1,
            PICKUP_ON_STREET,
            PICKUP_ONCE,
            PICKUP_ONCE_TIMEOUT,
            PICKUP_ONCE_TIMEOUT_SLOW,
            PICKUP_COLLECTABLE1,
            PICKUP_IN_SHOP_OUT_OF_STOCK,
            PICKUP_MONEY,
            PICKUP_MINE_INACTIVE,
            PICKUP_MINE_ARMED,
            PICKUP_NAUTICAL_MINE_INACTIVE,
            PICKUP_NAUTICAL_MINE_ARMED,
            PICKUP_FLOATINGPACKAGE,
            PICKUP_FLOATINGPACKAGE_FLOATING,
            PICKUP_ON_STREET_SLOW,
            PICKUP_ASSET_REVENUE,
            PICKUP_PROPERTY_LOCKED,
            PICKUP_PROPERTY_FORSALE
        }
    }

    export namespace GTA_SA {
        export enum PickupType {
            PICKUP_NONE,
            PICKUP_IN_SHOP,
            PICKUP_ON_STREET,
            PICKUP_ONCE,
            PICKUP_ONCE_TIMEOUT,
            PICKUP_ONCE_TIMEOUT_SLOW,
            PICKUP_COLLECTABLE1,
            PICKUP_IN_SHOP_OUT_OF_STOCK,
            PICKUP_MONEY,
            PICKUP_MINE_INACTIVE,
            PICKUP_MINE_ARMED,
            PICKUP_NAUTICAL_MINE_INACTIVE,
            PICKUP_NAUTICAL_MINE_ARMED,
            PICKUP_FLOATINGPACKAGE,
            PICKUP_FLOATINGPACKAGE_FLOATING,
            PICKUP_ON_STREET_SLOW,
            PICKUP_ASSET_REVENUE,
            PICKUP_PROPERTY_LOCKED,
            PICKUP_PROPERTY_FORSALE,
            PICKUP_MONEY_DOESNTDISAPPEAR,
            PICKUP_SNAPSHOT,
            PICKUP_2P,
            PICKUP_ONCE_FOR_MISSION
        }
    }

}
