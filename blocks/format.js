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
    {//Block for set precision
        "type": "precision",
  "message0": "precision %1 set %2",
  "args0": [
    {
      "type": "input_value",
      "name": "variable",
      "check": "Number",
      "align": "CENTRE"
    },
    {
      "type": "field_number",
      "name": "precision",
      "value": 2,
      "min": 0,
      "max": 10,
      "precision": 1
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 30,
  "tooltip": "precision",
  "helpUrl": ""
    },
    {// Block to convert types
        "type": "convert",
        "message0": "convert %1 to %2",
        "args0": [
            {
                "type": "input_value",
                "name": "variable"
            },
            {
                "type": "field_dropdown",
                "name": "type",
                "options": [
                    [
                        "integer",
                        "int"
                    ],
                    [
                        "float",
                        "float"
                    ],
                    [
                        "string",
                        "str"
                    ]
                ]
            }
        ],
        "colour": 30,
        "output": null,
        "tooltip": "",
        "helpUrl": ""
    }
]);  // END JSON EXTRACT (Do not delete this comment.)

