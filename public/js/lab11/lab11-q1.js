const dns = require('dns');
  
const options = {
    ttl: true,
};
  

dns.resolve4('www.miu.edu', options, (err, address) => console.log(address[0].address));

// dns.resolve6('www.google.com', (err, address) => console.log(address));
