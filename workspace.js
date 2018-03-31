var workspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox'),
        grid:
        {spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true},
        zoom:
        {controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2},
        trashcan: true}
);


function myUpdateFunction(event) {
    var code = Blockly.Python.workspaceToCode(workspace);
    document.getElementById('codearea').innerHTML = code;
    console.log(code)
}
workspace.addChangeListener(myUpdateFunction);

var button = Blockly.Variables.createVariable(workspace, null, 'panda');
