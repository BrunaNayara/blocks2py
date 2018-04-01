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
    // Block for line input.
    {
      "type": "input_read_line",
      "lastDummyAlign0": "RIGHT",
      "message0": "read line",
      "output": null,
      "colour": 160,
      "tooltip": "read integer",
      "helpUrl": ""
    },
    // Block for integer input.
    {
      "type": "input_read_integer",
      "lastDummyAlign0": "RIGHT",
      "message0": "read integer",
      "output": null,
      "colour": 160,
      "tooltip": "read integer",
      "helpUrl": ""
    },
    // Block for number input.
    {
      "type": "input_read_number",
      "lastDummyAlign0": "RIGHT",
      "message0": "read number",
      "output": null,
      "colour": 160,
      "tooltip": "read integer",
      "helpUrl": ""
    },
    // Block for string input.
    {
      "type": "input_read_string",
      "lastDummyAlign0": "RIGHT",
      "message0": "read string",
      "output": null,
      "colour": 160,
      "tooltip": "read integer",
      "helpUrl": ""
    }
]);  // END JSON EXTRACT (Do not delete this comment.)

