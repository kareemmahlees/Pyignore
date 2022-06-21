// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	await console.log('Congratulations, your extension "python--gitignore" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('python--gitignore.helloWorld', function () {
	// The code you place here will be executed every time your command is executed

	// Display a message box to the user
	// vscode.window.showInformationMessage('Hello World from Python .gitignore!');
	// });
	let disposable = await vscode.commands.registerCommand('python--gitignore.generate', async function () {
		// console.log(vscode.workspace.fs.readDirectory())
		try {
			if (vscode.workspace.workspaceFolders.length > 1) {
				const activeDir = await vscode.window.showInputBox();
				console.log(activeDir);
			} else {
				await vscode.window.showInformationMessage("Creating .gitignore")

			}

		}
		catch (error) {
			vscode.window.showErrorMessage("No Folder Is Opened")
		}
		// })
		// vscode.
		// const wsedit = new vscode.WorkspaceEdit();
		// const wsPath = vscode.window.showWorkspaceFolderPick()
		// console.log(wsPath)

		// vscode.window.showInformationMessage("run successfuly")
		// const filePath = vscode.Uri.file(wsPath + '/.gitignore');
		// vscode.window.showInformationMessage(filePath.toString());
		// vscode.workspace.applyEdit(wsedit);
		// vscode.window.showInformationMessage('Created a new file: .gitignore');

	})

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
