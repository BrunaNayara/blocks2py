/**
 * Bruna Moreira
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Input blocks for Blockly.
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */


Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {// Block to making lists and texts from each other
        "type": "make_list",
        "message0": "make %1 %2 %3 with delimiter %4",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "list_text",
                "options": [
                    [
                        "list from text",
                        "text_to_list"
                    ],
                    [
                        "text from list",
                        "list_to_text"
                    ]
                ]
            },
            {
                "type": "input_dummy",
                "align": "CENTRE"
            },
            {
                "type": "input_value",
                "name": "variable",
                "align": "CENTRE"
            },
            {
                "type": "input_value",
                "name": "delimiter",
                "check": "String",
                "align": "CENTRE"
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 105,
        "tooltip": "",
        "helpUrl": ""
    },
    {// Block to get element from list
        "type": "get_in_list",
        "message0": "in list %1 get %2",
        "args0": [
            {
                "type": "input_value",
                "name": "list",
                "check": "Array",
                "align": "RIGHT"
            },
            {
                "type": "field_number",
                "name": "index",
                "value": 1,
                "precision": 1
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 105,
        "tooltip": "",
        "helpUrl": ""
    }
]);  // END JSON EXTRACT (Do not delete this comment.)

