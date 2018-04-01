Blockly.Python['input_read_line'] = function(block) {
  var code = 'input()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['input_read_integer'] = function(block) {
  var code = 'int(input())';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['input_read_number'] = function(block) {
  var code = 'float(input())';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['input_read_string'] = function(block) {
  var code = 'input()'
  return [code, Blockly.Python.ORDER_NONE];
};
