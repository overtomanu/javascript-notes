let url = 'https://fuscdrmsmc281-fa-ext.us.oracle.com:443/fscmRestApi/resources/latest/projects?onlyData=true&fields=ProjectName%2CProjectNumber%2CProjectId%2CProjectStartDate%2CProjectEndDate%2CSourceTemplateName&q=SourceTemplateName%20NOT%20IN%20(%27T_Capital_template_UK%27)&limit=500';

let username = 'James.Taylor';
let password = 'Welcome1';

let headers = new Headers();

//headers.set('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));
headers.set('REST-Framework-Version', '2');

//getRESTServiceResponse(url, headers).then(jsonResponse=>console.log('jsonResponse :>> ', jsonResponse));

loopAndFetchAllItems(url,headers).then(projectsArr=>projectsArr.map(projectsObj=>console.log(projectsObj.ProjectName)));

async function getRESTServiceResponse(url,headers){
    return fetch(url, {method:'GET',
        headers: headers,
       })
    .then(response => response.json());
}

async function loopAndFetchAllItems(url,headers){
    let projectsArray=[];
    let hasMore=false;
    let offsetVal=0
    
    do{
        let urlWithOffset = url+'&'+new URLSearchParams({'offset':offsetVal});
        let currentResponse = await getRESTServiceResponse(urlWithOffset, headers);
        if(currentResponse.items.length>0){
            projectsArray.push(...currentResponse.items);
        }
        hasMore=currentResponse.hasMore;
        offsetVal+=500;
    }while(hasMore);

    return projectsArray;
}