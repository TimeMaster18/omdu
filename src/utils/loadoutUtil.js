import { decode } from './base62Util';

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
