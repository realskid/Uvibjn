const axios = require("axios")
const fs = require("fs")
const rax = require('retry-axios')
const chalk = require("chalk")
var inquirer = require('inquirer');
const config = require("./config.json")

let token = config.scrapeToken


const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


const read = fs.readFileSync('./invites.txt', "utf8")
let invites = read.replace("\r", "").split("\n")






var tokens = config.joinTokens

async function invite(invite) {

    console.log(invite)
    try {

        invite = invite.replace("discord.gg/", "");
        invite = invite.replace("discord.com/", "");
        invite = invite.replace("https://", "");
        invite = invite.replace("http://", "");
        invite = invite.replace("api", "");
        invite = invite.replace("v9/invites/", "");
        invite = invite.replace("v8/invites/", "");
        invite = invite.replace("v7/invites/", "");
        invite = invite.replace("/invites/", "");
        invite = invite.replace("v6/invites/", "");
        invite = invite.replace("/", "");
        console.log(invite)

        var z = await axios(`https://discord.com/api/v9/invites/${invite}?with_counts=true`, {
            method: 'GET',
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
            },
        })
        //   console.log(z.data)
        console.log(z.data.approximate_member_count)

        return z.data.approximate_member_count
    } catch (e) {
        console.log(e)
        console.log("cord inv error")
        return 0
    }

}



async function request(before) {
    const options = {
        method: "GET",
        headers: {
            authorization: token
        }
    };

    try {
        const request = await axios(
            `https://discord.com/api/v9/channels/${cc}/messages?limit=100&${before ? "before=" + before : ""}`,
            options
        );
        return request.data;
    } catch {
        return []
    }
}

let result;

async function go() {
    var check = [];
    var final = []
    let page = await request();
    result = page;
var count = 0;

    //   while (page.length >= 100) {
    for (var z = 0; z < 999; z++) {
    	try {
    	var checkk = []
        page = await request(page[page.length - 1].id);
        result = result.concat(page);
        
        page.map(a => {
        var wordArray = []
        wordArray = a.content.split(' ');
        wordArray.map(g => {

            if (g.includes("discord.gg")) {
                if (g.split("\n")[0].includes("discord.gg")) {
                    var inv = g.split("\n")[0]
                } else if (g.split("\n")[1].includes("discord.gg")) {
                    var inv = g.split("\n")[1]
                } else if (g.split("\n")[2].includes("discord.gg")) {
                    var inv = g.split("\n")[2]
                }
                if (!checkk.includes(inv)) {                
if(!inv) return;    
                     fs.appendFileSync('invites.txt', inv + "\n", "utf8");
                     checkk.push(inv)
                }
            }

        })
    })
        
        
        count+=100
        console.log("Scraped " + count + " invites")
        } catch(e) { console.log(e); console.log("error")}
        //console.log(result) 
    }



    

    await new Promise((resolve, reject) => {
     
//dup()

    })




}

function Main() {
    request().then(() => {
        go();
    });
}




async function join() {

  //  console.log(invites)
    for (var i = 0; i < invites.length; i++) {
        setTimeout(async function(i) {
 
            for (var o = 0; o < tokens.length; o++) {

                invites[i] = invites[i].replace("discord.gg/", "");
                invites[i] = invites[i].replace("discord.com/", "");
                invites[i] = invites[i].replace("https://", "");
                invites[i] = invites[i].replace("http://", "");
                invites[i] = invites[i].replace("api", "");
                invites[i] = invites[i].replace("v9/invites/", "");
                invites[i] = invites[i].replace("v8/invites/", "");
                invites[i] = invites[i].replace("v7/invites/", "");
                invites[i] = invites[i].replace("/invites/", "");
                invites[i] = invites[i].replace("v6/invites/", "");
                invites[i] = invites[i].replace("/", "");

                var thecookies = await getcook()
                let fing = await axios("https://discord.com/api/v9/experiments");

                const interceptorId = rax.attach();
                axios(`https://discord.com/api/v9/invites/${invites[i]}`, {
                        method: 'POST',
                        headers: {
                            "Authorization": tokens[o],
                            //      "Content-Type": "application/json",
                            'accept': '*/*',
                            //    'accept-encoding': 'gzip, deflate, br',
                            'accept-language': 'de',
                            //     'authorization': token,
                            'content-length': '0',
                            'cookie': thecookies,
                            'origin': 'https://discord.com',
                            'referer': 'https://discord.com/channels/@me',
                            'sec-ch-ua': `''"Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"''`,
                            'sec-ch-ua-mobile': '?0',
                            'sec-fetch-dest': 'empty',
                            'sec-fetch-mode': 'cors',
                            'sec-fetch-site': 'same-origin',
                            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36',
                            'x-context-properties': 'eyJsb2NhdGlvbiI6IkpvaW4gR3VpbGQiLCJsb2NhdGlvbl9ndWlsZF9pZCI6IjMyNTAxNzA5ODU5MjA1OTM5MiIsImxvY2F0aW9uX2NoYW5uZWxfaWQiOiI2Njc0NzQ2MjYzMzAyMzA3ODQiLCJsb2NhdGlvbl9jaGFubmVsX3R5cGUiOjB9',
                            'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6ImRlLURFIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg5LjAuNDM4OS4xMjggU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijg5LjAuNDM4OS4xMjgiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6ODI1OTAsImNsaWVudF9ldmVudF9zb3VyY2UiOm51bGx9',
                            "x-fingerprint": fing.data.fingerprint
                        },
                        //     httpsAgent: agent,
                        raxConfig: {
                            retry: 5,
                            onRetryAttempt: err => {
                                const cfg = rax.getConfig(err);
                                console.log(`Retry attempt #${cfg.currentRetryAttempt}`);
                            }
                        }
                    })
                    .then(resp => {
                        //    console.log(resp.data)
                        console.log(chalk.greenBright(`[${i+1}/${invites.length}] ` + `SUCCESS | JOINED GUILD`))
                    })
                    .catch((e) => {
                        console.log(e)
                        if (e.response !== undefined) {
                            if (e.response.data.message == "You need to verify your account in order to perform this action.") {
                                console.log(chalk.yellowBright(`[${i+1}/${tokens.length}] ` + "ERROR | PHONE VERIFICATION NEEDED "))
                            } else if (e.response.data.message == "404: Not Found") {
                                console.log(chalk.redBright("ERROR | INVALID INVITE CODE"))
                            }
                        } else if (e.toString().includes('ERR_INVALID_CHAR')) {
                            console.log(chalk.redBright(`[${i+1}/${tokens.length}] ` + "ERROR | INVALID TOKEN"))
                        } else {
                            console.log(chalk.redBright(`[${i+1}/${tokens.length}] ` + "UNKNOWN ERROR"))
                        }


                    })

            }
        }, 85 * 1000 * i, i);
    }
}


async function getcook() {

    //var agent = new httpsProxyAgent({host: "gw.proxy.rainproxy.io", port: "5959", auth: randomproxy});
    const lon = await axios("https://discord.com/register", {
        method: 'GET',
        // httpsAgent: agent,
    })
    var h = lon.headers
    var cook = (h["set-cookie"])
    //var cook = (h["set-cookie"].join(""))
    //   var cook = (h["set-cookie"].join("; "))

    console.log(cook[0].split(";")[0] + "; " + cook[1].split(";")[0])

    return cook[0].split(";")[0] + "; " + cook[1].split(";")[0];
}





//Main();

//join()






inquirer
  .prompt({
    type: 'list',
    name: 'option',
    message: "What do you want to do?",
    choices: [new inquirer.Separator(), 'Scrape Invites', 'Join Invites', 'Remove Duplicate Invites'
],
  })
  .then((answers) => {

    if(answers.option == 'Scrape Invites') {
    	       inquirer
                .prompt({
                    type: 'input',
                    name: 'channel',
                    message: "Enter The Channel Id You Want To Scrape Invites From",
                })
                .then(async function(answers) {
global.cc = answers.channel
    	Main();
    })
    }
    else if(answers.option == 'Join Invites') {
    	join() 
    }
    else if(answers.option == 'Remove Duplicate Invites') {
    	dup()  
    }

  });




async function dup() {
	await fs.truncate('invites.txt', 0, function() { 
    console.log('File Content Deleted') 
});
await delay(2000)
  let chars = invites
let uniqueChars = [...new Set(chars)];

await uniqueChars.map(async function(a) { 
	console.log(a)
                     await fs.appendFileSync('invites.txt', a + "\n", "utf8");
    })
console.log("done")
}
	
	
	