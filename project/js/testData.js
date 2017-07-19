'use strict';

const directionListTest = [
    {
        "name": "UI",
        "testList": [            
            "en1",
            "en2",
            "en3",
            "en4",
            "tech",
            "esse"
        ],
        "filterList": [
            {
                "tests": [
                    "en1", 
                    "en2",
                    "en3",
                    "en4"
                ],
                "action": "average",
                "condition": "greater",
                "grade": 60
            },
            {
                "tests": [
                    "tech"
                ],
                "action": "sum",
                "condition": "greater",
                "grade": 75
            }
        ]
    },    
    {
        "name": "Go",
        "testList": [            
            "en1",
            "en2",
            "en3",
            "en4",
            "tech",
            "esse"
        ],
        "filterList": [
            {
                "tests": [
                    "en1", 
                    "en2"
                ],
                "action": "average",
                "condition": "greater",
                "grade": 60
            },
            {
                "tests": [
                    "tech"
                ],
                "action": "sum",
                "condition": "greater",
                "grade": 60
            }
        ]
    },    
    {
        "name": "Php",
        "testList": [            
            "en1",
            "en2",
            "en3",
            "en4",
            "tech",
            "esse"
        ],
        "filterList": [
            {
                "tests": [
                    "en1", 
                    "en2"
                ],
                "action": "average",
                "condition": "greater",
                "grade": 60
            },
            {
                "tests": [
                    "tech"
                ],
                "action": "sum",
                "condition": "greater",
                "grade": 80
            }
        ]
    }
];

const groupListTest = [
    {
        "name": "Dp-117-js",
        "direction": "UI",
        "testList": [
            "en1",
            "en2",
            "en3",
            "en4",
            "tech",
            "esse"
        ],
        "filterList": [
            {
                "tests": [
                    "en1", 
                    "en2",
                    "en3",
                    "en4"
                ],
                "action": "average",
                "condition": "greater",
                "grade": 60
            },
            {
                "tests": [
                    "tech"
                ],
                "action": "sum",
                "condition": "greater",
                "grade": 75
            }
        ]
    },
    {
        "name": "Dp-112-go",
        "direction": "UI",
        "testList": [            
            "en1",
            "en2",
            "en3",
            "en4",
            "tech",
            "esse"
        ],
        "filterList": [
            {
                "tests": [
                    "en1", 
                    "en2"
                ],
                "action": "average",
                "condition": "greater",
                "grade": 60
            },
            {
                "tests": [
                    "tech"
                ],
                "action": "sum",
                "condition": "greater",
                "grade": 60
            }
        ]
    },
    {
        "name": "Dp-120-php",
        "direction": "UI",
        "testList": [            
            "en1",
            "en2",
            "en3",
            "en4",
            "tech",
            "esse"
        ],
        "filterList": [
            {
                "tests": [
                    "en1", 
                    "en2"
                ],
                "action": "average",
                "condition": "greater",
                "grade": 60
            },
            {
                "tests": [
                    "tech"
                ],
                "action": "sum",
                "condition": "greater",
                "grade": 80
            }
        ]
    }
];