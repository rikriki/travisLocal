const {exec} = require('child_process')
module.exports = async function(){
	console.log('Spinning up a new frontend at 8080-----')
	exec('npm run test-server')
}