import { decode, encode } from './base62Util';

/**
 * Turns a loadout code into a loadout object
 * @param {String} loadoutCode 
 * @returns {null | {
 *      playerName: string,
 *      heroId: number,
 *      skinId: number,
 *      dyeId: number,
 *      traits: {
 *          pentagonTraitId: number,
 *          diamondTraitId: number,
 *          triangleTraitId: number,
 *          noBonusTraitId: number
 *      },
 *      guardianIds: [
 *          number,
 *          number
 *      ],
 *      consumableIds: [
 *          number,
 *          number
 *      ],
 *      slots: [
 *          {
 *              itemId: number,
 *              partIds: [
 *                  number,
 *                  number,
 *                  number,
 *              ]
 *          },
 *          {
 *              itemId: number,
 *              partIds: [
 *                  number,
 *                  number,
 *                  number,
 *              ]
 *          },
 *          {
 *              itemId: number,
 *              partIds: [
 *                  number,
 *                  number,
 *                  number,
 *              ]
 *          },
 *          {
 *              itemId: number,
 *              partIds: [
 *                  number,
 *                  number,
 *                  number,
 *              ]
 *          },
 *          {
 *              itemId: number,
 *              partIds: [
 *                  number,
 *                  number,
 *                  number,
 *              ]
 *          },
 *          {
 *              itemId: number,
 *              partIds: [
 *                  number,
 *                  number,
 *                  number,
 *              ]
 *          },
 *          {
 *              itemId: number,
 *              partIds: [
 *                  number,
 *                  number,
 *                  number,
 *              ]
 *          },
 *          {
 *              itemId: number,
 *              partIds: [
 *                  number,
 *                  number,
 *                  number,
 *              ]
 *          },
 *          {
 *              itemId: number,
 *              partIds: [
 *                  number,
 *                  number,
 *                  number,
 *              ]
 *          },
 *      ]
 * }} Returns null when the loadout code couldn't be parsed.
 */
export const load = function (loadoutCode) {
    try {
        const parts = loadoutCode.split("-");
        
        // Load most of the data from the code
        let loadout = {
            playerName: parts[0],
            heroId: decode(parts[1].substring(0, 1)),
            skinId: decode(parts[1].substring(1, 3)),
            dyeId: decode(parts[1].substring(3, 4)),
            traits: {
                pentagonTraitId: decode(parts[5].substring(0, 1)),
                diamondTraitId: decode(parts[5].substring(1, 2)),
                triangleTraitId: decode(parts[5].substring(2, 3)),
                noBonusTraitId: decode(parts[5].substring(3, 4)),
            },
            guardianIds: [
                decode(parts[3].substring(0, 1)),
                decode(parts[3].substring(1, 2))
            ],
            consumableIds: [
                decode(parts[4].substring(0, 1)),
                decode(parts[4].substring(1, 2))
            ],
            slots: [],
        };

        // Load slots in a loop cause I ain't writing the same thing 9 times
        for (let index = 0; index < 9; index++) {
            loadout.slots.push({
                itemId: decode(parts[2].substring(index * 2, (index + 1) * 2)),
                partIds: [
                    decode(parts[6].substring(index * 3 + 0, index * 3 + 1)),
                    decode(parts[6].substring(index * 3 + 1, index * 3 + 2)),
                    decode(parts[6].substring(index * 3 + 2, index * 3 + 3))
                ]
            });
        }

        return loadout;
    } catch(exception) {
        // If anything is off about this code it's a faulty code so we return null
        return null;
    }
}

/**
 * Turns a loadout object into a loadout code
 * @param {{
*      playerName: string,
*      heroId: number,
*      skinId: number,
*      dyeId: number,
*      traits: {
*          pentagonTraitId: number,
*          diamondTraitId: number,
*          triangleTraitId: number,
*          noBonusTraitId: number
*      },
*      guardianIds: [
*          number,
*          number
*      ],
*      consumableIds: [
*          number,
*          number
*      ],
*      slots: [
*          {
*              itemId: number,
*              partIds: [
*                  number,
*                  number,
*                  number,
*              ]
*          },
*          {
*              itemId: number,
*              partIds: [
*                  number,
*                  number,
*                  number,
*              ]
*          },
*          {
*              itemId: number,
*              partIds: [
*                  number,
*                  number,
*                  number,
*              ]
*          },
*          {
*              itemId: number,
*              partIds: [
*                  number,
*                  number,
*                  number,
*              ]
*          },
*          {
*              itemId: number,
*              partIds: [
*                  number,
*                  number,
*                  number,
*              ]
*          },
*          {
*              itemId: number,
*              partIds: [
*                  number,
*                  number,
*                  number,
*              ]
*          },
*          {
*              itemId: number,
*              partIds: [
*                  number,
*                  number,
*                  number,
*              ]
*          },
*          {
*              itemId: number,
*              partIds: [
*                  number,
*                  number,
*                  number,
*              ]
*          },
*          {
*              itemId: number,
*              partIds: [
*                  number,
*                  number,
*                  number,
*              ]
*          },
*      ]
* }} loadout The loadout object to turn into a loadout code
* @return {String} loadoutCode
*/
export const save = function (loadout) {
    let loadoutCode = loadout.playerName;
    loadoutCode += "-";
    loadoutCode += encode(loadout.heroId)
    loadoutCode += encode(loadout.skinId, true)
    loadoutCode += encode(loadout.dyeId)
    loadoutCode += "-"
    loadout.slots.forEach(slot => {
        loadoutCode += encode(slot.itemId, true);
    });
    loadoutCode += "-"
    loadoutCode += encode(loadout.guardianIds[0])
    loadoutCode += encode(loadout.guardianIds[1])
    loadoutCode += "-"
    loadoutCode += encode(loadout.consumableIds[0])
    loadoutCode += encode(loadout.consumableIds[1])
    loadoutCode += "-"
    loadoutCode += encode(loadout.traits.pentagonTraitId)
    loadoutCode += encode(loadout.traits.diamondTraitId)
    loadoutCode += encode(loadout.traits.triangleTraitId)
    loadoutCode += encode(loadout.traits.noBonusTraitId)
    loadoutCode += "-"
    loadout.slots.forEach(slot => {
        loadoutCode += encode(slot.partIds[0]);
        loadoutCode += encode(slot.partIds[1]);
        loadoutCode += encode(slot.partIds[2]);
    });
    return loadoutCode;
}
