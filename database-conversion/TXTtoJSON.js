function ReadFile()
{
var fso, f1, ts, s;
var ForReading = 1;
fso = new ActiveXObject("Scripting.FileSystemObject");
f = fso.OpenTextFile( "./prueba.txt", ForReading);
return(f.ReadAll());
}
console.log(ReadFile());

var str = "0 69 164\n0 71 117\n0 73 84\n0 79 80\n0 82 83";
var lines = str.split("\n");
var data_json = [];
var tmp;

for(var index in lines){
	tmp = lines[index].trim().split(" ");
	data_json.push({
		user : tmp[0],
		tecla : tmp[1],
		time : tmp[2]
	});
}

//console.log(data_json);