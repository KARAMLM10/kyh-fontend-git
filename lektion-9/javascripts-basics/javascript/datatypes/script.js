/* 
deklarering av variabler
----------------------------------------------------
javascript använder sig av CamelCase 
camelcase     firstName    js, java, c, c++, 
pascalcase    FirstName    pascal, vb, c#
snake-case    first-name   python
Kebab-case    first-name   css, powershell


var      global variabel                         var firstname = "name"
let      lokalt scoped deklarerad varible        { let firstname = "king" }
const    är konstant och kan inte omdeklareras   const firstname = "name kommer aldrig ändras"

firstname = "king"

function test(){
    var firstname = "siu"
    console.log(firstname)
}

test()

console.log(firstname)

datatyper
-----------------------------------------------------

JS-----------|------------C#-----------------------------------------------------sql
-------------|-----------------------------------------------------------------------
string                  string                                            char,varchar,nvarchar,varchar,nchar,text,ntext
number                  byte,sbyte,int,long,unit,ulong,short,ushort         tinyint, smallint,int,bigint
number                  float,double,decimal                                real,decimal,money
Boolean                 bool                                               bit
Object                  object                                              tabel
undefined               ---- 
NULL                    null                                                



nvarchar (50)
varchar (50)
n  =  unicode/utf_8/ÄÖÅ
var  =  0 till 50, 0 till 150 
char = string  karäkter
char (10)  =    10           b o -------   10 bytes
varchar (10)  =   0 till 10  b o 2 bytes + 2 bytes = 4
 nchar(10) = 10                 b o -------   20 bytes
nvarchar(10) = 0-10             b o    4 bytes + 2 bytes = 6





*/ 
 
/*
// string - till för text
""    citat                        ""; => text
''    enkelfnuttar                 ''; =>  enksilt tecken
``    back-ticks (shift + ')       $""; =>  placeholder

*/
let firstname = "karam"
let lastname = "king"
let email = `karamking@gmail.com`

var sentence = "hej jag heter" + firstname +  "" 


