import * as firebase from 'firebase';

const state = {
    itemsUnlocked: [],

    diaryLevel: [
        {
            name: "Ardougne",
            items: [13121, 13122, 13123, 13124],
            level: 0
        },
        {
            name: "Desert",
            items: [13133, 13134, 13135, 13136],
            level: 0
        },
        {
            name: "Falador",
            items: [13117, 13118, 13119, 13120],
            level: 0
        },
        {
            name: "Fremennik",
            items: [13129, 13130, 13131, 13132],
            level: 0
        },
        {
            name: "Kandarin",
            items: [13137, 13138, 13139, 13140],
            level: 0
        },
        {
            name: "Karamja",
            items: [11136, 11138, 11140, 13103],
            level: 0
        },
        {
            name: "Kourend & Kebos",
            items: [22941, 22943, 22945, 22947],
            level: 0
        },
        {
            name: "Lumbridge & Draynor",
            items: [13125, 13126, 13127, 13128],
            level: 0
        },
        {
            name: "Morytania",
            items: [13112, 13113, 13114, 13115],
            level: 0
        },
        {
            name: "Varrock",
            items: [13104, 13105, 13106, 13107],
            level: 0
        },
        {
            name: "Western Provinces",
            items: [13141, 13142, 13143, 13144],
            level: 0
        },
        {
            name: "Wilderness",
            items: [13108, 13109, 13110, 13111],
            level: 0
        },
    ],

    diaryLayout: [
        ["Ardougne", "Desert", "Falador", "Fremennik"],
        ["Kandarin", "Karamja", "Kourend & Kebos", "Lumbridge & Draynor"],
        ["Morytania", "Varrock", "Western Provinces", "Wilderness"]
    ],

    cluesData: [
        {
            name: "beginner",
            items: 2,
            completed: 0
        },
        {
            name: "easy",
            items: 2,
            completed: 0
        },
        {
            name: "medium",
            items: 2,
            completed: 0
        },
        {
            name: "hard",
            items: 2,
            completed: 0
        },
        {
            name: "elite",
            items: 2,
            completed: 0
        },
        {
            name: "master",
            items: 2,
            completed: 0
        },
    ],

    skillcapesID: {
        name: "Skillcapes",
        items: [
            [9772, 9748, 9790, 9802, 9781, 9754],
            [9811, 9805, 9799, 9784, 9775, 9769],
            [9949, 9763, 9793, 9760, 9757, 9766],
            [9787, 9796, 9751, 9778, 9808, 13280]
        ]
    },

    cluescrollTiers: {
        name: "Treasure Trails",
        tierGroups: [
            {
                name: "Beginner",
                tierCategory: [
                    {
                        name: "Sets",
                        items: [
                            [23312, null],
                            [23315, 23303],
                            [23318, 23306],
                        ]
                    },
                    {
                        name: "Other",
                        items: [
                            [23300, 23309, 23297],
                            [23285, 23288, 23291, 23294],
                        ]
                    }
                ]
            },
            {
                name: "Easy",
                tierCategory: [
                    {
                        name: "Bronze sets",
                        items: [
                            [12221, 12211],
                            [12215, 12205],
                            [12217, 12207],
                            [12219, 12209],
                            [12223, 12213],
                        ]
                    },
                    {
                        name: "Iron sets",
                        items: [
                            [12231, 12241],
                            [12225, 12235],
                            [12227, 12237],
                            [12229, 12239],
                            [12233, 12243],
                        ]
                    },
                    {
                        name: "Steel sets",
                        items: [
                            [20193, 20178],
                            [20184, 20169],
                            [20187, 20172],
                            [20190, 20175],
                            [20196, 20181],
                        ]
                    },
                    {
                        name: "black sets",
                        items: [
                            [2587, 2595, 10306, 23366, 7332],
                            [2583, 2591, 10314, 23369, 7338],
                            [2585, 2593, 10308, 23372, 7344],
                            [3472, 3473, 10310, 23375, 7350],
                            [2589, 2597, 10312, 23378, 7356],
                        ]
                    },
                    {
                        name: "Wizard sets",
                        items: [
                            [7394, 7396, 12455, 12453, null],
                            [7390, 7392, 12451, 12449, 20199],
                            [7386, 7388, 12447, 12445, 20202],
                        ]
                    },
                    {
                        name: "Range sets",
                        items: [
                            [23381, 7362, 7364],
                            [23384, 7366, 7368],
                        ]
                    },
                    {
                        name: "Hats / masks",
                        items: [
                            [2635, 12247, 2637, 2633],
                            [12245, 12249, 12251, 2631],
                            [20205, 10392, 10398],
                        ]
                    },
                    {
                        name: "Miscs",
                        items: [
                            [10316, 10320, 10318, 10322, 10324],
                            [20211, 20217, 20214, 23351, null],
                            [20208, 10394, 23354, 23363, 23360],
                            [20166, 10396, 10366, 12375, 23357],
                        ]
                    },
                ]
            },
            {
                name: "Medium",
                tierCategory: [
                    {
                        name: "Mithril sets",
                        items: [
                            [12293, 12283],
                            [12287, 12277],
                            [12289, 12279],
                            [12295, 12285],
                            [12291, 12281],
                        ]
                    },
                    {
                        name: "Adamant sets",
                        items: [
                            [2605, 2613, 10296, 23392, 7334],
                            [2599, 2607, 10298, 23395, 7340],
                            [2601, 2609, 10300, 23398, 7346],
                            [3474, 3475, 10302, 23401, 7352],
                            [2603, 2611, 10304, 23404, 7358],
                        ]
                    },
                    {
                        name: "Other sets",
                        items: [
                            [7372, 7370],
                            [7380, 7378],
                            [20243, null],
                            [12319, 23407],
                            [20240, 23410],

                        ]
                    },
                    {
                        name: "Boaters and Headbands",
                        items: [
                            [12307, 12301, 12299, 12303],
                            [2647, 2645, 2649, 12305],
                            [7319, 7321, 7323, 7325],
                            [7327, 12309, 12311, 12313],
                        ]
                    },
                    {
                        name: "Hats and masks",
                        items: [
                            [20269, 20266],
                            [20246, 12359],
                            [12361, 12428],
                        ]
                    },
                    {
                        name: "Boots",
                        items: [
                            [2577, 2579, 12598],
                            [23413, 23389],
                        ]
                    },
                    {
                        name: "Misc",
                        items: [
                            [20272, 20275],
                            [10364, 12377],
                        ]
                    },
                ]
            },
            {
                name: "Hard",
                tierCategory: [
                    {
                        name: "Rune sets",
                        items: [
                            [2627, 2619, 10286, 23209, 7336],
                            [2623, 2615, 10288, 23212, 7342],
                            [2625, 2617, 10290, 23215, 7348],
                            [3477, 3476, 10292, 23218, 7354],
                            [2629, 2621, 10294, 23221, 7360],
                        ]
                    },
                    {
                        name: "God armour sets", // Saradomin Zamorak Guthix Ancient Armadyl Bandos 
                        items: [
                            [2665, 2657, 2673, 12466, 12476, 12486],
                            [2661, 2653, 2669, 12460, 12470, 12480],
                            [2663, 2655, 2671, 12462, 12472, 12482],
                            [3479, 3478, 3480, 12464, 12474, 12484],
                            [2667, 2659, 2675, 12468, 12478, 12488],
                        ]
                    },
                    {
                        name: "Blessed d'hide", // Saradomin Zamorak Guthix Ancient Armadyl Bandos 
                        items: [
                            [10390, 10374, 10382, 12496, 12512, 12504],
                            [10386, 10370, 10378, 12492, 12508, 12500],
                            [10388, 10372, 10380, 12494, 12510, 12502],
                            [10384, 10368, 10376, 12490, 12506, 12498],
                            [19933, 19936, 19927, 19921, 19930, 19924],
                            [23191, 23194, 23188, 23197, 23200, 23200],
                        ]
                    },
                    {
                        name: "Trimmed d'hide",
                        items: [
                            [7376, 7384,],
                            [7374, 7382,],
                            [12331, 12333,],
                            [12327, 12329,],
                        ]
                    },
                    {
                        name: "Hats and masks",
                        items: [
                            [2639, 2641, 2643, 12323],
                            [12321, 12325, 19915, 2581],
                            [2651, 12516, null, null],
                        ]
                    },
                    {
                        name: "Misc",
                        items: [
                            [10354, 12514],
                            [19918, 12379],
                            [19912, 23206],
                            [23224, null],
                        ]
                    }
                ]
            },
            {
                name: "Elite",
                tierCategory: [
                    {
                        name: "Cosmetic sets",
                        items: [
                            [19970, 19985, 12397, 12351],
                            [19958, 19973, 12393, 12441],
                            [19964, 19979, 12395, 12443],
                            [19961, 19976, 12439, null],
                            [19967, 19982, null, null],
                        ]
                    },
                    {
                        name: "Hats and masks",
                        items: [
                            [19988, 12430],
                            [19991, 12355],
                            [12540, 12432],
                            [12337, 12353],
                            [23255, 23252],
                        ]
                    },
                    {
                        name: "Range sets",
                        items: [
                            [12385, 12387],
                            [12381, 12383],
                            [12596, 23249],
                            [19994, null],
                        ]
                    },
                    {
                        name: "Misc",
                        items: [
                            [12373, 12357],
                            [12335, 19997],
                            [20005, 23246],
                        ]
                    },

                ]
            },
            {
                name: "Master",
                tierCategory: [
                    {
                        name: "Cosmetic sets",
                        items: [
                            [20035, 20080, 20095, 20128],
                            [20038, 20083, 20098, 20131],
                            [20041, 20086, 20101, 20134],
                            [20044, 20089, 20104, 20137],
                            [20047, 20092, 20107, 20140],
                        ]
                    },
                    {
                        name: "Hats and masks",
                        items: [
                            [20020, 20053],
                            [20023, 20059],
                            [20026, 20110],
                            [20029, 20032],
                            [20008],
                        ]
                    },
                    {
                        name: "Misc",
                        items: [
                            [20017, 20050],
                            [20056, 19730],
                        ]
                    },

                ]
            }
        ]
    },

    fromMultipleClues: {
        name: "Not exclusive / sets from multiple tiers",
        itemGroups: [
            {
                name: "Vestment sets", // Saradomin Zamorak Guthix Ancient Armadyl Bandos 
                items: [
                    [10452, 10456, 10454, 12203, 12259, 12271],
                    [10458, 10460, 10462, 12193, 12253, 12265],
                    [10464, 10468, 10466, 12195, 12255, 12267],
                    [10446, 10450, 10448, 12197, 12261, 12273],
                    [10470, 10474, 10472, 12201, 12257, 12269],
                    [10440, 10444, 10442, 12199, 12263, 12275],
                ]
            },
            {
                name: "God pages and blessings",
                items: [
                    [3827, 3831, 3835, 12621, 12617, 12613],
                    [3828, 3832, 3836, 12622, 12618, 12614],
                    [3829, 3833, 3837, 12623, 12619, 12615],
                    [3830, 3834, 3838, 12624, 12620, 12616],
                    [20220, 20223, 20226, 20235, 20229, 20232]
                ]
            },
            {
                name: "Gilded",
                items: [
                    [3486, 20146, 23258, 20161],
                    [3481, 20149, 23264, 20158],
                    [3483, 3485, 23267, 23279],
                    [3488, 20152, 23261, 23276],
                    [12389, 20155, 12391, 23282]
                ]
            },
            {
                name: "3rd age",
                items: [
                    [10350, 10342, 10334, 23345, 12437],
                    [10348, 10338, 10330, 23336, 20011],
                    [10346, 10340, 10332, 23339, 20014],
                    [23242, 10344, 10336, 10352, 23185],
                    [12426, 12422, 12424, 23342, null]
                ]
            },
            {
                name: "Elegant clothing",
                items: [
                    [10400, 10404, 10408, 10412, 10416, 12315, 12347],
                    [10402, 10406, 10410, 10414, 10418, 12317, 12349],
                    [10420, 10424, 10428, 10432, 10436, 12339, 12343],
                    [10422, 10426, 10430, 10434, 10438, 12341, 12345],
                ]
            },
            {
                name: "Ornament kits",
                items: [
                    [12417, 20000, 12458, 23232, 20368, 20366, 15966],
                    [22242, 15951, 12420, 23330, 20370, 22249, 23240],
                    [15952, 22244, 19722, 23332, 20372, 23444, 19720],
                    [22234, 15955, 23230, 23334, 20374, null, null],
                ]
            },
            {
                name: "Dragon masks",
                items: [
                    [12363, 12365, 12367],
                    [12369, 12371, 12518],
                    [12520, 12522, 12524],
                ]
            },
            {
                name: "Kourend Items",
                items: [
                    [20254, 20251, 20257, 20260, 20263],
                    [20116, 20113, 20119, 20122, 20125],
                    [19946, 19943, 19949, 19952, 19955],
                ]
            },
        ]
    },

    listOfPvmActivities: {
        name: "Bosses",
        monsterCategorys: [
            {
                name: "Multiple Bosses",
                monsters: [
                    {
                        name: "Daganoth Kings",
                        items: [
                            [6737, 6735],
                            [6733, 6731],
                            [6739, 6562],
                            [6724, 12643],
                            [12644, 12645],
                        ]
                    },
                    {
                        name: "God Wars",
                        items: [
                            [11826, 11832, 11838, 11824, 11818],
                            [11828, 11834, 13256, 11791, 11820],
                            [11830, 11836, 11785, 11787, 11822],
                            [11810, 11812, 11814, 11816, null],
                            [12649, 12650, 12651, 12652, null]
                        ]
                    },
                    {
                        name: "Barrows",
                        items: [
                            [4708, 4716, 4724, 4732, 4745, 4753],
                            [4712, 4720, 4728, 4736, 4749, 4757],
                            [4714, 4722, 4730, 4738, 4751, 4759],
                            [4710, 4718, 4726, 4734, 4747, 4755]
                        ]
                    },
                ]
            },
            {
                name: "Slayer Bosses",
                monsters: [
                    {
                        name: "Cerberus",
                        items: [
                            [13231, 13229, 13227],
                            [13233, 13247],
                        ]
                    },
                    {
                        name: "AbyssalSire",
                        items: [
                            [13263, 13274, 13275, 13276],
                            [4151, 13265, 13273, 13262],
                        ]
                    },
                    {
                        name: "Alchemical Hydra",
                        items: [
                            [22966, 22983, 22988, 22975],
                            [22969, 22971, 22973, 22746],
                        ]
                    },
                    {
                        name: "Thermonuclear smoke devil",
                        items: [
                            [11998, 12002, 12648],
                        ]
                    },
                    {
                        name: "Grotesque Guardians",
                        items: [
                            [21730, 21742, 21739, 21736, 21748],
                        ]
                    },
                    {
                        name: "Kraken",
                        items: [
                            [12004, 11905, 12655],
                        ]
                    },
                ]
            },
            {
                name: "Wilderness bosses",
                monsters: [
                    {
                        name: "All bosses",
                        items: [
                            [12603, 12605, 12601, 11920],
                            [11928, 11929, 11930],
                            [11931, 11932, 11933],
                        ]
                    }
                ]
            },
            {
                name: "Other Bosses",
                monsters: [
                    {
                        name: "Low level",
                        items: [
                            [23528, 20756],
                            [22372, 22994],
                        ]
                    },
                    {
                        name: "Corporeal Beast",
                        items: [
                            [12827, 12819, 12823],
                            [12829, 12833, 12816],
                        ]
                    },
                    {
                        name: "Zulrah",
                        items: [
                            [12922, 12932, 12927],
                            [13200, 13201, 12921],
                        ]
                    },
                    {
                        name: "Vorkath",
                        items: [
                            [11286, 22006],
                            [22111, 21992],
                        ]
                    },
                    {
                        name: "The Gauntlet",
                        items: [
                            [4207, 23956, 23997],
                            [23757, 23859]
                        ]
                    }
                ]
            },
            {
                name: "Skilling bosses",
                monsters: [
                    {
                        name: "Wintertodt",
                        items: [
                            [20708, 20704, 20706, 20710],
                            [20720, 20712, 20716, 20718],
                            [6739, 20693]
                        ]
                    },
                    {
                        name: "Zalcano",
                        items: [
                            [23953, 23908],
                            [23760]
                        ]
                    }
                ]
            },
            {
                name: "Raids",
                monsters: [
                    {
                        name: "CoX",
                        items: [
                            [21079, 21034, 21000, 21012],
                            [21015, 21018, 21021, 21024],
                            [13652, 21003, 21043, 20997],
                        ]
                    },
                    {
                        name: "ToB",
                        items: [
                            [22477, 22326, 22327, 22328],
                            [22324, 22481, 22486],
                        ]
                    },
                ]
            },
        ]
    },

    ingameCollectionlogData: {
        name: "Collectionlog",
        tabs: [
            {
                name: "Bosses",
                subCategories: [
                    {
                        name: "Abyssal Sire",
                        items: [
                            {
                                id: 13262,
                                itemName: "Abyssal orphan"
                            },
                            {
                                id: 13273,
                                itemName: "Unsired"
                            },
                            {
                                id: 7979,
                                itemName: "Abyssal head"
                            },
                            {
                                id: 13274,
                                itemName: "Bludgeon spine"
                            },
                            {
                                id: 13275,
                                itemName: "Bludgeon claw"
                            },
                            {
                                id: 13276,
                                itemName: "Bludgeon axon"
                            },
                            {
                                id: 13277,
                                itemName: "Jar of miasma"
                            },
                            {
                                id: 13265,
                                itemName: "Abyssal dagger"
                            },
                            {
                                id: 4151,
                                itemName: "Abyssal whip"
                            }
                        ]
                    },
                    {
                        name: "Alchemical Hydra",
                        items: [
                            {
                                id: 22746,
                                itemName: "Ikkle hydra"
                            },
                            {
                                id: 22966,
                                itemName: "Hydra's claw"
                            },
                            {
                                id: 22988,
                                itemName: "Hydra tail"
                            },
                            {
                                id: 22983,
                                itemName: "Hydra leather"
                            },
                            {
                                id: 22971,
                                itemName: "Hydra's fang"
                            },
                            {
                                id: 22973,
                                itemName: "Hydra's eye"
                            },
                            {
                                id: 22969,
                                itemName: "Hydra's heart"
                            },
                            {
                                id: 23064,
                                itemName: "Jar of chemicals"
                            },
                            {
                                id: 23077,
                                itemName: "Alchemical hydra heads"
                            }
                        ]
                    },
                    {
                        name: "Barrows Chests",
                        items: [
                            {
                                id: 4732,
                                itemName: "Karil's coif"
                            },
                            {
                                id: 4708,
                                itemName: "Ahrim's hood"
                            },
                            {
                                id: 4716,
                                itemName: "Dharok's helm"
                            },
                            {
                                id: 4724,
                                itemName: "Guthan's helm"
                            },
                            {
                                id: 4745,
                                itemName: "Torag's helm"
                            },
                            {
                                id: 4753,
                                itemName: "Verac's helm"
                            },
                            {
                                id: 4736,
                                itemName: "Karil's leathertop"
                            },
                            {
                                id: 4712,
                                itemName: "Ahrim's robetop"
                            },
                            {
                                id: 4720,
                                itemName: "Dharok's platebody"
                            },
                            {
                                id: 4728,
                                itemName: "Guthan's platebody"
                            },
                            {
                                id: 4749,
                                itemName: "Torag's platebody"
                            },
                            {
                                id: 4757,
                                itemName: "Verac's brassard"
                            },
                            {
                                id: 4738,
                                itemName: "Karil's leatherskirt"
                            },
                            {
                                id: 4714,
                                itemName: "Ahrim's robeskirt"
                            },
                            {
                                id: 4722,
                                itemName: "Dharok's platelegs"
                            },
                            {
                                id: 4730,
                                itemName: "Guthan's chainskirt"
                            },
                            {
                                id: 4751,
                                itemName: "Torag's platelegs"
                            },
                            {
                                id: 4759,
                                itemName: "Verac's plateskirt"
                            },
                            {
                                id: 4734,
                                itemName: "Karil's crossbow"
                            },
                            {
                                id: 4710,
                                itemName: "Ahrim's staff"
                            },
                            {
                                id: 4718,
                                itemName: "Dharok's greataxe"
                            },
                            {
                                id: 4726,
                                itemName: "Guthan's warspear"
                            },
                            {
                                id: 4747,
                                itemName: "Torag's hammers"
                            },
                            {
                                id: 4755,
                                itemName: "Verac's flail"
                            },

                        ]
                    },
                    {
                        name: "Bryophyta",
                        items: [
                            {
                                id: 22372,
                                itemName: "Bryophyta's essence"
                            }
                        ]
                    },
                    {
                        name: "Callisto",
                        items: [
                            {
                                id: 13178,
                                itemName: "Callisto cub"
                            },
                            {
                                id: 12603,
                                itemName: "Tyrannical ring"
                            },
                            {
                                id: 11920,
                                itemName: "Dragon pickaxe"
                            },
                            {
                                id: 7158,
                                itemName: "Dragon 2h sword"
                            }
                        ]
                    },
                    {
                        name: "Cerberus",
                        items: [
                            {
                                id: 13247,
                                itemName: "Hellpuppy"
                            },
                            {
                                id: 13227,
                                itemName: "Eternal crystal"
                            },
                            {
                                id: 13229,
                                itemName: "Pegasian crystal"
                            },
                            {
                                id: 13231,
                                itemName: "Primordial crystal"
                            },
                            {
                                id: 13245,
                                itemName: "Jar of souls"
                            },
                            {
                                id: 13233,
                                itemName: "Smouldering stone"
                            },

                        ]
                    },
                    {
                        name: "Chaos Elemental",
                        items: [
                            {
                                id: 11995,
                                itemName: "Pet chaos elemental"
                            },
                            {
                                id: 11920,
                                itemName: "Dragon pickaxe"
                            },
                            {
                                id: 7158,
                                itemName: "Dragon 2h sword"
                            }
                        ]
                    },
                    {
                        name: "Chaos Fanatic",
                        items: [
                            {
                                id: 11995,
                                itemName: "Pet chaos elemental"
                            },
                            {
                                id: 11928,
                                itemName: "Odium shard 1"
                            },
                            {
                                id: 11931,
                                itemName: "Malediction shard 1"
                            }
                        ]
                    },
                    {
                        name: "Commander Zilyana",
                        items: [
                            {
                                id: 12651,
                                itemName: "Pet zilyana"
                            },
                            {
                                id: 11785,
                                itemName: "Armadyl crossbow"
                            },
                            {
                                id: 11814,
                                itemName: "Saradomin hilt"
                            },
                            {
                                id: 11838,
                                itemName: "Saradomin sword"
                            },
                            {
                                id: 13256,
                                itemName: "Saradomin's light"
                            },
                            {
                                id: 11818,
                                itemName: "Godsword shard 1"
                            },
                            {
                                id: 11820,
                                itemName: "Godsword shard 2"
                            },
                            {
                                id: 11822,
                                itemName: "Godsword shard 3"
                            }
                        ]
                    },
                    {
                        name: "Corporeal Beast",
                        items: [
                            {
                                id: 12816,
                                itemName: "Pet dark core"
                            },
                            {
                                id: 12819,
                                itemName: "Elysian sigil"
                            },
                            {
                                id: 12823,
                                itemName: "Spectral sigil"
                            },
                            {
                                id: 12827,
                                itemName: "Arcane sigil"
                            },
                            {
                                id: 12833,
                                itemName: "Holy elixir"
                            },
                            {
                                id: 12829,
                                itemName: "Spirit shield"
                            }
                        ]
                    },
                    {
                        name: "Crazy archaeologist",
                        items: [
                            {
                                id: 11929,
                                itemName: "Odium shard 2"
                            },
                            {
                                id: 11932,
                                itemName: "Malediction shard 2"
                            },

                        ]
                    },
                    {
                        name: "Dagannoth Kings",
                        items: [
                            {
                                id: 12644,
                                itemName: "Pet dagannoth prime"
                            },
                            {
                                id: 12643,
                                itemName: "Pet dagannoth supreme"
                            },
                            {
                                id: 12645,
                                itemName: "Pet dagannoth rex"
                            },
                            {
                                id: 6737,
                                itemName: "Berserker ring"
                            },
                            {
                                id: 6733,
                                itemName: "Archers ring"
                            },
                            {
                                id: 6731,
                                itemName: "Seers ring"
                            },
                            {
                                id: 6735,
                                itemName: "Warrior ring"
                            },
                            {
                                id: 6739,
                                itemName: "Dragon axe"
                            },
                            {
                                id: 6724,
                                itemName: "Seercull"
                            },
                            {
                                id: 6562,
                                itemName: "Mud battlestaff"
                            }
                        ]
                    },
                    {
                        name: "The Fight Caves",
                        items: [
                            {
                                id: 13225,
                                itemName: "Tzrek-jad"
                            },
                            {
                                id: 6570,
                                itemName: "Fire cape"
                            }
                        ]
                    },
                    {
                        name: "The Gauntlet",
                        items: [
                            {
                                id: 23757,
                                itemName: "Youngllef"
                            },
                            {
                                id: 23956,
                                itemName: "Crystal armour seed"
                            },
                            {
                                id: 4207,
                                itemName: "Crystal weapon seed"
                            },
                            {
                                id: 23997,
                                itemName: "Blade of saeldor (inactive)"
                            },
                            {
                                id: 23859,
                                itemName: "Gauntlet cape"
                            }
                        ]
                    },
                    {
                        name: "General Graardor",
                        items: [
                            {
                                id: 12650,
                                itemName: "Pet general graardor"
                            },
                            {
                                id: 11832,
                                itemName: "Bandos chestplate"
                            },
                            {
                                id: 11834,
                                itemName: "Bandos tassets"
                            },
                            {
                                id: 11836,
                                itemName: "Bandos boots"
                            },
                            {
                                id: 11812,
                                itemName: "Bandos hilt"
                            },
                            {
                                id: 11818,
                                itemName: "Godsword shard 1"
                            },
                            {
                                id: 11820,
                                itemName: "Godsword shard 2"
                            },
                            {
                                id: 11822,
                                itemName: "Godsword shard 3"
                            }
                        ]
                    },
                    {
                        name: "Giant Mole",
                        items: [
                            {
                                id: 12646,
                                itemName: "Baby mole"
                            },

                        ]
                    },
                    {
                        name: "Grotesque Guardians",
                        items: [
                            {
                                id: 21748,
                                itemName: "Noon"
                            },
                            {
                                id: 21730,
                                itemName: "Black tourmaline core"
                            },
                            {
                                id: 21736,
                                itemName: "Granite gloves"
                            },
                            {
                                id: 21739,
                                itemName: "Granite ring"
                            },
                            {
                                id: 21742,
                                itemName: "Granite hammer"
                            },
                            {
                                id: 21745,
                                itemName: "Jar of stone"
                            },

                        ]
                    },
                    {
                        name: "Hespori",
                        items: [
                            {
                                id: 22994,
                                itemName: "Bottomless compost bucket"
                            },

                        ]
                    },
                    {
                        name: "The Inferno",
                        items: [
                            {
                                id: 21291,
                                itemName: "Jal-nib-rek"
                            },
                            {
                                id: 21295,
                                itemName: "Infernal cape"
                            }
                        ]
                    },
                    {
                        name: "Kalphite Queen",
                        items: [
                            {
                                id: 12647,
                                itemName: "Kalphite princess"
                            },
                            {
                                id: 7981,
                                itemName: "Kq head"
                            },
                            {
                                id: 12885,
                                itemName: "Jar of sand"
                            },
                            {
                                id: 7158,
                                itemName: "Dragon 2h sword"
                            },
                            {
                                id: 2513,
                                itemName: "Dragon chainbody"
                            }
                        ]
                    },
                    {
                        name: "King Black Dragon",
                        items: [
                            {
                                id: 12653,
                                itemName: "Prince black dragon"
                            },
                            {
                                id: 7980,
                                itemName: "Kbd heads"
                            },
                            {
                                id: 11920,
                                itemName: "Dragon pickaxe"
                            },
                            {
                                id: 11286,
                                itemName: "Draconic visage"
                            }
                        ]
                    },
                    {
                        name: "Kraken",
                        items: [
                            {
                                id: 12655,
                                itemName: "Pet kraken"
                            },
                            {
                                id: 12004,
                                itemName: "Kraken tentacle"
                            },
                            {
                                id: 11907,
                                itemName: "Trident of the seas"
                            },
                            {
                                id: 12007,
                                itemName: "Jar of dirt"
                            }
                        ]
                    },
                    {
                        name: "Kree'arra",
                        items: [
                            {
                                id: 12649,
                                itemName: "Pet kree'arra"
                            },
                            {
                                id: 11826,
                                itemName: "Armadyl helmet"
                            },
                            {
                                id: 11828,
                                itemName: "Armadyl chestplate"
                            },
                            {
                                id: 11830,
                                itemName: "Armadyl chainskirt"
                            },
                            {
                                id: 11810,
                                itemName: "Armadyl hilt"
                            },
                            {
                                id: 11818,
                                itemName: "Godsword shard 1"
                            },
                            {
                                id: 11820,
                                itemName: "Godsword shard 2"
                            },
                            {
                                id: 11822,
                                itemName: "Godsword shard 3"
                            }
                        ]
                    },
                    {
                        name: "K'ril Tsutsaroth",
                        items: [
                            {
                                id: 12652,
                                itemName: "Pet k'ril tsutsaroth"
                            },
                            {
                                id: 11791,
                                itemName: "Staff of the dead"
                            },
                            {
                                id: 11824,
                                itemName: "Zamorakian spear"
                            },
                            {
                                id: 11787,
                                itemName: "Steam battlestaff"
                            },
                            {
                                id: 11816,
                                itemName: "Zamorak hilt"
                            },
                            {
                                id: 11818,
                                itemName: "Godsword shard 1"
                            },
                            {
                                id: 11820,
                                itemName: "Godsword shard 2"
                            },
                            {
                                id: 11822,
                                itemName: "Godsword shard 3"
                            }
                        ]
                    },
                    {
                        name: "Obor",
                        items: [
                            {
                                id: 20756,
                                itemName: "Hill giant club"
                            }
                        ]
                    },
                    {
                        name: "Sarachnis",
                        items: [
                            {
                                id: 23495,
                                itemName: "Sraracha"
                            },
                            {
                                id: 23525,
                                itemName: "Jar of eyes"
                            },
                            {
                                id: 23528,
                                itemName: "Sarachnis cudgel"
                            }
                        ]
                    },
                    {
                        name: "Scorpia",
                        items: [
                            {
                                id: 13181,
                                itemName: "Scorpia's offspring"
                            },
                            {
                                id: 11930,
                                itemName: "Odium shard 3"
                            },
                            {
                                id: 11933,
                                itemName: "Malediction shard 3"
                            }
                        ]
                    },
                    {
                        name: "Skotizo",
                        items: [
                            {
                                id: 21273,
                                itemName: "Skotos"
                            },
                            {
                                id: 19701,
                                itemName: "Jar of darkness"
                            },
                            {
                                id: 21275,
                                itemName: "Dark claw"
                            },
                            {
                                id: 6571,
                                itemName: "Uncut onyx"
                            },

                        ]
                    },
                    {
                        name: "Thermonuclear smoke devil",
                        items: [
                            {
                                id: 12648,
                                itemName: "Pet smoke devil"
                            },
                            {
                                id: 12002,
                                itemName: "Occult necklace"
                            },
                            {
                                id: 11998,
                                itemName: "Smoke battlestaff"
                            },
                            {
                                id: 2513,
                                itemName: "Dragon chainbody"
                            }
                        ]
                    },
                    {
                        name: "Venenatis",
                        items: [
                            {
                                id: 13177,
                                itemName: "Venenatis spiderling"
                            },
                            {
                                id: 12605,
                                itemName: "Treasonous ring"
                            },
                            {
                                id: 11920,
                                itemName: "Dragon pickaxe"
                            },
                            {
                                id: 7158,
                                itemName: "Dragon 2h sword"
                            }
                        ]
                    },
                    {
                        name: "Vet'ion",
                        items: [
                            {
                                id: 13179,
                                itemName: "Vet'ion jr."
                            },
                            {
                                id: 12601,
                                itemName: "Ring of the gods"
                            },
                            {
                                id: 11920,
                                itemName: "Dragon pickaxe"
                            },
                            {
                                id: 7158,
                                itemName: "Dragon 2h sword"
                            }
                        ]
                    },
                    {
                        name: "Vorkath",
                        items: [
                            {
                                id: 21992,
                                itemName: "Vorki"
                            },
                            {
                                id: 2425,
                                itemName: "Vorkath's head"
                            },
                            {
                                id: 11286,
                                itemName: "Draconic visage"
                            },
                            {
                                id: 22006,
                                itemName: "Skeletal visage"
                            },
                            {
                                id: 22106,
                                itemName: "Jar of decay"
                            },
                            {
                                id: 22111,
                                itemName: "Dragonbone necklace"
                            }
                        ]
                    },
                    {
                        name: "Wintertodt",
                        items: [
                            {
                                id: 20693,
                                itemName: "Phoenix"
                            },
                            {
                                id: 20716,
                                itemName: "Tome of fire (empty)"
                            },
                            {
                                id: 20704,
                                itemName: "Pyromancer garb"
                            },
                            {
                                id: 20708,
                                itemName: "Pyromancer hood"
                            },
                            {
                                id: 20706,
                                itemName: "Pyromancer robe"
                            },
                            {
                                id: 20710,
                                itemName: "Pyromancer boots"
                            },
                            {
                                id: 20712,
                                itemName: "Warm gloves"
                            },
                            {
                                id: 20720,
                                itemName: "Bruma torch"
                            },
                            {
                                id: 6739,
                                itemName: "Dragon axe"
                            }
                        ]
                    },
                    {
                        name: "Zalcano",
                        items: [
                            {
                                id: 23760,
                                itemName: "Smolcano"
                            },
                            {
                                id: 23953,
                                itemName: "Crystal tool seed"
                            },
                            {
                                id: 23908,
                                itemName: "Zalcano shard"
                            },
                            {
                                id: 6571,
                                itemName: "Uncut onyx"
                            }
                        ]
                    },
                    {
                        name: "Zulrah",
                        items: [
                            {
                                id: 12921,
                                itemName: "Pet snakeling"
                            },
                            {
                                id: 13200,
                                itemName: "Tanzanite mutagen"
                            },
                            {
                                id: 13201,
                                itemName: "Magma mutagen"
                            },
                            {
                                id: 12936,
                                itemName: "Jar of swamp"
                            },
                            {
                                id: 12932,
                                itemName: "Magic fang"
                            },
                            {
                                id: 12927,
                                itemName: "Serpentine visage"
                            },
                            {
                                id: 12922,
                                itemName: "Tanzanite fang"
                            },
                            {
                                id: 6571,
                                itemName: "Uncut onyx"
                            },

                        ]
                    }
                ]
            },
            {
                name: "Raids",
                subCategories: [
                    {
                        name: "Chambers of Xeric",
                        items: [
                            {
                                id: 20851,
                                itemName: "Olmlet"
                            },
                            {
                                id: 22386,
                                itemName: "Metamorphic dust"
                            },
                            {
                                id: 20997,
                                itemName: "Twisted bow"
                            },
                            {
                                id: 21003,
                                itemName: "Elder maul"
                            },
                            {
                                id: 21043,
                                itemName: "Kodai insignia"
                            },
                            {
                                id: 13652,
                                itemName: "Dragon claws"
                            },
                            {
                                id: 21018,
                                itemName: "Ancestral hat"
                            },
                            {
                                id: 21021,
                                itemName: "Ancestral robe top"
                            },
                            {
                                id: 21024,
                                itemName: "Ancestral robe bottom"
                            },
                            {
                                id: 21015,
                                itemName: "Dinh's bulwark"
                            },
                            {
                                id: 21034,
                                itemName: "Dexterous prayer scroll"
                            },
                            {
                                id: 21079,
                                itemName: "Arcane prayer scroll"
                            },
                            {
                                id: 21012,
                                itemName: "Dragon hunter crossbow"
                            },
                            {
                                id: 21000,
                                itemName: "Twisted buckler"
                            },
                            {
                                id: 21047,
                                itemName: "Torn prayer scroll"
                            },
                            {
                                id: 6573,
                                itemName: "Onyx"
                            },

                        ]
                    },
                    {
                        name: "Theatre of Blood",
                        items: [
                            {
                                id: 22473,
                                itemName: "Lil' zik"
                            },
                            {
                                id: 22486,
                                itemName: "Scythe of vitur (uncharged)"
                            },
                            {
                                id: 22324,
                                itemName: "Ghrazi rapier"
                            },
                            {
                                id: 22481,
                                itemName: "Sanguinesti staff (uncharged)"
                            },
                            {
                                id: 22326,
                                itemName: "Justiciar faceguard"
                            },
                            {
                                id: 22327,
                                itemName: "Justiciar chestguard"
                            },
                            {
                                id: 22328,
                                itemName: "Justiciar legguards"
                            },
                            {
                                id: 22477,
                                itemName: "Avernic defender hilt"
                            },

                        ]
                    }
                ]
            },
            {
                name: "Treasure Trails",
                subCategories: [
                    {
                        name: "Beginner Treasure Trails",
                        items: [
                            {
                                id: 23285,
                                itemName: "Mole slippers"
                            },
                            {
                                id: 23288,
                                itemName: "Frog slippers"
                            },
                            {
                                id: 23291,
                                itemName: "Bear feet"
                            },
                            {
                                id: 23294,
                                itemName: "Demon feet"
                            },
                            {
                                id: 23297,
                                itemName: "Jester cape"
                            },
                            {
                                id: 23300,
                                itemName: "Shoulder parrot"
                            },
                            {
                                id: 23303,
                                itemName: "Monk's robe top (t)"
                            },
                            {
                                id: 23306,
                                itemName: "Monk's robe (t)"
                            },
                            {
                                id: 23309,
                                itemName: "Amulet of defence (t)"
                            },
                            {
                                id: 23312,
                                itemName: "Sandwich lady hat"
                            },
                            {
                                id: 23315,
                                itemName: "Sandwich lady top"
                            },
                            {
                                id: 23318,
                                itemName: "Sandwich lady bottom"
                            },
                            {
                                id: 23321,
                                itemName: "Rune scimitar ornament kit (guthix)"
                            },
                            {
                                id: 23324,
                                itemName: "Rune scimitar ornament kit (saradomin)"
                            },
                            {
                                id: 23327,
                                itemName: "Rune scimitar ornament kit (zamorak)"
                            },

                        ]
                    },
                    {
                        name: "Easy Treasure Trails",
                        items: [
                            {
                                id: 20211,
                                itemName: "Team cape zero"
                            },
                            {
                                id: 20217,
                                itemName: "Team cape i"
                            },
                            {
                                id: 20214,
                                itemName: "Team cape x"
                            },
                            {
                                id: 23351,
                                itemName: "Cape of skulls"
                            },
                            {
                                id: 20205,
                                itemName: "Golden chef's hat"
                            },
                            {
                                id: 20208,
                                itemName: "Golden apron"
                            },
                            {
                                id: 20166,
                                itemName: "Wooden shield (g)"
                            },
                            {
                                id: 2587,
                                itemName: "Black full helm (t)"
                            },
                            {
                                id: 2583,
                                itemName: "Black platebody (t)"
                            },
                            {
                                id: 2585,
                                itemName: "Black platelegs (t)"
                            },
                            {
                                id: 3472,
                                itemName: "Black plateskirt (t)"
                            },
                            {
                                id: 2589,
                                itemName: "Black kiteshield (t)"
                            },
                            {
                                id: 2595,
                                itemName: "Black full helm (g)"
                            },
                            {
                                id: 2591,
                                itemName: "Black platebody (g)"
                            },
                            {
                                id: 2593,
                                itemName: "Black platelegs (g)"
                            },
                            {
                                id: 3473,
                                itemName: "Black plateskirt (g)"
                            },
                            {
                                id: 2597,
                                itemName: "Black kiteshield (g)"
                            },
                            {
                                id: 7332,
                                itemName: "Black shield (h1)"
                            },
                            {
                                id: 7338,
                                itemName: "Black shield (h2)"
                            },
                            {
                                id: 7344,
                                itemName: "Black shield (h3)"
                            },
                            {
                                id: 7350,
                                itemName: "Black shield (h4)"
                            },
                            {
                                id: 7356,
                                itemName: "Black shield (h5)"
                            },
                            {
                                id: 10306,
                                itemName: "Black helm (h1)"
                            },
                            {
                                id: 10308,
                                itemName: "Black helm (h2)"
                            },
                            {
                                id: 10310,
                                itemName: "Black helm (h3)"
                            },
                            {
                                id: 10312,
                                itemName: "Black helm (h4)"
                            },
                            {
                                id: 10314,
                                itemName: "Black helm (h5)"
                            },
                            {
                                id: 23366,
                                itemName: "Black platebody (h1)"
                            },
                            {
                                id: 23369,
                                itemName: "Black platebody (h2)"
                            },
                            {
                                id: 23372,
                                itemName: "Black platebody (h3)"
                            },
                            {
                                id: 23375,
                                itemName: "Black platebody (h4)"
                            },
                            {
                                id: 23378,
                                itemName: "Black platebody (h5)"
                            },
                            {
                                id: 20193,
                                itemName: "Steel full helm (t)"
                            },
                            {
                                id: 20184,
                                itemName: "Steel platebody (t)"
                            },
                            {
                                id: 20187,
                                itemName: "Steel platelegs (t)"
                            },
                            {
                                id: 20190,
                                itemName: "Steel plateskirt (t)"
                            },
                            {
                                id: 20196,
                                itemName: "Steel kiteshield (t)"
                            },
                            {
                                id: 20178,
                                itemName: "Steel full helm (g)"
                            },
                            {
                                id: 20169,
                                itemName: "Steel platebody (g)"
                            },
                            {
                                id: 20172,
                                itemName: "Steel platelegs (g)"
                            },
                            {
                                id: 20175,
                                itemName: "Steel plateskirt (g)"
                            },
                            {
                                id: 20181,
                                itemName: "Steel kiteshield (g)"
                            },
                            {
                                id: 12225,
                                itemName: "Iron platebody (t)"
                            },
                            {
                                id: 12227,
                                itemName: "Iron platelegs (t)"
                            },
                            {
                                id: 12229,
                                itemName: "Iron plateskirt (t)"
                            },
                            {
                                id: 12233,
                                itemName: "Iron kiteshield (t)"
                            },
                            {
                                id: 12231,
                                itemName: "Iron full helm (t)"
                            },
                            {
                                id: 12235,
                                itemName: "Iron platebody (g)"
                            },
                            {
                                id: 12237,
                                itemName: "Iron platelegs (g)"
                            },
                            {
                                id: 12239,
                                itemName: "Iron plateskirt (g)"
                            },
                            {
                                id: 12243,
                                itemName: "Iron kiteshield (g)"
                            },
                            {
                                id: 12241,
                                itemName: "Iron full helm (g)"
                            },
                            {
                                id: 12215,
                                itemName: "Bronze platebody (t)"
                            },
                            {
                                id: 12217,
                                itemName: "Bronze platelegs (t)"
                            },
                            {
                                id: 12219,
                                itemName: "Bronze plateskirt (t)"
                            },
                            {
                                id: 12223,
                                itemName: "Bronze kiteshield (t)"
                            },
                            {
                                id: 12221,
                                itemName: "Bronze full helm (t)"
                            },
                            {
                                id: 12205,
                                itemName: "Bronze platebody (g)"
                            },
                            {
                                id: 12207,
                                itemName: "Bronze platelegs (g)"
                            },
                            {
                                id: 12209,
                                itemName: "Bronze plateskirt (g)"
                            },
                            {
                                id: 12213,
                                itemName: "Bronze kiteshield (g)"
                            },
                            {
                                id: 12211,
                                itemName: "Bronze full helm (g)"
                            },
                            {
                                id: 7362,
                                itemName: "Studded body (g)"
                            },
                            {
                                id: 7366,
                                itemName: "Studded chaps (g)"
                            },
                            {
                                id: 7364,
                                itemName: "Studded body (t)"
                            },
                            {
                                id: 7368,
                                itemName: "Studded chaps (t)"
                            },
                            {
                                id: 23381,
                                itemName: "Leather body (g)"
                            },
                            {
                                id: 23384,
                                itemName: "Leather chaps (g)"
                            },
                            {
                                id: 7394,
                                itemName: "Blue wizard hat (g)"
                            },
                            {
                                id: 7390,
                                itemName: "Blue wizard robe (g)"
                            },
                            {
                                id: 7386,
                                itemName: "Blue skirt (g)"
                            },
                            {
                                id: 7396,
                                itemName: "Blue wizard hat (t)"
                            },
                            {
                                id: 7392,
                                itemName: "Blue wizard robe (t)"
                            },
                            {
                                id: 7388,
                                itemName: "Blue skirt (t)"
                            },
                            {
                                id: 12453,
                                itemName: "Black wizard hat (g)"
                            },
                            {
                                id: 12449,
                                itemName: "Black wizard robe (g)"
                            },
                            {
                                id: 12445,
                                itemName: "Black skirt (g)"
                            },
                            {
                                id: 12455,
                                itemName: "Black wizard hat (t)"
                            },
                            {
                                id: 12451,
                                itemName: "Black wizard robe (t)"
                            },
                            {
                                id: 12447,
                                itemName: "Black skirt (t)"
                            },
                            {
                                id: 20199,
                                itemName: "Monk's robe top (g)"
                            },
                            {
                                id: 20202,
                                itemName: "Monk's robe (g)"
                            },
                            {
                                id: 10458,
                                itemName: "Saradomin robe top"
                            },
                            {
                                id: 10464,
                                itemName: "Saradomin robe legs"
                            },
                            {
                                id: 10462,
                                itemName: "Guthix robe top"
                            },
                            {
                                id: 10466,
                                itemName: "Guthix robe legs"
                            },
                            {
                                id: 10460,
                                itemName: "Zamorak robe top"
                            },
                            {
                                id: 10468,
                                itemName: "Zamorak robe legs"
                            },
                            {
                                id: 12193,
                                itemName: "Ancient robe top"
                            },
                            {
                                id: 12195,
                                itemName: "Ancient robe legs"
                            },
                            {
                                id: 12253,
                                itemName: "Armadyl robe top"
                            },
                            {
                                id: 12255,
                                itemName: "Armadyl robe legs"
                            },
                            {
                                id: 12265,
                                itemName: "Bandos robe top"
                            },
                            {
                                id: 12267,
                                itemName: "Bandos robe legs"
                            },
                            {
                                id: 10316,
                                itemName: "Bob's red shirt"
                            },
                            {
                                id: 10320,
                                itemName: "Bob's green shirt"
                            },
                            {
                                id: 10318,
                                itemName: "Bob's blue shirt"
                            },
                            {
                                id: 10322,
                                itemName: "Bob's black shirt"
                            },
                            {
                                id: 10324,
                                itemName: "Bob's purple shirt"
                            },
                            {
                                id: 2631,
                                itemName: "Highwayman mask"
                            },
                            {
                                id: 2633,
                                itemName: "Blue beret"
                            },
                            {
                                id: 2635,
                                itemName: "Black beret"
                            },
                            {
                                id: 2637,
                                itemName: "White beret"
                            },
                            {
                                id: 12247,
                                itemName: "Red beret"
                            },
                            {
                                id: 10392,
                                itemName: "A powdered wig"
                            },
                            {
                                id: 12245,
                                itemName: "Beanie"
                            },
                            {
                                id: 12249,
                                itemName: "Imp mask"
                            },
                            {
                                id: 12251,
                                itemName: "Goblin mask"
                            },
                            {
                                id: 10398,
                                itemName: "Sleeping cap"
                            },
                            {
                                id: 10394,
                                itemName: "Flared trousers"
                            },
                            {
                                id: 10396,
                                itemName: "Pantaloons"
                            },
                            {
                                id: 12375,
                                itemName: "Black cane"
                            },
                            {
                                id: 23363,
                                itemName: "Staff of bob the cat"
                            },
                            {
                                id: 10404,
                                itemName: "Red elegant shirt"
                            },
                            {
                                id: 10424,
                                itemName: "Red elegant blouse"
                            },
                            {
                                id: 10406,
                                itemName: "Red elegant legs"
                            },
                            {
                                id: 10426,
                                itemName: "Red elegant skirt"
                            },
                            {
                                id: 10412,
                                itemName: "Green elegant shirt"
                            },
                            {
                                id: 10432,
                                itemName: "Green elegant blouse"
                            },
                            {
                                id: 10414,
                                itemName: "Green elegant legs"
                            },
                            {
                                id: 10434,
                                itemName: "Green elegant skirt"
                            },
                            {
                                id: 10408,
                                itemName: "Blue elegant shirt"
                            },
                            {
                                id: 10428,
                                itemName: "Blue elegant blouse"
                            },
                            {
                                id: 10410,
                                itemName: "Blue elegant legs"
                            },
                            {
                                id: 10430,
                                itemName: "Blue elegant skirt"
                            },
                            {
                                id: 10366,
                                itemName: "Amulet of magic (t)"
                            },
                            {
                                id: 23354,
                                itemName: "Amulet of power (t)"
                            },
                            {
                                id: 12297,
                                itemName: "Black pickaxe"
                            },
                            {
                                id: 23360,
                                itemName: "Ham joint"
                            },
                            {
                                id: 23357,
                                itemName: "Rain bow"
                            },
                            {
                                id: 10280,
                                itemName: "Willow comp bow"
                            }
                        ]
                    },
                    {
                        name: "Medium Treasure Trails",
                        items: [
                            {
                                id: 2577,
                                itemName: "Ranger boots"
                            },
                            {
                                id: 2579,
                                itemName: "Wizard boots"
                            },
                            {
                                id: 12598,
                                itemName: "Holy sandals"
                            },
                            {
                                id: 23413,
                                itemName: "Climbing boots (g)"
                            },
                            {
                                id: 23389,
                                itemName: "Spiked manacles"
                            },
                            {
                                id: 2605,
                                itemName: "Adamant full helm (t)"
                            },
                            {
                                id: 2599,
                                itemName: "Adamant platebody (t)"
                            },
                            {
                                id: 2601,
                                itemName: "Adamant platelegs (t)"
                            },
                            {
                                id: 3474,
                                itemName: "Adamant plateskirt (t)"
                            },
                            {
                                id: 2603,
                                itemName: "Adamant kiteshield (t)"
                            },
                            {
                                id: 2613,
                                itemName: "Adamant full helm (g)"
                            },
                            {
                                id: 2607,
                                itemName: "Adamant platebody (g)"
                            },
                            {
                                id: 2609,
                                itemName: "Adamant platelegs (g)"
                            },
                            {
                                id: 3475,
                                itemName: "Adamant plateskirt (g)"
                            },
                            {
                                id: 2611,
                                itemName: "Adamant kiteshield (g)"
                            },
                            {
                                id: 7334,
                                itemName: "Adamant shield (h1)"
                            },
                            {
                                id: 7340,
                                itemName: "Adamant shield (h2)"
                            },
                            {
                                id: 7346,
                                itemName: "Adamant shield (h3)"
                            },
                            {
                                id: 7352,
                                itemName: "Adamant shield (h4)"
                            },
                            {
                                id: 7358,
                                itemName: "Adamant shield (h5)"
                            },
                            {
                                id: 10296,
                                itemName: "Adamant helm (h1)"
                            },
                            {
                                id: 10298,
                                itemName: "Adamant helm (h2)"
                            },
                            {
                                id: 10300,
                                itemName: "Adamant helm (h3)"
                            },
                            {
                                id: 10302,
                                itemName: "Adamant helm (h4)"
                            },
                            {
                                id: 10304,
                                itemName: "Adamant helm (h5)"
                            },
                            {
                                id: 23392,
                                itemName: "Adamant platebody (h1)"
                            },
                            {
                                id: 23395,
                                itemName: "Adamant platebody (h2)"
                            },
                            {
                                id: 23398,
                                itemName: "Adamant platebody (h3)"
                            },
                            {
                                id: 23401,
                                itemName: "Adamant platebody (h4)"
                            },
                            {
                                id: 23404,
                                itemName: "Adamant platebody (h5)"
                            },
                            {
                                id: 12293,
                                itemName: "Mithril full helm (t)"
                            },
                            {
                                id: 12287,
                                itemName: "Mithril platebody (t)"
                            },
                            {
                                id: 12289,
                                itemName: "Mithril platelegs (t)"
                            },
                            {
                                id: 12295,
                                itemName: "Mithril plateskirt (t)"
                            },
                            {
                                id: 12291,
                                itemName: "Mithril kiteshield (t)"
                            },
                            {
                                id: 12283,
                                itemName: "Mithril full helm (g)"
                            },
                            {
                                id: 12277,
                                itemName: "Mithril platebody (g)"
                            },
                            {
                                id: 12279,
                                itemName: "Mithril platelegs (g)"
                            },
                            {
                                id: 12285,
                                itemName: "Mithril plateskirt (g)"
                            },
                            {
                                id: 12281,
                                itemName: "Mithril kiteshield (g)"
                            },
                            {
                                id: 7370,
                                itemName: "Green d'hide body (g)"
                            },
                            {
                                id: 7372,
                                itemName: "Green d'hide body (t)"
                            },
                            {
                                id: 7378,
                                itemName: "Green d'hide chaps (g)"
                            },
                            {
                                id: 7380,
                                itemName: "Green d'hide chaps (t)"
                            },
                            {
                                id: 10452,
                                itemName: "Saradomin mitre"
                            },
                            {
                                id: 10446,
                                itemName: "Saradomin cloak"
                            },
                            {
                                id: 10454,
                                itemName: "Guthix mitre"
                            },
                            {
                                id: 10448,
                                itemName: "Guthix cloak"
                            },
                            {
                                id: 10456,
                                itemName: "Zamorak mitre"
                            },
                            {
                                id: 10450,
                                itemName: "Zamorak cloak"
                            },
                            {
                                id: 12203,
                                itemName: "Ancient mitre"
                            },
                            {
                                id: 12197,
                                itemName: "Ancient cloak"
                            },
                            {
                                id: 12201,
                                itemName: "Ancient stole"
                            },
                            {
                                id: 12199,
                                itemName: "Ancient crozier"
                            },
                            {
                                id: 12259,
                                itemName: "Armadyl mitre"
                            },
                            {
                                id: 12261,
                                itemName: "Armadyl cloak"
                            },
                            {
                                id: 12257,
                                itemName: "Armadyl stole"
                            },
                            {
                                id: 12263,
                                itemName: "Armadyl crozier"
                            },
                            {
                                id: 12271,
                                itemName: "Bandos mitre"
                            },
                            {
                                id: 12273,
                                itemName: "Bandos cloak"
                            },
                            {
                                id: 12269,
                                itemName: "Bandos stole"
                            },
                            {
                                id: 12275,
                                itemName: "Bandos crozier"
                            },
                            {
                                id: 7319,
                                itemName: "Red boater"
                            },
                            {
                                id: 7323,
                                itemName: "Green boater"
                            },
                            {
                                id: 7321,
                                itemName: "Orange boater"
                            },
                            {
                                id: 7327,
                                itemName: "Black boater"
                            },
                            {
                                id: 7325,
                                itemName: "Blue boater"
                            },
                            {
                                id: 12309,
                                itemName: "Pink boater"
                            },
                            {
                                id: 12311,
                                itemName: "Purple boater"
                            },
                            {
                                id: 12313,
                                itemName: "White boater"
                            },
                            {
                                id: 2645,
                                itemName: "Red headband"
                            },
                            {
                                id: 2647,
                                itemName: "Black headband"
                            },
                            {
                                id: 2649,
                                itemName: "Brown headband"
                            },
                            {
                                id: 12299,
                                itemName: "White headband"
                            },
                            {
                                id: 12301,
                                itemName: "Blue headband"
                            },
                            {
                                id: 12303,
                                itemName: "Gold headband"
                            },
                            {
                                id: 12305,
                                itemName: "Pink headband"
                            },
                            {
                                id: 12307,
                                itemName: "Green headband"
                            },
                            {
                                id: 12319,
                                itemName: "Crier hat"
                            },
                            {
                                id: 20240,
                                itemName: "Crier coat"
                            },
                            {
                                id: 20243,
                                itemName: "Crier bell"
                            },
                            {
                                id: 12377,
                                itemName: "Adamant cane"
                            },
                            {
                                id: 20251,
                                itemName: "Arceuus banner"
                            },
                            {
                                id: 20260,
                                itemName: "Piscarilius banner"
                            },
                            {
                                id: 20254,
                                itemName: "Hosidius banner"
                            },
                            {
                                id: 20263,
                                itemName: "Shayzien banner"
                            },
                            {
                                id: 20257,
                                itemName: "Lovakengj banner"
                            },
                            {
                                id: 20272,
                                itemName: "Cabbage round shield"
                            },
                            {
                                id: 20266,
                                itemName: "Black unicorn mask"
                            },
                            {
                                id: 20269,
                                itemName: "White unicorn mask"
                            },
                            {
                                id: 12361,
                                itemName: "Cat mask"
                            },
                            {
                                id: 12428,
                                itemName: "Penguin mask"
                            },
                            {
                                id: 12359,
                                itemName: "Leprechaun hat"
                            },
                            {
                                id: 20246,
                                itemName: "Black leprechaun hat"
                            },
                            {
                                id: 23407,
                                itemName: "Wolf mask"
                            },
                            {
                                id: 23410,
                                itemName: "Wolf cloak"
                            },
                            {
                                id: 10416,
                                itemName: "Purple elegant shirt"
                            },
                            {
                                id: 10436,
                                itemName: "Purple elegant blouse"
                            },
                            {
                                id: 10418,
                                itemName: "Purple elegant legs"
                            },
                            {
                                id: 10438,
                                itemName: "Purple elegant skirt"
                            },
                            {
                                id: 10400,
                                itemName: "Black elegant shirt"
                            },
                            {
                                id: 10420,
                                itemName: "White elegant blouse"
                            },
                            {
                                id: 10402,
                                itemName: "Black elegant legs"
                            },
                            {
                                id: 10422,
                                itemName: "White elegant skirt"
                            },
                            {
                                id: 12315,
                                itemName: "Pink elegant shirt"
                            },
                            {
                                id: 12339,
                                itemName: "Pink elegant blouse"
                            },
                            {
                                id: 12317,
                                itemName: "Pink elegant legs"
                            },
                            {
                                id: 12341,
                                itemName: "Pink elegant skirt"
                            },
                            {
                                id: 12347,
                                itemName: "Gold elegant shirt"
                            },
                            {
                                id: 12343,
                                itemName: "Gold elegant blouse"
                            },
                            {
                                id: 12349,
                                itemName: "Gold elegant legs"
                            },
                            {
                                id: 12345,
                                itemName: "Gold elegant skirt"
                            },
                            {
                                id: 20275,
                                itemName: "Gnomish firelighter"
                            },
                            {
                                id: 10364,
                                itemName: "Strength amulet (t)"
                            },
                            {
                                id: 10282,
                                itemName: "Yew comp bow"
                            }
                        ]
                    },
                    {
                        name: "Hard Treasure Trails",
                        items: [
                            {
                                id: 10334,
                                itemName: "3rd age range coif"
                            },
                            {
                                id: 10330,
                                itemName: "3rd age range top"
                            },
                            {
                                id: 10332,
                                itemName: "3rd age range legs"
                            },
                            {
                                id: 10336,
                                itemName: "3rd age vambraces"
                            },
                            {
                                id: 10338,
                                itemName: "3rd age robe top"
                            },
                            {
                                id: 10340,
                                itemName: "3rd age robe"
                            },
                            {
                                id: 10342,
                                itemName: "3rd age mage hat"
                            },
                            {
                                id: 10344,
                                itemName: "3rd age amulet"
                            },
                            {
                                id: 23242,
                                itemName: "3rd age plateskirt"
                            },
                            {
                                id: 10346,
                                itemName: "3rd age platelegs"
                            },
                            {
                                id: 10348,
                                itemName: "3rd age platebody"
                            },
                            {
                                id: 10350,
                                itemName: "3rd age full helmet"
                            },
                            {
                                id: 10352,
                                itemName: "3rd age kiteshield"
                            },
                            {
                                id: 3481,
                                itemName: "Gilded platebody"
                            },
                            {
                                id: 3483,
                                itemName: "Gilded platelegs"
                            },
                            {
                                id: 3485,
                                itemName: "Gilded plateskirt"
                            },
                            {
                                id: 3486,
                                itemName: "Gilded full helm"
                            },
                            {
                                id: 3488,
                                itemName: "Gilded kiteshield"
                            },
                            {
                                id: 20146,
                                itemName: "Gilded med helm"
                            },
                            {
                                id: 20149,
                                itemName: "Gilded chainbody"
                            },
                            {
                                id: 20152,
                                itemName: "Gilded sq shield"
                            },
                            {
                                id: 20155,
                                itemName: "Gilded 2h sword"
                            },
                            {
                                id: 20158,
                                itemName: "Gilded spear"
                            },
                            {
                                id: 20161,
                                itemName: "Gilded hasta"
                            },
                            {
                                id: 2581,
                                itemName: "Robin hood hat"
                            },
                            {
                                id: 22231,
                                itemName: "Dragon boots ornament kit"
                            },
                            {
                                id: 23227,
                                itemName: "Rune defender ornament kit"
                            },
                            {
                                id: 23232,
                                itemName: "Tzhaar-ket-om ornament kit"
                            },
                            {
                                id: 23237,
                                itemName: "Berserker necklace ornament kit"
                            },
                            {
                                id: 2627,
                                itemName: "Rune full helm (t)"
                            },
                            {
                                id: 2623,
                                itemName: "Rune platebody (t)"
                            },
                            {
                                id: 2625,
                                itemName: "Rune platelegs (t)"
                            },
                            {
                                id: 3477,
                                itemName: "Rune plateskirt (t)"
                            },
                            {
                                id: 2629,
                                itemName: "Rune kiteshield (t)"
                            },
                            {
                                id: 2619,
                                itemName: "Rune full helm (g)"
                            },
                            {
                                id: 2615,
                                itemName: "Rune platebody (g)"
                            },
                            {
                                id: 2617,
                                itemName: "Rune platelegs (g)"
                            },
                            {
                                id: 3476,
                                itemName: "Rune plateskirt (g)"
                            },
                            {
                                id: 2621,
                                itemName: "Rune kiteshield (g)"
                            },
                            {
                                id: 2657,
                                itemName: "Zamorak full helm"
                            },
                            {
                                id: 2653,
                                itemName: "Zamorak platebody"
                            },
                            {
                                id: 2655,
                                itemName: "Zamorak platelegs"
                            },
                            {
                                id: 3478,
                                itemName: "Zamorak plateskirt"
                            },
                            {
                                id: 2659,
                                itemName: "Zamorak kiteshield"
                            },
                            {
                                id: 2673,
                                itemName: "Guthix full helm"
                            },
                            {
                                id: 2669,
                                itemName: "Guthix platebody"
                            },
                            {
                                id: 2671,
                                itemName: "Guthix platelegs"
                            },
                            {
                                id: 3480,
                                itemName: "Guthix plateskirt"
                            },
                            {
                                id: 2675,
                                itemName: "Guthix kiteshield"
                            },
                            {
                                id: 2665,
                                itemName: "Saradomin full helm"
                            },
                            {
                                id: 2661,
                                itemName: "Saradomin platebody"
                            },
                            {
                                id: 2663,
                                itemName: "Saradomin platelegs"
                            },
                            {
                                id: 3479,
                                itemName: "Saradomin plateskirt"
                            },
                            {
                                id: 2667,
                                itemName: "Saradomin kiteshield"
                            },
                            {
                                id: 12466,
                                itemName: "Ancient full helm"
                            },
                            {
                                id: 12460,
                                itemName: "Ancient platebody"
                            },
                            {
                                id: 12462,
                                itemName: "Ancient platelegs"
                            },
                            {
                                id: 12464,
                                itemName: "Ancient plateskirt"
                            },
                            {
                                id: 12468,
                                itemName: "Ancient kiteshield"
                            },
                            {
                                id: 12476,
                                itemName: "Armadyl full helm"
                            },
                            {
                                id: 12470,
                                itemName: "Armadyl platebody"
                            },
                            {
                                id: 12472,
                                itemName: "Armadyl platelegs"
                            },
                            {
                                id: 12474,
                                itemName: "Armadyl plateskirt"
                            },
                            {
                                id: 12478,
                                itemName: "Armadyl kiteshield"
                            },
                            {
                                id: 12486,
                                itemName: "Bandos full helm"
                            },
                            {
                                id: 12480,
                                itemName: "Bandos platebody"
                            },
                            {
                                id: 12482,
                                itemName: "Bandos platelegs"
                            },
                            {
                                id: 12484,
                                itemName: "Bandos plateskirt"
                            },
                            {
                                id: 12488,
                                itemName: "Bandos kiteshield"
                            },
                            {
                                id: 7336,
                                itemName: "Rune shield (h1)"
                            },
                            {
                                id: 7342,
                                itemName: "Rune shield (h2)"
                            },
                            {
                                id: 7348,
                                itemName: "Rune shield (h3)"
                            },
                            {
                                id: 7354,
                                itemName: "Rune shield (h4)"
                            },
                            {
                                id: 7360,
                                itemName: "Rune shield (h5)"
                            },
                            {
                                id: 10286,
                                itemName: "Rune helm (h1)"
                            },
                            {
                                id: 10288,
                                itemName: "Rune helm (h2)"
                            },
                            {
                                id: 10290,
                                itemName: "Rune helm (h3)"
                            },
                            {
                                id: 10292,
                                itemName: "Rune helm (h4)"
                            },
                            {
                                id: 10294,
                                itemName: "Rune helm (h5)"
                            },
                            {
                                id: 23209,
                                itemName: "Rune platebody (h1)"
                            },
                            {
                                id: 23212,
                                itemName: "Rune platebody (h2)"
                            },
                            {
                                id: 23215,
                                itemName: "Rune platebody (h3)"
                            },
                            {
                                id: 23218,
                                itemName: "Rune platebody (h4)"
                            },
                            {
                                id: 23221,
                                itemName: "Rune platebody (h5)"
                            },
                            {
                                id: 10390,
                                itemName: "Saradomin coif"
                            },
                            {
                                id: 10386,
                                itemName: "Saradomin d'hide"
                            },
                            {
                                id: 10388,
                                itemName: "Saradomin chaps"
                            },
                            {
                                id: 10384,
                                itemName: "Saradomin bracers"
                            },
                            {
                                id: 19933,
                                itemName: "Saradomin d'hide boots"
                            },
                            {
                                id: 23191,
                                itemName: "Saradomin d'hide shield"
                            },
                            {
                                id: 10382,
                                itemName: "Guthix coif"
                            },
                            {
                                id: 10378,
                                itemName: "Guthix d'hide"
                            },
                            {
                                id: 10380,
                                itemName: "Guthix chaps"
                            },
                            {
                                id: 10376,
                                itemName: "Guthix bracers"
                            },
                            {
                                id: 19927,
                                itemName: "Guthix d'hide boots"
                            },
                            {
                                id: 23188,
                                itemName: "Guthix d'hide shield"
                            },
                            {
                                id: 10374,
                                itemName: "Zamorak coif"
                            },
                            {
                                id: 10370,
                                itemName: "Zamorak d'hide"
                            },
                            {
                                id: 10372,
                                itemName: "Zamorak chaps"
                            },
                            {
                                id: 10368,
                                itemName: "Zamorak bracers"
                            },
                            {
                                id: 19936,
                                itemName: "Zamorak d'hide boots"
                            },
                            {
                                id: 23194,
                                itemName: "Zamorak d'hide shield"
                            },
                            {
                                id: 12504,
                                itemName: "Bandos coif"
                            },
                            {
                                id: 12500,
                                itemName: "Bandos d'hide"
                            },
                            {
                                id: 12502,
                                itemName: "Bandos chaps"
                            },
                            {
                                id: 12498,
                                itemName: "Bandos bracers"
                            },
                            {
                                id: 19924,
                                itemName: "Bandos d'hide boots"
                            },
                            {
                                id: 23203,
                                itemName: "Bandos d'hide shield"
                            },
                            {
                                id: 12512,
                                itemName: "Armadyl coif"
                            },
                            {
                                id: 12508,
                                itemName: "Armadyl d'hide"
                            },
                            {
                                id: 12510,
                                itemName: "Armadyl chaps"
                            },
                            {
                                id: 12506,
                                itemName: "Armadyl bracers"
                            },
                            {
                                id: 19930,
                                itemName: "Armadyl d'hide boots"
                            },
                            {
                                id: 23200,
                                itemName: "Armadyl d'hide shield"
                            },
                            {
                                id: 12496,
                                itemName: "Ancient coif"
                            },
                            {
                                id: 12492,
                                itemName: "Ancient d'hide"
                            },
                            {
                                id: 12494,
                                itemName: "Ancient chaps"
                            },
                            {
                                id: 12490,
                                itemName: "Ancient bracers"
                            },
                            {
                                id: 19921,
                                itemName: "Ancient d'hide boots"
                            },
                            {
                                id: 23197,
                                itemName: "Ancient d'hide shield"
                            },
                            {
                                id: 12331,
                                itemName: "Red d'hide body (t)"
                            },
                            {
                                id: 12333,
                                itemName: "Red d'hide chaps (t)"
                            },
                            {
                                id: 12327,
                                itemName: "Red d'hide body (g)"
                            },
                            {
                                id: 12329,
                                itemName: "Red d'hide chaps (g)"
                            },
                            {
                                id: 7376,
                                itemName: "Blue d'hide body (t)"
                            },
                            {
                                id: 7384,
                                itemName: "Blue d'hide chaps (t)"
                            },
                            {
                                id: 7374,
                                itemName: "Blue d'hide body (g)"
                            },
                            {
                                id: 7382,
                                itemName: "Blue d'hide chaps (g)"
                            },
                            {
                                id: 7400,
                                itemName: "Enchanted hat"
                            },
                            {
                                id: 7399,
                                itemName: "Enchanted top"
                            },
                            {
                                id: 7398,
                                itemName: "Enchanted robe"
                            },
                            {
                                id: 10470,
                                itemName: "Saradomin stole"
                            },
                            {
                                id: 10440,
                                itemName: "Saradomin crozier"
                            },
                            {
                                id: 10472,
                                itemName: "Guthix stole"
                            },
                            {
                                id: 10442,
                                itemName: "Guthix crozier"
                            },
                            {
                                id: 10474,
                                itemName: "Zamorak stole"
                            },
                            {
                                id: 10444,
                                itemName: "Zamorak crozier"
                            },
                            {
                                id: 19912,
                                itemName: "Zombie head"
                            },
                            {
                                id: 19915,
                                itemName: "Cyclops head"
                            },
                            {
                                id: 2651,
                                itemName: "Pirate's hat"
                            },
                            {
                                id: 12323,
                                itemName: "Red cavalier"
                            },
                            {
                                id: 12321,
                                itemName: "White cavalier"
                            },
                            {
                                id: 12325,
                                itemName: "Navy cavalier"
                            },
                            {
                                id: 2639,
                                itemName: "Tan cavalier"
                            },
                            {
                                id: 2641,
                                itemName: "Dark cavalier"
                            },
                            {
                                id: 2643,
                                itemName: "Black cavalier"
                            },
                            {
                                id: 12516,
                                itemName: "Pith helmet"
                            },
                            {
                                id: 12514,
                                itemName: "Explorer backpack"
                            },
                            {
                                id: 23224,
                                itemName: "Thieving bag"
                            },
                            {
                                id: 12518,
                                itemName: "Green dragon mask"
                            },
                            {
                                id: 12520,
                                itemName: "Blue dragon mask"
                            },
                            {
                                id: 12522,
                                itemName: "Red dragon mask"
                            },
                            {
                                id: 12524,
                                itemName: "Black dragon mask"
                            },
                            {
                                id: 19918,
                                itemName: "Nunchaku"
                            },
                            {
                                id: 23206,
                                itemName: "Dual sai"
                            },
                            {
                                id: 12379,
                                itemName: "Rune cane"
                            },
                            {
                                id: 10362,
                                itemName: "Amulet of glory (t)"
                            },
                            {
                                id: 10284,
                                itemName: "Magic comp bow"
                            }
                        ]
                    },
                    {
                        name: "Elite Treasure Trails",
                        items: [
                            {
                                id: 12426,
                                itemName: "3rd age longsword"
                            },
                            {
                                id: 12422,
                                itemName: "3rd age wand"
                            },
                            {
                                id: 12437,
                                itemName: "3rd age cloak"
                            },
                            {
                                id: 12424,
                                itemName: "3rd age bow"
                            },
                            {
                                id: 10334,
                                itemName: "3rd age range coif"
                            },
                            {
                                id: 10330,
                                itemName: "3rd age range top"
                            },
                            {
                                id: 10332,
                                itemName: "3rd age range legs"
                            },
                            {
                                id: 10336,
                                itemName: "3rd age vambraces"
                            },
                            {
                                id: 10338,
                                itemName: "3rd age robe top"
                            },
                            {
                                id: 10340,
                                itemName: "3rd age robe"
                            },
                            {
                                id: 10342,
                                itemName: "3rd age mage hat"
                            },
                            {
                                id: 10344,
                                itemName: "3rd age amulet"
                            },
                            {
                                id: 23242,
                                itemName: "3rd age plateskirt"
                            },
                            {
                                id: 10346,
                                itemName: "3rd age platelegs"
                            },
                            {
                                id: 10348,
                                itemName: "3rd age platebody"
                            },
                            {
                                id: 10350,
                                itemName: "3rd age full helmet"
                            },
                            {
                                id: 10352,
                                itemName: "3rd age kiteshield"
                            },
                            {
                                id: 23185,
                                itemName: "Ring of 3rd age"
                            },
                            {
                                id: 12389,
                                itemName: "Gilded scimitar"
                            },
                            {
                                id: 12391,
                                itemName: "Gilded boots"
                            },
                            {
                                id: 3481,
                                itemName: "Gilded platebody"
                            },
                            {
                                id: 3483,
                                itemName: "Gilded platelegs"
                            },
                            {
                                id: 3485,
                                itemName: "Gilded plateskirt"
                            },
                            {
                                id: 3486,
                                itemName: "Gilded full helm"
                            },
                            {
                                id: 3488,
                                itemName: "Gilded kiteshield"
                            },
                            {
                                id: 20146,
                                itemName: "Gilded med helm"
                            },
                            {
                                id: 20149,
                                itemName: "Gilded chainbody"
                            },
                            {
                                id: 20152,
                                itemName: "Gilded sq shield"
                            },
                            {
                                id: 20155,
                                itemName: "Gilded 2h sword"
                            },
                            {
                                id: 20158,
                                itemName: "Gilded spear"
                            },
                            {
                                id: 20161,
                                itemName: "Gilded hasta"
                            },
                            {
                                id: 23258,
                                itemName: "Gilded coif"
                            },
                            {
                                id: 23261,
                                itemName: "Gilded d'hide vambs"
                            },
                            {
                                id: 23264,
                                itemName: "Gilded d'hide body"
                            },
                            {
                                id: 23267,
                                itemName: "Gilded d'hide chaps"
                            },
                            {
                                id: 23276,
                                itemName: "Gilded pickaxe"
                            },
                            {
                                id: 23279,
                                itemName: "Gilded axe"
                            },
                            {
                                id: 23282,
                                itemName: "Gilded spade"
                            },
                            {
                                id: 12526,
                                itemName: "Fury ornament kit"
                            },
                            {
                                id: 12534,
                                itemName: "Dragon chainbody ornament kit"
                            },
                            {
                                id: 12536,
                                itemName: "Dragon legs/skirt ornament kit"
                            },
                            {
                                id: 12532,
                                itemName: "Dragon sq shield ornament kit"
                            },
                            {
                                id: 12538,
                                itemName: "Dragon full helm ornament kit"
                            },
                            {
                                id: 20002,
                                itemName: "Dragon scimitar ornament kit"
                            },
                            {
                                id: 12530,
                                itemName: "Light infinity colour kit"
                            },
                            {
                                id: 12528,
                                itemName: "Dark infinity colour kit"
                            },
                            {
                                id: 19997,
                                itemName: "Holy wraps"
                            },
                            {
                                id: 19994,
                                itemName: "Ranger gloves"
                            },
                            {
                                id: 12596,
                                itemName: "Rangers' tunic"
                            },
                            {
                                id: 23249,
                                itemName: "Rangers' tights"
                            },
                            {
                                id: 12381,
                                itemName: "Black d'hide body (g)"
                            },
                            {
                                id: 12383,
                                itemName: "Black d'hide chaps (g)"
                            },
                            {
                                id: 12385,
                                itemName: "Black d'hide body (t)"
                            },
                            {
                                id: 12387,
                                itemName: "Black d'hide chaps (t)"
                            },
                            {
                                id: 12397,
                                itemName: "Royal crown"
                            },
                            {
                                id: 12439,
                                itemName: "Royal sceptre"
                            },
                            {
                                id: 12393,
                                itemName: "Royal gown top"
                            },
                            {
                                id: 12395,
                                itemName: "Royal gown bottom"
                            },
                            {
                                id: 12351,
                                itemName: "Musketeer hat"
                            },
                            {
                                id: 12441,
                                itemName: "Musketeer tabard"
                            },
                            {
                                id: 12443,
                                itemName: "Musketeer pants"
                            },
                            {
                                id: 19958,
                                itemName: "Dark tuxedo jacket"
                            },
                            {
                                id: 19964,
                                itemName: "Dark trousers"
                            },
                            {
                                id: 19967,
                                itemName: "Dark tuxedo shoes"
                            },
                            {
                                id: 19961,
                                itemName: "Dark tuxedo cuffs"
                            },
                            {
                                id: 19970,
                                itemName: "Dark bow tie"
                            },
                            {
                                id: 19973,
                                itemName: "Light tuxedo jacket"
                            },
                            {
                                id: 19979,
                                itemName: "Light trousers"
                            },
                            {
                                id: 19982,
                                itemName: "Light tuxedo shoes"
                            },
                            {
                                id: 19976,
                                itemName: "Light tuxedo cuffs"
                            },
                            {
                                id: 19985,
                                itemName: "Light bow tie"
                            },
                            {
                                id: 19943,
                                itemName: "Arceuus scarf"
                            },
                            {
                                id: 19946,
                                itemName: "Hosidius scarf"
                            },
                            {
                                id: 19952,
                                itemName: "Piscarilius scarf"
                            },
                            {
                                id: 19955,
                                itemName: "Shayzien scarf"
                            },
                            {
                                id: 19949,
                                itemName: "Lovakengj scarf"
                            },
                            {
                                id: 12363,
                                itemName: "Bronze dragon mask"
                            },
                            {
                                id: 12365,
                                itemName: "Iron dragon mask"
                            },
                            {
                                id: 12367,
                                itemName: "Steel dragon mask"
                            },
                            {
                                id: 12369,
                                itemName: "Mithril dragon mask"
                            },
                            {
                                id: 23270,
                                itemName: "Adamant dragon mask"
                            },
                            {
                                id: 23273,
                                itemName: "Rune dragon mask"
                            },
                            {
                                id: 12371,
                                itemName: "Lava dragon mask"
                            },
                            {
                                id: 20005,
                                itemName: "Ring of nature"
                            },
                            {
                                id: 12357,
                                itemName: "Katana"
                            },
                            {
                                id: 12373,
                                itemName: "Dragon cane"
                            },
                            {
                                id: 12335,
                                itemName: "Briefcase"
                            },
                            {
                                id: 19991,
                                itemName: "Bucket helm"
                            },
                            {
                                id: 19988,
                                itemName: "Blacksmith's helm"
                            },
                            {
                                id: 12540,
                                itemName: "Deerstalker"
                            },
                            {
                                id: 12430,
                                itemName: "Afro"
                            },
                            {
                                id: 12355,
                                itemName: "Big pirate hat"
                            },
                            {
                                id: 12432,
                                itemName: "Top hat"
                            },
                            {
                                id: 12353,
                                itemName: "Monocle"
                            },
                            {
                                id: 12337,
                                itemName: "Sagacious spectacles"
                            },
                            {
                                id: 23246,
                                itemName: "Fremennik kilt"
                            },
                            {
                                id: 23252,
                                itemName: "Giant boot"
                            },
                            {
                                id: 23255,
                                itemName: "Uri's hat"
                            },

                        ]
                    },
                    {
                        name: "Master Treasure Trails",
                        items: [
                            {
                                id: 19730,
                                itemName: "Bloodhound"
                            },
                            {
                                id: 20014,
                                itemName: "3rd age pickaxe"
                            },
                            {
                                id: 20011,
                                itemName: "3rd age axe"
                            },
                            {
                                id: 12426,
                                itemName: "3rd age longsword"
                            },
                            {
                                id: 12422,
                                itemName: "3rd age wand"
                            },
                            {
                                id: 12437,
                                itemName: "3rd age cloak"
                            },
                            {
                                id: 12424,
                                itemName: "3rd age bow"
                            },
                            {
                                id: 10334,
                                itemName: "3rd age range coif"
                            },
                            {
                                id: 10330,
                                itemName: "3rd age range top"
                            },
                            {
                                id: 10332,
                                itemName: "3rd age range legs"
                            },
                            {
                                id: 10336,
                                itemName: "3rd age vambraces"
                            },
                            {
                                id: 10338,
                                itemName: "3rd age robe top"
                            },
                            {
                                id: 10340,
                                itemName: "3rd age robe"
                            },
                            {
                                id: 10342,
                                itemName: "3rd age mage hat"
                            },
                            {
                                id: 10344,
                                itemName: "3rd age amulet"
                            },
                            {
                                id: 23242,
                                itemName: "3rd age plateskirt"
                            },
                            {
                                id: 10346,
                                itemName: "3rd age platelegs"
                            },
                            {
                                id: 10348,
                                itemName: "3rd age platebody"
                            },
                            {
                                id: 10350,
                                itemName: "3rd age full helmet"
                            },
                            {
                                id: 10352,
                                itemName: "3rd age kiteshield"
                            },
                            {
                                id: 23339,
                                itemName: "3rd age druidic robe bottoms"
                            },
                            {
                                id: 23336,
                                itemName: "3rd age druidic robe top"
                            },
                            {
                                id: 23342,
                                itemName: "3rd age druidic staff"
                            },
                            {
                                id: 23345,
                                itemName: "3rd age druidic cloak"
                            },
                            {
                                id: 23185,
                                itemName: "Ring of 3rd age"
                            },
                            {
                                id: 12389,
                                itemName: "Gilded scimitar"
                            },
                            {
                                id: 12391,
                                itemName: "Gilded boots"
                            },
                            {
                                id: 3481,
                                itemName: "Gilded platebody"
                            },
                            {
                                id: 3483,
                                itemName: "Gilded platelegs"
                            },
                            {
                                id: 3485,
                                itemName: "Gilded plateskirt"
                            },
                            {
                                id: 3486,
                                itemName: "Gilded full helm"
                            },
                            {
                                id: 3488,
                                itemName: "Gilded kiteshield"
                            },
                            {
                                id: 20146,
                                itemName: "Gilded med helm"
                            },
                            {
                                id: 20149,
                                itemName: "Gilded chainbody"
                            },
                            {
                                id: 20152,
                                itemName: "Gilded sq shield"
                            },
                            {
                                id: 20155,
                                itemName: "Gilded 2h sword"
                            },
                            {
                                id: 20158,
                                itemName: "Gilded spear"
                            },
                            {
                                id: 20161,
                                itemName: "Gilded hasta"
                            },
                            {
                                id: 23258,
                                itemName: "Gilded coif"
                            },
                            {
                                id: 23261,
                                itemName: "Gilded d'hide vambs"
                            },
                            {
                                id: 23264,
                                itemName: "Gilded d'hide body"
                            },
                            {
                                id: 23267,
                                itemName: "Gilded d'hide chaps"
                            },
                            {
                                id: 23276,
                                itemName: "Gilded pickaxe"
                            },
                            {
                                id: 23279,
                                itemName: "Gilded axe"
                            },
                            {
                                id: 23282,
                                itemName: "Gilded spade"
                            },
                            {
                                id: 20059,
                                itemName: "Bucket helm (g)"
                            },
                            {
                                id: 20017,
                                itemName: "Ring of coins"
                            },
                            {
                                id: 20068,
                                itemName: "Armadyl godsword ornament kit"
                            },
                            {
                                id: 20071,
                                itemName: "Bandos godsword ornament kit"
                            },
                            {
                                id: 20074,
                                itemName: "Saradomin godsword ornament kit"
                            },
                            {
                                id: 20077,
                                itemName: "Zamorak godsword ornament kit"
                            },
                            {
                                id: 20065,
                                itemName: "Occult ornament kit"
                            },
                            {
                                id: 20062,
                                itemName: "Torture ornament kit"
                            },
                            {
                                id: 22246,
                                itemName: "Anguish ornament kit"
                            },
                            {
                                id: 20143,
                                itemName: "Dragon defender ornament kit"
                            },
                            {
                                id: 22239,
                                itemName: "Dragon kiteshield ornament kit"
                            },
                            {
                                id: 22236,
                                itemName: "Dragon platebody ornament kit"
                            },
                            {
                                id: 23348,
                                itemName: "Tormented ornament kit"
                            },
                            {
                                id: 20128,
                                itemName: "Hood of darkness"
                            },
                            {
                                id: 20131,
                                itemName: "Robe top of darkness"
                            },
                            {
                                id: 20137,
                                itemName: "Robe bottom of darkness"
                            },
                            {
                                id: 20134,
                                itemName: "Gloves of darkness"
                            },
                            {
                                id: 20140,
                                itemName: "Boots of darkness"
                            },
                            {
                                id: 20035,
                                itemName: "Samurai kasa"
                            },
                            {
                                id: 20038,
                                itemName: "Samurai shirt"
                            },
                            {
                                id: 20044,
                                itemName: "Samurai greaves"
                            },
                            {
                                id: 20047,
                                itemName: "Samurai boots"
                            },
                            {
                                id: 20041,
                                itemName: "Samurai gloves"
                            },
                            {
                                id: 20095,
                                itemName: "Ankou mask"
                            },
                            {
                                id: 20098,
                                itemName: "Ankou top"
                            },
                            {
                                id: 20101,
                                itemName: "Ankou gloves"
                            },
                            {
                                id: 20107,
                                itemName: "Ankou socks"
                            },
                            {
                                id: 20104,
                                itemName: "Ankou's leggings"
                            },
                            {
                                id: 20080,
                                itemName: "Mummy's head"
                            },
                            {
                                id: 20092,
                                itemName: "Mummy's feet"
                            },
                            {
                                id: 20086,
                                itemName: "Mummy's hands"
                            },
                            {
                                id: 20089,
                                itemName: "Mummy's legs"
                            },
                            {
                                id: 20083,
                                itemName: "Mummy's body"
                            },
                            {
                                id: 20125,
                                itemName: "Shayzien hood"
                            },
                            {
                                id: 20116,
                                itemName: "Hosidius hood"
                            },
                            {
                                id: 20113,
                                itemName: "Arceuus hood"
                            },
                            {
                                id: 20122,
                                itemName: "Piscarilius hood"
                            },
                            {
                                id: 20119,
                                itemName: "Lovakengj hood"
                            },
                            {
                                id: 20020,
                                itemName: "Lesser demon mask"
                            },
                            {
                                id: 20023,
                                itemName: "Greater demon mask"
                            },
                            {
                                id: 20026,
                                itemName: "Black demon mask"
                            },
                            {
                                id: 20032,
                                itemName: "Jungle demon mask"
                            },
                            {
                                id: 20029,
                                itemName: "Old demon mask"
                            },
                            {
                                id: 19724,
                                itemName: "Left eye patch"
                            },
                            {
                                id: 20110,
                                itemName: "Bowl wig"
                            },
                            {
                                id: 20056,
                                itemName: "Ale of the gods"
                            },
                            {
                                id: 20050,
                                itemName: "Obsidian cape (r)"
                            },
                            {
                                id: 20053,
                                itemName: "Half moon spectacles"
                            },
                            {
                                id: 20008,
                                itemName: "Fancy tiara"
                            },

                        ]
                    },
                    {
                        name: "Shared Treasure Trail Rewards",
                        items: [
                            {
                                id: 3827,
                                itemName: "Saradomin page 1"
                            },
                            {
                                id: 3831,
                                itemName: "Zamorak page 1"
                            },
                            {
                                id: 3835,
                                itemName: "Guthix page 1"
                            },
                            {
                                id: 12613,
                                itemName: "Bandos page 1"
                            },
                            {
                                id: 12617,
                                itemName: "Armadyl page 1"
                            },
                            {
                                id: 12621,
                                itemName: "Ancient page 1"
                            },
                            {
                                id: 3828,
                                itemName: "Saradomin page 2"
                            },
                            {
                                id: 3832,
                                itemName: "Zamorak page 2"
                            },
                            {
                                id: 3836,
                                itemName: "Guthix page 2"
                            },
                            {
                                id: 12614,
                                itemName: "Bandos page 2"
                            },
                            {
                                id: 12618,
                                itemName: "Armadyl page 2"
                            },
                            {
                                id: 12622,
                                itemName: "Ancient page 2"
                            },
                            {
                                id: 3829,
                                itemName: "Saradomin page 3"
                            },
                            {
                                id: 3833,
                                itemName: "Zamorak page 3"
                            },
                            {
                                id: 3837,
                                itemName: "Guthix page 3"
                            },
                            {
                                id: 12615,
                                itemName: "Bandos page 3"
                            },
                            {
                                id: 12619,
                                itemName: "Armadyl page 3"
                            },
                            {
                                id: 12623,
                                itemName: "Ancient page 3"
                            },
                            {
                                id: 3830,
                                itemName: "Saradomin page 4"
                            },
                            {
                                id: 3834,
                                itemName: "Zamorak page 4"
                            },
                            {
                                id: 3838,
                                itemName: "Guthix page 4"
                            },
                            {
                                id: 12616,
                                itemName: "Bandos page 4"
                            },
                            {
                                id: 12620,
                                itemName: "Armadyl page 4"
                            },
                            {
                                id: 12624,
                                itemName: "Ancient page 4"
                            },
                            {
                                id: 20220,
                                itemName: "Holy blessing"
                            },
                            {
                                id: 20223,
                                itemName: "Unholy blessing"
                            },
                            {
                                id: 20226,
                                itemName: "Peaceful blessing"
                            },
                            {
                                id: 20232,
                                itemName: "War blessing"
                            },
                            {
                                id: 20229,
                                itemName: "Honourable blessing"
                            },
                            {
                                id: 20235,
                                itemName: "Ancient blessing"
                            },
                            {
                                id: 21389,
                                itemName: "Master scroll book"
                            },

                        ]
                    }
                ]
            },
            {
                name: "Minigames",
                subCategories: [
                    {
                        name: "Barbarian Assault",
                        items: [
                            {
                                id: 12703,
                                itemName: "Pet penance queen"
                            },
                            {
                                id: 10548,
                                itemName: "Fighter hat"
                            },
                            {
                                id: 10550,
                                itemName: "Ranger hat"
                            },
                            {
                                id: 10549,
                                itemName: "Runner hat"
                            },
                            {
                                id: 10547,
                                itemName: "Healer hat"
                            },
                            {
                                id: 10551,
                                itemName: "Fighter torso"
                            },
                            {
                                id: 10555,
                                itemName: "Penance skirt"
                            },
                            {
                                id: 10552,
                                itemName: "Runner boots"
                            },
                            {
                                id: 10553,
                                itemName: "Penance gloves"
                            },
                            {
                                id: 10589,
                                itemName: "Granite helm"
                            },
                            {
                                id: 10564,
                                itemName: "Granite body"
                            }
                        ]
                    },
                    {
                        name: "Castle Wars",
                        items: [
                            {
                                id: 4071,
                                itemName: "Decorative helm (red)"
                            },
                            {
                                id: 4069,
                                itemName: "Decorative armour (red platebody)"
                            },
                            {
                                id: 4068,
                                itemName: "Decorative sword (red)"
                            },
                            {
                                id: 4072,
                                itemName: "Decorative shield (red)"
                            },
                            {
                                id: 4070,
                                itemName: "Decorative armour (red platelegs)"
                            },
                            {
                                id: 11893,
                                itemName: "Decorative armour (red plateskirt)"
                            },
                            {
                                id: 4506,
                                itemName: "Decorative helm (white)"
                            },
                            {
                                id: 4504,
                                itemName: "Decorative armour (white platebody)"
                            },
                            {
                                id: 4503,
                                itemName: "Decorative sword (white)"
                            },
                            {
                                id: 4507,
                                itemName: "Decorative shield (white)"
                            },
                            {
                                id: 4505,
                                itemName: "Decorative armour (white platelegs)"
                            },
                            {
                                id: 11894,
                                itemName: "Decorative armour (white plateskirt)"
                            },
                            {
                                id: 4511,
                                itemName: "Decorative helm (gold)"
                            },
                            {
                                id: 4509,
                                itemName: "Decorative armour (gold platebody)"
                            },
                            {
                                id: 4508,
                                itemName: "Decorative sword (gold)"
                            },
                            {
                                id: 4512,
                                itemName: "Decorative shield (gold)"
                            },
                            {
                                id: 4510,
                                itemName: "Decorative armour (gold platelegs)"
                            },
                            {
                                id: 11895,
                                itemName: "Decorative armour (gold plateskirt)"
                            },
                            {
                                id: 4513,
                                itemName: "Castlewars hood (Saradomin)"
                            },
                            {
                                id: 4514,
                                itemName: "Castlewars cloak (Saradomin)"
                            },
                            {
                                id: 4515,
                                itemName: "Castlewars hood (Zamorak)"
                            },
                            {
                                id: 4516,
                                itemName: "Castlewars cloak (Zamorak)"
                            },
                            {
                                id: 4037,
                                itemName: "Saradomin banner"
                            },
                            {
                                id: 4039,
                                itemName: "Zamorak banner"
                            },
                            {
                                id: 11898,
                                itemName: "Decorative armour (magic hat)"
                            },
                            {
                                id: 11896,
                                itemName: "Decorative armour (magic top)"
                            },
                            {
                                id: 11897,
                                itemName: "Decorative armour (magic legs)"
                            },
                            {
                                id: 11899,
                                itemName: "Decorative armour (ranged top)"
                            },
                            {
                                id: 11900,
                                itemName: "Decorative armour (ranged legs)"
                            },
                            {
                                id: 11901,
                                itemName: "Decorative armour (quiver)"
                            },
                            {
                                id: 12637,
                                itemName: "Saradomin halo"
                            },
                            {
                                id: 12638,
                                itemName: "Zamorak halo"
                            },
                            {
                                id: 12639,
                                itemName: "Guthix halo"
                            }
                        ]
                    },
                    {
                        name: "Fishing Trawler",
                        items: [
                            {
                                id: 13258,
                                itemName: "Angler hat"
                            },
                            {
                                id: 13259,
                                itemName: "Angler top"
                            },
                            {
                                id: 13260,
                                itemName: "Angler waders"
                            },
                            {
                                id: 13261,
                                itemName: "Angler boots"
                            }
                        ]
                    },
                    {
                        name: "Gnome Restaurant",
                        items: [
                            {
                                id: 9469,
                                itemName: "Grand seed pod"
                            },
                            {
                                id: 9470,
                                itemName: "Gnome scarf"
                            },
                            {
                                id: 9472,
                                itemName: "Gnome goggles"
                            },
                            {
                                id: 9475,
                                itemName: "Mint cake"
                            }
                        ]
                    },
                    {
                        name: "Magic Training Arena",
                        items: [
                            {
                                id: 6908,
                                itemName: "Beginner wand"
                            },
                            {
                                id: 6910,
                                itemName: "Apprentice wand"
                            },
                            {
                                id: 6912,
                                itemName: "Teacher wand"
                            },
                            {
                                id: 6914,
                                itemName: "Master wand"
                            },
                            {
                                id: 6918,
                                itemName: "Infinity hat"
                            },
                            {
                                id: 6916,
                                itemName: "Infinity top"
                            },
                            {
                                id: 6924,
                                itemName: "Infinity bottoms"
                            },
                            {
                                id: 6920,
                                itemName: "Infinity boots"
                            },
                            {
                                id: 6922,
                                itemName: "Infinity gloves"
                            },
                            {
                                id: 6889,
                                itemName: "Mage's book"
                            },
                            {
                                id: 6926,
                                itemName: "Bones to peaches"
                            }
                        ]
                    },
                    {
                        name: "Pest Control",
                        items: [
                            {
                                id: 8841,
                                itemName: "Void knight mace"
                            },
                            {
                                id: 8839,
                                itemName: "Void knight top"
                            },
                            {
                                id: 8840,
                                itemName: "Void knight robe"
                            },
                            {
                                id: 8842,
                                itemName: "Void knight gloves"
                            },
                            {
                                id: 11663,
                                itemName: "Void mage helm"
                            },
                            {
                                id: 11665,
                                itemName: "Void melee helm"
                            },
                            {
                                id: 11664,
                                itemName: "Void ranger helm"
                            },
                            {
                                id: 11666,
                                itemName: "Void seal(8)"
                            },
                            {
                                id: 13072,
                                itemName: "Elite void top"
                            },
                            {
                                id: 13073,
                                itemName: "Elite void robe"
                            }
                        ]
                    },
                    {
                        name: "Rogues' Den",
                        items: [
                            {
                                id: 5554,
                                itemName: "Rogue mask"
                            },
                            {
                                id: 5553,
                                itemName: "Rogue top"
                            },
                            {
                                id: 5555,
                                itemName: "Rogue trousers"
                            },
                            {
                                id: 5557,
                                itemName: "Rogue boots"
                            },
                            {
                                id: 5556,
                                itemName: "Rogue gloves"
                            }
                        ]
                    },
                    {
                        name: "Shades of Mort'ton",
                        items: [
                            {
                                id: 12853,
                                itemName: "Amulet of the damned"
                            },
                            {
                                id: 12854,
                                itemName: "Flamtaer bag"
                            },
                            {
                                id: 3470,
                                itemName: "Fine cloth"
                            }
                        ]
                    },
                    {
                        name: "Temple Trekking",
                        items: [
                            {
                                id: 10941,
                                itemName: "Lumberjack hat"
                            },
                            {
                                id: 10939,
                                itemName: "Lumberjack top"
                            },
                            {
                                id: 10940,
                                itemName: "Lumberjack legs"
                            },
                            {
                                id: 10933,
                                itemName: "Lumberjack boots"
                            }
                        ]
                    },
                    {
                        name: "Tithe Farm",
                        items: [
                            {
                                id: 13646,
                                itemName: "Farmer's strawhat"
                            },
                            {
                                id: 13642,
                                itemName: "Farmer's jacket"
                            },
                            {
                                id: 13640,
                                itemName: "Farmer's boro trousers"
                            },
                            {
                                id: 13644,
                                itemName: "Farmer's boots"
                            },
                            {
                                id: 13639,
                                itemName: "Seed box"
                            },
                            {
                                id: 13353,
                                itemName: "Gricoller's can"
                            }
                        ]
                    },
                    {
                        name: "Trouble Brewing",
                        items: [
                            {
                                id: 8952,
                                itemName: "Blue naval shirt"
                            },
                            {
                                id: 8959,
                                itemName: "Blue tricorn hat"
                            },
                            {
                                id: 8991,
                                itemName: "Blue navy slacks"
                            },
                            {
                                id: 8953,
                                itemName: "Green naval shirt"
                            },
                            {
                                id: 8960,
                                itemName: "Green tricorn hat"
                            },
                            {
                                id: 8992,
                                itemName: "Green navy slacks"
                            },
                            {
                                id: 8954,
                                itemName: "Red naval shirt"
                            },
                            {
                                id: 8961,
                                itemName: "Red tricorn hat"
                            },
                            {
                                id: 8993,
                                itemName: "Red navy slacks"
                            },
                            {
                                id: 8955,
                                itemName: "Brown naval shirt"
                            },
                            {
                                id: 8962,
                                itemName: "Brown tricorn hat"
                            },
                            {
                                id: 8994,
                                itemName: "Brown navy slacks"
                            },
                            {
                                id: 8956,
                                itemName: "Black naval shirt"
                            },
                            {
                                id: 8963,
                                itemName: "Black tricorn hat"
                            },
                            {
                                id: 8995,
                                itemName: "Black navy slacks"
                            },
                            {
                                id: 8957,
                                itemName: "Purple naval shirt"
                            },
                            {
                                id: 8964,
                                itemName: "Purple tricorn hat"
                            },
                            {
                                id: 8996,
                                itemName: "Purple navy slacks"
                            },
                            {
                                id: 8958,
                                itemName: "Grey naval shirt"
                            },
                            {
                                id: 8965,
                                itemName: "Grey tricorn hat"
                            },
                            {
                                id: 8997,
                                itemName: "Grey navy slacks"
                            },
                            {
                                id: 8966,
                                itemName: "Cutthroat flag"
                            },
                            {
                                id: 8967,
                                itemName: "Guilded smile flag"
                            },
                            {
                                id: 8968,
                                itemName: "Bronze fist flag"
                            },
                            {
                                id: 8969,
                                itemName: "Lucky shot flag"
                            },
                            {
                                id: 8970,
                                itemName: "Treasure flag"
                            },
                            {
                                id: 8971,
                                itemName: "Phasmatys flag"
                            },
                            {
                                id: 8988,
                                itemName: "The stuff"
                            },
                            {
                                id: 8940,
                                itemName: "Rum"
                            },
                            {
                                id: 8941,
                                itemName: "Rum"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Other",
                subCategories: [
                    {
                        name: "Aerial Fishing",
                        items: [
                            {
                                id: 22840,
                                itemName: "Golden tench"
                            },
                            {
                                id: 22846,
                                itemName: "Pearl fishing rod"
                            },
                            {
                                id: 22844,
                                itemName: "Pearl fly fishing rod"
                            },
                            {
                                id: 22842,
                                itemName: "Pearl barbarian rod"
                            },
                            {
                                id: 22838,
                                itemName: "Fish sack"
                            },
                            {
                                id: 13258,
                                itemName: "Angler hat"
                            },
                            {
                                id: 13259,
                                itemName: "Angler top"
                            },
                            {
                                id: 13260,
                                itemName: "Angler waders"
                            },
                            {
                                id: 13261,
                                itemName: "Angler boots"
                            }
                        ]
                    },
                    {
                        name: "All Pets",
                        items: [
                            {
                                id: 13262,
                                itemName: "Abyssal orphan"
                            },
                            {
                                id: 22746,
                                itemName: "Ikkle hydra"
                            },
                            {
                                id: 13178,
                                itemName: "Callisto cub"
                            },
                            {
                                id: 13247,
                                itemName: "Hellpuppy"
                            },
                            {
                                id: 11995,
                                itemName: "Pet chaos elemental"
                            },
                            {
                                id: 12651,
                                itemName: "Pet zilyana"
                            },
                            {
                                id: 12816,
                                itemName: "Pet dark core"
                            },
                            {
                                id: 12644,
                                itemName: "Pet dagannoth prime"
                            },
                            {
                                id: 12643,
                                itemName: "Pet dagannoth supreme"
                            },
                            {
                                id: 12645,
                                itemName: "Pet dagannoth rex"
                            },
                            {
                                id: 13225,
                                itemName: "Tzrek-jad"
                            },
                            {
                                id: 12650,
                                itemName: "Pet general graardor"
                            },
                            {
                                id: 12646,
                                itemName: "Baby mole"
                            },
                            {
                                id: 21748,
                                itemName: "Noon"
                            },
                            {
                                id: 21291,
                                itemName: "Jal-nib-rek"
                            },
                            {
                                id: 12647,
                                itemName: "Kalphite princess"
                            },
                            {
                                id: 12653,
                                itemName: "Prince black dragon"
                            },
                            {
                                id: 12655,
                                itemName: "Pet kraken"
                            },
                            {
                                id: 12649,
                                itemName: "Pet kree'arra"
                            },
                            {
                                id: 12652,
                                itemName: "Pet k'ril tsutsaroth"
                            },
                            {
                                id: 13181,
                                itemName: "Scorpia's offspring"
                            },
                            {
                                id: 21273,
                                itemName: "Skotos"
                            },
                            {
                                id: 12648,
                                itemName: "Pet smoke devil"
                            },
                            {
                                id: 13177,
                                itemName: "Venenatis spiderling"
                            },
                            {
                                id: 13179,
                                itemName: "Vet'ion jr."
                            },
                            {
                                id: 21992,
                                itemName: "Vorki"
                            },
                            {
                                id: 20693,
                                itemName: "Phoenix"
                            },
                            {
                                id: 12921,
                                itemName: "Pet snakeling"
                            },
                            {
                                id: 20851,
                                itemName: "Olmlet"
                            },
                            {
                                id: 22473,
                                itemName: "Lil' zik"
                            },
                            {
                                id: 19730,
                                itemName: "Bloodhound"
                            },
                            {
                                id: 12703,
                                itemName: "Pet penance queen"
                            },
                            {
                                id: 13320,
                                itemName: "Heron"
                            },
                            {
                                id: 13321,
                                itemName: "Rock golem"
                            },
                            {
                                id: 13322,
                                itemName: "Beaver"
                            },
                            {
                                id: 13323,
                                itemName: "Baby chinchompa"
                            },
                            {
                                id: 20659,
                                itemName: "Giant squirrel"
                            },
                            {
                                id: 20661,
                                itemName: "Tangleroot"
                            },
                            {
                                id: 20663,
                                itemName: "Rocky"
                            },
                            {
                                id: 20665,
                                itemName: "Rift guardian"
                            },
                            {
                                id: 21509,
                                itemName: "Herbi"
                            },
                            {
                                id: 13071,
                                itemName: "Chompy chick"
                            },
                            {
                                id: 23495,
                                itemName: "Sraracha"
                            },
                            {
                                id: 23760,
                                itemName: "Smolcano"
                            },
                            {
                                id: 23757,
                                itemName: "Youngllef"
                            }
                        ]
                    },
                    {
                        name: "Champion's Challenge",
                        items: [
                            {
                                id: 6798,
                                itemName: "Earth warrior champion scroll"
                            },
                            {
                                id: 6799,
                                itemName: "Ghoul champion scroll"
                            },
                            {
                                id: 6800,
                                itemName: "Giant champion scroll"
                            },
                            {
                                id: 6801,
                                itemName: "Goblin champion scroll"
                            },
                            {
                                id: 6802,
                                itemName: "Hobgoblin champion scroll"
                            },
                            {
                                id: 6803,
                                itemName: "Imp champion scroll"
                            },
                            {
                                id: 6804,
                                itemName: "Jogre champion scroll"
                            },
                            {
                                id: 6805,
                                itemName: "Lesser demon champion scroll"
                            },
                            {
                                id: 6806,
                                itemName: "Skeleton champion scroll"
                            },
                            {
                                id: 6807,
                                itemName: "Zombie champion scroll"
                            },
                            {
                                id: 21439,
                                itemName: "Champion's cape"
                            }
                        ]
                    },
                    {
                        name: "Chaos Druids",
                        items: [
                            {
                                id: 20517,
                                itemName: "Elder chaos top"
                            },
                            {
                                id: 20520,
                                itemName: "Elder chaos robe"
                            },
                            {
                                id: 20595,
                                itemName: "Elder chaos hood"
                            }
                        ]
                    },
                    {
                        name: "Chompy Birds",
                        items: [
                            {
                                id: 13071,
                                itemName: "Chompy chick"
                            },
                            {
                                id: 2978,
                                itemName: "Chompy bird hat (ogre bowman)"
                            },
                            {
                                id: 2979,
                                itemName: "Chompy bird hat (bowman)"
                            },
                            {
                                id: 2980,
                                itemName: "Chompy bird hat (ogre yeoman)"
                            },
                            {
                                id: 2981,
                                itemName: "Chompy bird hat (yeoman)"
                            },
                            {
                                id: 2982,
                                itemName: "Chompy bird hat (ogre marksman)"
                            },
                            {
                                id: 2983,
                                itemName: "Chompy bird hat (marksman)"
                            },
                            {
                                id: 2984,
                                itemName: "Chompy bird hat (ogre woodsman)"
                            },
                            {
                                id: 2985,
                                itemName: "Chompy bird hat (woodsman)"
                            },
                            {
                                id: 2986,
                                itemName: "Chompy bird hat (ogre forester)"
                            },
                            {
                                id: 2987,
                                itemName: "Chompy bird hat (forester)"
                            },
                            {
                                id: 2988,
                                itemName: "Chompy bird hat (ogre bowmaster)"
                            },
                            {
                                id: 2989,
                                itemName: "Chompy bird hat (bowmaster)"
                            },
                            {
                                id: 2990,
                                itemName: "Chompy bird hat (ogre expert)"
                            },
                            {
                                id: 2991,
                                itemName: "Chompy bird hat (expert)"
                            },
                            {
                                id: 2992,
                                itemName: "Chompy bird hat (ogre dragon archer)"
                            },
                            {
                                id: 2993,
                                itemName: "Chompy bird hat (dragon archer)"
                            },
                            {
                                id: 2994,
                                itemName: "Chompy bird hat (expert ogre dragon archer)"
                            },
                            {
                                id: 2995,
                                itemName: "Chompy bird hat (expert dragon archer)"
                            }
                        ]
                    },
                    {
                        name: "Creature Creation",
                        items: [
                            {
                                id: 10859,
                                itemName: "Tea flask"
                            },
                            {
                                id: 10877,
                                itemName: "Plain satchel"
                            },
                            {
                                id: 10878,
                                itemName: "Green satchel"
                            },
                            {
                                id: 10879,
                                itemName: "Red satchel"
                            },
                            {
                                id: 10880,
                                itemName: "Black satchel"
                            },
                            {
                                id: 10881,
                                itemName: "Gold satchel"
                            },
                            {
                                id: 10882,
                                itemName: "Rune satchel"
                            }
                        ]
                    },
                    {
                        name: "Cyclopes",
                        items: [
                            {
                                id: 8844,
                                itemName: "Bronze defender"
                            },
                            {
                                id: 8845,
                                itemName: "Iron defender"
                            },
                            {
                                id: 8846,
                                itemName: "Steel defender"
                            },
                            {
                                id: 8847,
                                itemName: "Black defender"
                            },
                            {
                                id: 8848,
                                itemName: "Mithril defender"
                            },
                            {
                                id: 8849,
                                itemName: "Adamant defender"
                            },
                            {
                                id: 8850,
                                itemName: "Rune defender"
                            },
                            {
                                id: 12954,
                                itemName: "Dragon defender"
                            }
                        ]
                    },
                    {
                        name: "Fossil Island Notes",
                        items: [
                            {
                                id: 21664,
                                itemName: "Scribbled note"
                            },
                            {
                                id: 21666,
                                itemName: "Partial note"
                            },
                            {
                                id: 21668,
                                itemName: "Ancient note"
                            },
                            {
                                id: 21670,
                                itemName: "Ancient writings"
                            },
                            {
                                id: 21672,
                                itemName: "Experimental note"
                            },
                            {
                                id: 21674,
                                itemName: "Paragraph of text"
                            },
                            {
                                id: 21676,
                                itemName: "Musty smelling note"
                            },
                            {
                                id: 21678,
                                itemName: "Hastily scrawled note"
                            },
                            {
                                id: 21680,
                                itemName: "Old writing"
                            },
                            {
                                id: 21682,
                                itemName: "Short note"
                            }
                        ]
                    },
                    {
                        name: "Glough's Experiments",
                        items: [
                            {
                                id: 19529,
                                itemName: "Zenyte shard"
                            },
                            {
                                id: 19586,
                                itemName: "Light frame"
                            },
                            {
                                id: 19589,
                                itemName: "Heavy frame"
                            },
                            {
                                id: 19592,
                                itemName: "Ballista limbs"
                            },
                            {
                                id: 19610,
                                itemName: "Monkey tail"
                            },
                            {
                                id: 19601,
                                itemName: "Ballista spring"
                            }
                        ]
                    },
                    {
                        name: "Motherlode Mine",
                        items: [
                            {
                                id: 764,
                                itemName: "Coal bag"
                            },
                            {
                                id: 766,
                                itemName: "Gem bag"
                            },
                            {
                                id: 12013,
                                itemName: "Prospector helmet"
                            },
                            {
                                id: 12014,
                                itemName: "Prospector jacket"
                            },
                            {
                                id: 12015,
                                itemName: "Prospector legs"
                            },
                            {
                                id: 12016,
                                itemName: "Prospector boots"
                            }
                        ]
                    },
                    {
                        name: "My Notes",
                        items: [
                            {
                                id: 11341,
                                itemName: "Ancient page number 1"
                            },
                            {
                                id: 11342,
                                itemName: "Ancient page number 2"
                            },
                            {
                                id: 11343,
                                itemName: "Ancient page number 3"
                            },
                            {
                                id: 11344,
                                itemName: "Ancient page number 4"
                            },
                            {
                                id: 11345,
                                itemName: "Ancient page number 5"
                            },
                            {
                                id: 11346,
                                itemName: "Ancient page number 6"
                            },
                            {
                                id: 11347,
                                itemName: "Ancient page number 7"
                            },
                            {
                                id: 11348,
                                itemName: "Ancient page number 8"
                            },
                            {
                                id: 11349,
                                itemName: "Ancient page number 9"
                            },
                            {
                                id: 11350,
                                itemName: "Ancient page number 10"
                            },
                            {
                                id: 11351,
                                itemName: "Ancient page number 11"
                            },
                            {
                                id: 11352,
                                itemName: "Ancient page number 12"
                            },
                            {
                                id: 11353,
                                itemName: "Ancient page number 13"
                            },
                            {
                                id: 11354,
                                itemName: "Ancient page number 14"
                            },
                            {
                                id: 11355,
                                itemName: "Ancient page number 15"
                            },
                            {
                                id: 11356,
                                itemName: "Ancient page number 16"
                            },
                            {
                                id: 11357,
                                itemName: "Ancient page number 17"
                            },
                            {
                                id: 11358,
                                itemName: "Ancient page number 18"
                            },
                            {
                                id: 11359,
                                itemName: "Ancient page number 19"
                            },
                            {
                                id: 11360,
                                itemName: "Ancient page number 20"
                            },
                            {
                                id: 11361,
                                itemName: "Ancient page number 21"
                            },
                            {
                                id: 11362,
                                itemName: "Ancient page number 22"
                            },
                            {
                                id: 11363,
                                itemName: "Ancient page number 23"
                            },
                            {
                                id: 11364,
                                itemName: "Ancient page number 24"
                            },
                            {
                                id: 11365,
                                itemName: "Ancient page number 25"
                            },
                            {
                                id: 11366,
                                itemName: "Ancient page number 26"
                            }
                        ]
                    },
                    {
                        name: "Random Events",
                        items: [
                            {
                                id: 6654,
                                itemName: "Camo top"
                            },
                            {
                                id: 6655,
                                itemName: "Camo bottoms"
                            },
                            {
                                id: 6656,
                                itemName: "Camo helmet"
                            },
                            {
                                id: 6180,
                                itemName: "Lederhosen top"
                            },
                            {
                                id: 6181,
                                itemName: "Lederhosen shorts"
                            },
                            {
                                id: 6182,
                                itemName: "Lederhosen hat"
                            },
                            {
                                id: 7592,
                                itemName: "Zombie shirt"
                            },
                            {
                                id: 7593,
                                itemName: "Zombie trousers"
                            },
                            {
                                id: 7594,
                                itemName: "Zombie mask"
                            },
                            {
                                id: 7595,
                                itemName: "Zombie gloves"
                            },
                            {
                                id: 7596,
                                itemName: "Zombie boots"
                            },
                            {
                                id: 3057,
                                itemName: "Mime mask"
                            },
                            {
                                id: 3058,
                                itemName: "Mime top"
                            },
                            {
                                id: 3059,
                                itemName: "Mime legs"
                            },
                            {
                                id: 3060,
                                itemName: "Mime gloves"
                            },
                            {
                                id: 3061,
                                itemName: "Mime boots"
                            },
                            {
                                id: 6183,
                                itemName: "Frog token"
                            },
                            {
                                id: 20590,
                                itemName: "Stale baguette"
                            }
                        ]
                    },
                    {
                        name: "Revenants",
                        items: [
                            {
                                id: 22542,
                                itemName: "Viggora's chainmace (u)"
                            },
                            {
                                id: 22547,
                                itemName: "Craw's bow (u)"
                            },
                            {
                                id: 22552,
                                itemName: "Thammaron's sceptre (u)"
                            },
                            {
                                id: 22557,
                                itemName: "Amulet of avarice"
                            },
                            {
                                id: 21817,
                                itemName: "Bracelet of ethereum (uncharged)"
                            },
                            {
                                id: 21804,
                                itemName: "Ancient crystal"
                            },
                            {
                                id: 22305,
                                itemName: "Ancient relic"
                            },
                            {
                                id: 22302,
                                itemName: "Ancient effigy"
                            },
                            {
                                id: 22299,
                                itemName: "Ancient medallion"
                            },
                            {
                                id: 21813,
                                itemName: "Ancient statuette"
                            },
                            {
                                id: 21810,
                                itemName: "Ancient totem"
                            },
                            {
                                id: 21807,
                                itemName: "Ancient emblem"
                            },

                        ]
                    },
                    {
                        name: "Rooftop Agility",
                        items: [
                            {
                                id: 11850,
                                itemName: "Graceful hood"
                            },
                            {
                                id: 11852,
                                itemName: "Graceful cape"
                            },
                            {
                                id: 11854,
                                itemName: "Graceful top"
                            },
                            {
                                id: 11856,
                                itemName: "Graceful legs"
                            },
                            {
                                id: 11858,
                                itemName: "Graceful gloves"
                            },
                            {
                                id: 11860,
                                itemName: "Graceful boots"
                            }
                        ]
                    },
                    {
                        name: "Shayzien Armour",
                        items: [
                            {
                                id: 13357,
                                itemName: "Shayzien gloves (1)"
                            },
                            {
                                id: 13358,
                                itemName: "Shayzien boots (1)"
                            },
                            {
                                id: 13359,
                                itemName: "Shayzien helm (1)"
                            },
                            {
                                id: 13360,
                                itemName: "Shayzien greaves (1)"
                            },
                            {
                                id: 13361,
                                itemName: "Shayzien platebody (1)"
                            },
                            {
                                id: 13362,
                                itemName: "Shayzien gloves (2)"
                            },
                            {
                                id: 13363,
                                itemName: "Shayzien boots (2)"
                            },
                            {
                                id: 13364,
                                itemName: "Shayzien helm (2)"
                            },
                            {
                                id: 13365,
                                itemName: "Shayzien greaves (2)"
                            },
                            {
                                id: 13366,
                                itemName: "Shayzien platebody (2)"
                            },
                            {
                                id: 13367,
                                itemName: "Shayzien gloves (3)"
                            },
                            {
                                id: 13368,
                                itemName: "Shayzien boots (3)"
                            },
                            {
                                id: 13369,
                                itemName: "Shayzien helm (3)"
                            },
                            {
                                id: 13370,
                                itemName: "Shayzien greaves (3)"
                            },
                            {
                                id: 13371,
                                itemName: "Shayzien platebody (3)"
                            },
                            {
                                id: 13372,
                                itemName: "Shayzien gloves (4)"
                            },
                            {
                                id: 13373,
                                itemName: "Shayzien boots (4)"
                            },
                            {
                                id: 13374,
                                itemName: "Shayzien helm (4)"
                            },
                            {
                                id: 13375,
                                itemName: "Shayzien greaves (4)"
                            },
                            {
                                id: 13376,
                                itemName: "Shayzien platebody (4)"
                            },
                            {
                                id: 13357,
                                itemName: "Shayzien gloves (1)"
                            },
                            {
                                id: 13378,
                                itemName: "Shayzien boots (5)"
                            },
                            {
                                id: 13379,
                                itemName: "Shayzien helm (5)"
                            },
                            {
                                id: 13380,
                                itemName: "Shayzien greaves (5)"
                            },
                            {
                                id: 13381,
                                itemName: "Shayzien platebody (5)"
                            }
                        ]
                    },
                    {
                        name: "Skilling Pets",
                        items: [
                            {
                                id: 13320,
                                itemName: "Heron"
                            },
                            {
                                id: 13321,
                                itemName: "Rock golem"
                            },
                            {
                                id: 13322,
                                itemName: "Beaver"
                            },
                            {
                                id: 13323,
                                itemName: "Baby chinchompa"
                            },
                            {
                                id: 20659,
                                itemName: "Giant squirrel"
                            },
                            {
                                id: 20661,
                                itemName: "Tangleroot"
                            },
                            {
                                id: 20663,
                                itemName: "Rocky"
                            },
                            {
                                id: 20665,
                                itemName: "Rift guardian"
                            }
                        ]
                    },
                    {
                        name: "Slayer",
                        items: [
                            {
                                id: 4133,
                                itemName: "Crawling hand"
                            },
                            {
                                id: 7976,
                                itemName: "Cockatrice head"
                            },
                            {
                                id: 7977,
                                itemName: "Basilisk head"
                            },
                            {
                                id: 7978,
                                itemName: "Kurask head"
                            },
                            {
                                id: 7979,
                                itemName: "Abyssal head"
                            },
                            {
                                id: 20724,
                                itemName: "Imbued heart"
                            },
                            {
                                id: 21270,
                                itemName: "Eternal gem"
                            },
                            {
                                id: 20736,
                                itemName: "Dust battlestaff"
                            },
                            {
                                id: 20730,
                                itemName: "Mist battlestaff"
                            },
                            {
                                id: 4151,
                                itemName: "Abyssal whip"
                            },
                            {
                                id: 4153,
                                itemName: "Granite maul"
                            },
                            {
                                id: 6665,
                                itemName: "Mudskipper hat"
                            },
                            {
                                id: 6666,
                                itemName: "Flippers"
                            },
                            {
                                id: 11037,
                                itemName: "Brine sabre"
                            },
                            {
                                id: 11902,
                                itemName: "Leaf-bladed sword"
                            },
                            {
                                id: 20727,
                                itemName: "Leaf-bladed battleaxe"
                            },
                            {
                                id: 8901,
                                itemName: "Black mask (10)"
                            },
                            {
                                id: 21646,
                                itemName: "Granite longsword"
                            },
                            {
                                id: 21643,
                                itemName: "Granite boots"
                            },
                            {
                                id: 21637,
                                itemName: "Wyvern visage"
                            },
                            {
                                id: 6809,
                                itemName: "Granite legs"
                            },
                            {
                                id: 10589,
                                itemName: "Granite helm"
                            },
                            {
                                id: 11286,
                                itemName: "Draconic visage"
                            },
                            {
                                id: 4119,
                                itemName: "Bronze boots"
                            },
                            {
                                id: 4121,
                                itemName: "Iron boots"
                            },
                            {
                                id: 4123,
                                itemName: "Steel boots"
                            },
                            {
                                id: 4125,
                                itemName: "Black boots"
                            },
                            {
                                id: 4127,
                                itemName: "Mithril boots"
                            },
                            {
                                id: 4129,
                                itemName: "Adamant boots"
                            },
                            {
                                id: 4131,
                                itemName: "Rune boots"
                            },
                            {
                                id: 11840,
                                itemName: "Dragon boots"
                            },
                            {
                                id: 13265,
                                itemName: "Abyssal dagger"
                            },
                            {
                                id: 11908,
                                itemName: "Uncharged trident"
                            },
                            {
                                id: 12004,
                                itemName: "Kraken tentacle"
                            },
                            {
                                id: 11235,
                                itemName: "Dark bow"
                            },
                            {
                                id: 12002,
                                itemName: "Occult necklace"
                            },
                            {
                                id: 2513,
                                itemName: "Dragon chainbody"
                            },
                            {
                                id: 20849,
                                itemName: "Dragon thrownaxe"
                            },
                            {
                                id: 21028,
                                itemName: "Dragon harpoon"
                            },
                            {
                                id: 21009,
                                itemName: "Dragon sword"
                            },
                            {
                                id: 22804,
                                itemName: "Dragon knife"
                            },
                            {
                                id: 22963,
                                itemName: "Broken dragon hasta"
                            },
                            {
                                id: 22960,
                                itemName: "Drake's tooth"
                            },
                            {
                                id: 22957,
                                itemName: "Drake's claw"
                            },
                            {
                                id: 22988,
                                itemName: "Hydra tail"
                            },
                            {
                                id: 22971,
                                itemName: "Hydra's fang"
                            },
                            {
                                id: 22973,
                                itemName: "Hydra's eye"
                            },
                            {
                                id: 22969,
                                itemName: "Hydra's heart"
                            },
                            {
                                id: 4109,
                                itemName: "Mystic hat (light)"
                            },
                            {
                                id: 4111,
                                itemName: "Mystic robe top (light)"
                            },
                            {
                                id: 4113,
                                itemName: "Mystic robe bottom (light)"
                            },
                            {
                                id: 4115,
                                itemName: "Mystic gloves (light)"
                            },
                            {
                                id: 4117,
                                itemName: "Mystic boots (light)"
                            },
                            {
                                id: 4099,
                                itemName: "Mystic hat (dark)"
                            },
                            {
                                id: 4101,
                                itemName: "Mystic robe top (dark)"
                            },
                            {
                                id: 4103,
                                itemName: "Mystic robe bottom (dark)"
                            },
                            {
                                id: 4105,
                                itemName: "Mystic gloves (dark)"
                            },
                            {
                                id: 4107,
                                itemName: "Mystic boots (dark)"
                            },
                            {
                                id: 23047,
                                itemName: "Mystic hat (dusk)"
                            },
                            {
                                id: 23050,
                                itemName: "Mystic robe top (dusk)"
                            },
                            {
                                id: 23053,
                                itemName: "Mystic robe bottom (dusk)"
                            },
                            {
                                id: 23056,
                                itemName: "Mystic gloves (dusk)"
                            },
                            {
                                id: 23059,
                                itemName: "Mystic boots (dusk)"
                            },
                            {
                                id: 24268,
                                itemName: "Basilisk jaw"
                            }
                        ]
                    },
                    {
                        name: "TzHaar",
                        items: [
                            {
                                id: 6568,
                                itemName: "Obsidian cape"
                            },
                            {
                                id: 6524,
                                itemName: "Toktz-ket-xil"
                            },
                            {
                                id: 6528,
                                itemName: "Tzhaar-ket-om"
                            },
                            {
                                id: 6523,
                                itemName: "Toktz-xil-ak"
                            },
                            {
                                id: 6525,
                                itemName: "Toktz-xil-ek"
                            },
                            {
                                id: 6526,
                                itemName: "Toktz-mej-tal"
                            },
                            {
                                id: 6522,
                                itemName: "Toktz-xil-ul"
                            },
                            {
                                id: 21298,
                                itemName: "Obsidian helmet"
                            },
                            {
                                id: 21301,
                                itemName: "Obsidian platebody"
                            },
                            {
                                id: 21304,
                                itemName: "Obsidian platelegs"
                            }
                        ]
                    },
                    {
                        name: "Miscellaneous",
                        items: [
                            {
                                id: 21509,
                                itemName: "Herbi"
                            },
                            {
                                id: 13071,
                                itemName: "Chompy chick"
                            },
                            {
                                id: 13576,
                                itemName: "Dragon warhammer"
                            },
                            {
                                id: 7991,
                                itemName: "Big swordfish"
                            },
                            {
                                id: 7993,
                                itemName: "Big shark"
                            },
                            {
                                id: 7989,
                                itemName: "Big bass"
                            },
                            {
                                id: 10976,
                                itemName: "Long bone"
                            },
                            {
                                id: 10977,
                                itemName: "Curved bone"
                            },
                            {
                                id: 11942,
                                itemName: "Ecumenical key"
                            },
                            {
                                id: 9044,
                                itemName: "Pharaoh's sceptre (3)"
                            },
                            {
                                id: 19679,
                                itemName: "Dark totem base"
                            },
                            {
                                id: 19681,
                                itemName: "Dark totem middle"
                            },
                            {
                                id: 19683,
                                itemName: "Dark totem top"
                            },
                            {
                                id: 11338,
                                itemName: "Chewed bones"
                            },
                            {
                                id: 11335,
                                itemName: "Dragon full helm"
                            },
                            {
                                id: 2366,
                                itemName: "Shield left half"
                            },
                            {
                                id: 22100,
                                itemName: "Dragon metal slice"
                            },
                            {
                                id: 22103,
                                itemName: "Dragon metal lump"
                            },
                            {
                                id: 21918,
                                itemName: "Dragon limbs"
                            },
                            {
                                id: 1249,
                                itemName: "Dragon spear"
                            },
                            {
                                id: 19707,
                                itemName: "Amulet of eternal glory"
                            },
                            {
                                id: 2997,
                                itemName: "Pirate's hook"
                            },
                            {
                                id: 21838,
                                itemName: "Shaman mask"
                            },
                            {
                                id: 20439,
                                itemName: "Evil chicken head"
                            },
                            {
                                id: 20436,
                                itemName: "Evil chicken wings"
                            },
                            {
                                id: 20442,
                                itemName: "Evil chicken legs"
                            },
                            {
                                id: 20433,
                                itemName: "Evil chicken feet"
                            },
                            {
                                id: 21343,
                                itemName: "Mining gloves"
                            },
                            {
                                id: 21345,
                                itemName: "Superior mining gloves"
                            },
                            {
                                id: 21392,
                                itemName: "Expert mining gloves"
                            },
                            {
                                id: 9007,
                                itemName: "Right skull half"
                            },
                            {
                                id: 9008,
                                itemName: "Left skull half"
                            },
                            {
                                id: 9010,
                                itemName: "Top of sceptre"
                            },
                            {
                                id: 9011,
                                itemName: "Bottom of sceptre"
                            },
                            {
                                id: 22374,
                                itemName: "Mossy key"
                            },
                            {
                                id: 20754,
                                itemName: "Giant key"
                            },
                            {
                                id: 22875,
                                itemName: "Hespori seed"
                            },
                            {
                                id: 7536,
                                itemName: "Fresh crab claw"
                            },
                            {
                                id: 7538,
                                itemName: "Fresh crab shell"
                            },
                            {
                                id: 13392,
                                itemName: "Xeric's talisman (inert)"
                            },
                            {
                                id: 23522,
                                itemName: "Mask of ranul"
                            },
                            {
                                id: 23943,
                                itemName: "Elven signet"
                            },
                            {
                                id: 24000,
                                itemName: "Crystal grail"
                            },
                            {
                                id: 23959,
                                itemName: "Enhanced crystal teleport seed"
                            },
                            {
                                id: 24034,
                                itemName: "Dragonstone full helm"
                            },
                            {
                                id: 24037,
                                itemName: "Dragonstone platebody"
                            },
                            {
                                id: 24040,
                                itemName: "Dragonstone platelegs"
                            },
                            {
                                id: 24046,
                                itemName: "Dragonstone gauntlets"
                            },
                            {
                                id: 24043,
                                itemName: "Dragonstone boots"
                            },
                            {
                                id: 6571,
                                itemName: "Uncut onyx"
                            }
                        ]
                    }
                ]
            },
            {
                name: "Custom",
                subCategories: [
                    {
                        name: "Gracefull",
                        items: [
                            {
                                id: 11850,
                                itemName: "Graceful hood"
                            },
                            {
                                id: 11854,
                                itemName: "Graceful cape"
                            },
                            {
                                id: 11856,
                                itemName: "Graceful top"
                            },
                            {
                                id: 11860,
                                itemName: "Graceful legs"
                            },
                            {
                                id: 11858,
                                itemName: "Graceful gloves"
                            },
                            {
                                id: 11852,
                                itemName: "Graceful boots"
                            },
                            {
                                id: 13579,
                                itemName: "Graceful hood"
                            },
                            {
                                id: 13583,
                                itemName: "Graceful cape"
                            },
                            {
                                id: 13585,
                                itemName: "Graceful top"
                            },
                            {
                                id: 13589,
                                itemName: "Graceful legs"
                            },
                            {
                                id: 13587,
                                itemName: "Graceful gloves"
                            },
                            {
                                id: 13581,
                                itemName: "Graceful boots"
                            },
                            {
                                id: 13591,
                                itemName: "Graceful hood"
                            },
                            {
                                id: 13595,
                                itemName: "Graceful cape"
                            },
                            {
                                id: 13597,
                                itemName: "Graceful top"
                            },
                            {
                                id: 13601,
                                itemName: "Graceful legs"
                            },
                            {
                                id: 13599,
                                itemName: "Graceful gloves"
                            },
                            {
                                id: 13593,
                                itemName: "Graceful boots"
                            },
                            {
                                id: 13603,
                                itemName: "Graceful hood"
                            },
                            {
                                id: 13607,
                                itemName: "Graceful cape"
                            },
                            {
                                id: 13609,
                                itemName: "Graceful top"
                            },
                            {
                                id: 13613,
                                itemName: "Graceful legs"
                            },
                            {
                                id: 13611,
                                itemName: "Graceful gloves"
                            },
                            {
                                id: 13605,
                                itemName: "Graceful boots"
                            },
                            {
                                id: 13615,
                                itemName: "Graceful hood"
                            },
                            {
                                id: 13619,
                                itemName: "Graceful cape"
                            },
                            {
                                id: 13621,
                                itemName: "Graceful top"
                            },
                            {
                                id: 13625,
                                itemName: "Graceful legs"
                            },
                            {
                                id: 13623,
                                itemName: "Graceful gloves"
                            },
                            {
                                id: 13617,
                                itemName: "Graceful boots"
                            },
                            {
                                id: 13627,
                                itemName: "Graceful hood"
                            },
                            {
                                id: 13631,
                                itemName: "Graceful cape"
                            },
                            {
                                id: 13633,
                                itemName: "Graceful top"
                            },
                            {
                                id: 13637,
                                itemName: "Graceful legs"
                            },
                            {
                                id: 13635,
                                itemName: "Graceful gloves"
                            },
                            {
                                id: 13629,
                                itemName: "Graceful boots"
                            },
                            {
                                id: 13667,
                                itemName: "Graceful hood"
                            },
                            {
                                id: 13671,
                                itemName: "Graceful cape"
                            },
                            {
                                id: 13673,
                                itemName: "Graceful top"
                            },
                            {
                                id: 13677,
                                itemName: "Graceful legs"
                            },
                            {
                                id: 13675,
                                itemName: "Graceful gloves"
                            },
                            {
                                id: 13669,
                                itemName: "Graceful boots"
                            },
                            {
                                id: 21061,
                                itemName: "Graceful hood"
                            },
                            {
                                id: 21067,
                                itemName: "Graceful cape"
                            },
                            {
                                id: 21070,
                                itemName: "Graceful top"
                            },
                            {
                                id: 21076,
                                itemName: "Graceful legs"
                            },
                            {
                                id: 21073,
                                itemName: "Graceful gloves"
                            },
                            {
                                id: 21064,
                                itemName: "Graceful boots"
                            },

                        ]
                    }
                ]
            }
        ]
    },


    Goalmaker: {
        name: "Custom View",
        array: []
    },

    petsID: {
        name: "Pets",
        items: [
            [13320, 20659, 13323, 13322, null, 22473, 20851, 21291, 13225, 12816],
            [20665, 13321, 20663, 20661, null, 12921, 12649, 12650, 12651, 12652],
            [null, null, null, null, null, 12647, 12646, 12643, 12644, 12645],
            [20693, 19730, 23760, 13071, null, 12648, 13247, 21748, 12655, 13262],
            [12703, 21509, 23757, null, null, 22746, 21992, 12653, 21273, 23495],
            [null, null, null, null, null, 13178, 11995, 13177, 13181, 13179]
        ]
    },

    gracefullID: {
        name: "Gracefull",
        items: [
            [11850, 13579, 13591, 13603, 13615, 13627, 13667, 21061],
            [11854, 13583, 13595, 13607, 13619, 13631, 13671, 21067],
            [11856, 13585, 13597, 13609, 13621, 13633, 13673, 21070],
            [11860, 13589, 13601, 13613, 13625, 13637, 13677, 21076],
            [11858, 13587, 13599, 13611, 13623, 13635, 13675, 21073],
            [11852, 13581, 13593, 13605, 13617, 13629, 13669, 21064]
        ]
    },

};

export const getters = {
    itemsUnlocked: state => {
        return state.itemsUnlocked
    },
};

export const mutations = {
    retrieveItemHave(state, itemsUnlocked) {
        state.itemsUnlocked = itemsUnlocked;
    },

    retrieveDiarysHave(state, diarysUnlocked) {
        for (let x = 0; x < diarysUnlocked.length; x++) {
            for (let i = 0; i < state.diaryLevel.length; i++) {
                if (state.diaryLevel[i]['name'] == diarysUnlocked[x].diary) {
                    state.diaryLevel[i]['level'] = diarysUnlocked[x].level
                }
            }
        }
    },

    retrieveCluesHave(state, clues) {
        for (let x = 0; x < clues.length; x++) {
            for (let i = 0; i < state.cluesData.length; i++) {
                if (state.cluesData[i]['name'] == clues[x].clueType) {
                    state.cluesData[i]['completed'] = clues[x].completed
                }
            }
        }
    },

    updateItemHave(state, itemID) {
        let tempItems = state.itemsUnlocked;
        if (tempItems.includes(itemID)) {
            firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).collection('ItemsObtained').doc('Items').update({
                Items: firebase.firestore.FieldValue.arrayRemove(itemID)
            })
        } else {
            firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).collection('ItemsObtained').doc('Items').update({
                Items: firebase.firestore.FieldValue.arrayUnion(itemID)
            })
                .catch(() => {
                    firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).collection('ItemsObtained').doc('Items').set({
                        "Items": [itemID]
                    })
                })
        }
    },

    updateDiaryHave(state, diaryName) {
        var updateTo = 0
        for (let i = 0; i < state.diaryLevel.length; i++) {
            if (state.diaryLevel[i]['name'] == diaryName) {
                if (state.diaryLevel[i]['level'] == 4) {
                    updateTo = 0
                } else {
                    updateTo = state.diaryLevel[i]['level'] + 1
                }
            }
        }
        var updateDiary = {};
        updateDiary['level'] = updateTo;
        firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).collection('Diaries').doc(diaryName).update(updateDiary)
            .catch(() => {
                firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).collection('Diaries').doc(diaryName).set({
                    "level": 1
                })
            })

    }
};

export const actions = {
    initRealtimeItems({ commit }) {
        firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).collection('ItemsObtained')
            .onSnapshot(snapshot => {
                snapshot.forEach((doc) => {
                    let tempItemsUnlocked = doc.data().Items
                    commit('retrieveItemHave', tempItemsUnlocked)
                })
            })
    },

    initRealtimeDiaries({ commit }) {
        firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).collection('Diaries')
            .onSnapshot(snapshot => {
                let tempDiariesData = []
                snapshot.forEach((doc) => {
                    let tempDiary = { diary: doc.id, level: doc.data().level }
                    tempDiariesData.push(tempDiary)
                })
                commit('retrieveDiarysHave', tempDiariesData)
            })
    },

    initRealtimeClues({ commit }) {
        firebase.firestore().collection('CollectionlogUserData').doc(firebase.auth().currentUser.uid).collection('Cluescrolls')
            .onSnapshot(snapshot => {
                let tempCluesData = []
                snapshot.forEach((doc) => {
                    let tempClue = { clueType: doc.id, completed: doc.data().Completed }
                    tempCluesData.push(tempClue)
                })
                commit('retrieveCluesHave', tempCluesData)
            })
    },

    updateItemHave({ commit }, itemID) {
        commit('updateItemHave', itemID)
    },

    updateDiaryHave({ commit }, diaryName) {
        commit('updateDiaryHave', diaryName)
    },
};

export default {
    state,
    getters,
    mutations,
    actions
};
