interface types {
    [key: string]: string;
}

function domainType(domains: string[]): string[] {
    let domainTypes: types = {
        'com': 'commercial',
        'org': 'organization',
        'net': 'network',
        'info': 'information'
    };

    let res: string[] = [];

    domains.forEach(url => {
        let tmp = url.split('.');
        if (domainTypes[tmp[tmp.length - 1]]) {
            res.push(domainTypes[tmp[tmp.length - 1]]);
        } else {
            res.push('other');
        }
    });

    return res;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info", "govnokod.ru"]));
