Blockly.Python['precision'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC) || 0;
  var number_precision = block.getFieldValue('precision') || 0;
  var code = '\"{:0.'+number_precision+'f}\".format('+ value_variable +')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['convert'] = function(block) {
  var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  var code = dropdown_type + '(' + value_variable + ')';
  return [code, Blockly.Python.ORDER_NONE];
};
