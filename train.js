let train1 = `
 ╭╩══╮ ╔══════╗╔══════╗╔══════╗
╭  嘟╠ ╣都不要╠╣对面的╠╣看我不╣
╰⊙══⊙╯╚◎════◎╝╚◎════◎╝╚◎═════◎╝
`;

let train2 = `
   ╭╩╮ ╔════╗╔════╗╔════╗╔════╗╔════╗   
 ╭╯GO╠ ╣支心╠╣再接╠╣小小╠╣人过╠╣请支╣   
 ╰⊙═⊙╯╚◎══◎╝╚◎══◎╝╚◎══◎╝╚◎══◎╝╚◎══◎╝
`;

let train3 = `
    .---- -. -. .  .   .
   ( .',----- - - ' '
    \_/      ;--:-\         __--------------------__
   __U__n_^_''__[. |ooo___  | |_!_||_!_||_!_||_!_| |
 c(_ ..(_ ..(_ ..( /,,,,,,] | |___||___||___||___| |
 ,_\___________'_|,L______],|______________________|
/;_(@)(@)==(@)(@)   (o)(o)      (o)^(o)--(o)^(o)
`;

let train = [train1, train2, train3];

process.stdin.on('readable', () => {
	const chunk = process.stdin.read();
	if (chunk !== null) {
		let output = train[parseInt(chunk) - 1];
		process.stdout.write(`${output}`);
	} else {
		process.stdout.write(`555555.....\n`);
	}
});

process.stdin.on('end', () => {
	process.stdout.write('end');
});
