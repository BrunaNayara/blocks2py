Blockly.Python['make_list'] = function(block) {

  var OPTIONS = {
      'text_to_list': 'split',
      'list_to_text': 'join',
  };
  var dropdown_list_text = block.getFieldValue('list_text');
  var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
  var value_delimiter = Blockly.Python.valueToCode(block, 'delimiter', Blockly.Python.ORDER_ATOMIC);
  console.log(dropdown_list_text);
  var func = OPTIONS[dropdown_list_text];
  var code = '';

  if(func == 'split') {
    code = value_variable + '.' + func + '(' + value_delimiter + ')';
  } else if (func == 'join') {
    code = value_delimiter + '.' + func + '(' + value_variable + ')';
  }


  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_in_list'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC) || '[]';
  var number_index = block.getFieldValue('index') -1;
  console.log(value_list);
  console.log(number_index);

  var code = value_list + '[' + number_index + ']';
  return [code, Blockly.Python.ORDER_NONE];
};
