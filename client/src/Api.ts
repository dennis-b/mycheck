export interface User {
    id: number;
    name: string;
    email: string;
    invitationStatus: boolean;

}

const MOCK_DATA: User[] = [{
    "id": 1,
    "name": "Arty Walshaw",
    "email": "awalshaw0@wordpress.com",
    "invitationStatus": false
},
    {
        "id": 2,
        "name": "Kristo Boyd",
        "email": "kboyd1@biblegateway.com",
        "invitationStatus": false
    },
    {
        "id": 3,
        "name": "Rania Sweett",
        "email": "rsweett2@dion.ne.jp",
        "invitationStatus": true
    },
    {
        "id": 4,
        "name": "Lorrayne Muirhead",
        "email": "lmuirhead3@barnesandnoble.com",
        "invitationStatus": true
    },
    {
        "id": 5,
        "name": "Nicola McCray",
        "email": "nmccray4@redcross.org",
        "invitationStatus": true
    },
    {
        "id": 6,
        "name": "Frederica Yea",
        "email": "fyea5@unesco.org",
        "invitationStatus": false
    }, {
        "id": 7,
        "name": "Kellyann Mindenhall",
        "email": "kmindenhall6@opensource.org",
        "invitationStatus": true
    },
    {
        "id": 8,
        "name": "Gae Godlip",
        "email": "ggodlip7@hatena.ne.jp",
        "invitationStatus": false
    }, {
        "id": 9,
        "name": "Cleveland Millhouse",
        "email": "cmillhouse8@un.org",
        "invitationStatus": true
    },
    {
        "id": 10,
        "name": "Pasquale Stoltz",
        "email": "pstoltz9@sbwire.com",
        "invitationStatus": false
    }, {
        "id": 11,
        "name": "Jessa Leader",
        "email": "jleadera@blogger.com",
        "invitationStatus": false
    },
    {
        "id": 12,
        "name": "Spence Wensley",
        "email": "swensleyb@yolasite.com",
        "invitationStatus": true
    }, {
        "id": 13,
        "name": "Jacobo Elks",
        "email": "jelksc@mtv.com",
        "invitationStatus": true
    },
    {
        "id": 14,
        "name": "Vicki Ianiello",
        "email": "vianiellod@ebay.com",
        "invitationStatus": false
    }, {
        "id": 15,
        "name": "Quintina Hatzar",
        "email": "qhatzare@51.la",
        "invitationStatus": false
    },
    {
        "id": 16,
        "name": "Manny Dolman",
        "email": "mdolmanf@oaic.gov.au",
        "invitationStatus": false
    }, {
        "id": 17,
        "name": "Thedrick Piatkowski",
        "email": "tpiatkowskig@taobao.com",
        "invitationStatus": false
    },
    {
        "id": 18,
        "name": "Iona Trathan",
        "email": "itrathanh@harvard.edu",
        "invitationStatus": false
    },
    {
        "id": 19,
        "name": "Burnaby Josofovitz",
        "email": "bjosofovitzi@infoseek.co.jp",
        "invitationStatus": false
    },
    {
        "id": 20,
        "name": "Marj Capon",
        "email": "mcaponj@flavors.me",
        "invitationStatus": true
    }
]

export function loadData(): Promise<User[]> {
    const timeout = getRandTimeout(2000, 6000);
    return new Promise((resolve, reject) => setTimeout(() => resolve(MOCK_DATA), timeout))
}

function getRandTimeout(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
