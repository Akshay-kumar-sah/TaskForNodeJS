const domainService = require('../Services/domainService');

async function extractAndStoreDomainData() {
  const currentDate = new Date().toISOString();

  try {
    const newlyRegisteredDomains = await domainService.getNewlyRegisteredDomains();
    const extractedData = [];

    for (const domain of newlyRegisteredDomains) {
      try {
        const whoisData = await domainService.extractWhoisData(domain);


        const domainInfo = await domainService.parseWhoisData(whoisData);
       // console.log ({domainInfo});
        extractedData.push({
          date: currentDate,
          domainName: domainInfo['Domain Name'],
          name: domainInfo['Admin Name'] ,
          email: domainInfo['Admin Email'] ,
          phone: domainInfo['Admin Phone'] ,
        });
           //console.log({extractedData});
        await domainService.saveDomainInfo({
          date: currentDate,
          domainName: domainInfo['Domain Name']|| domain,
          name: domainInfo['Admin Name'] || '',
          email: domainInfo['Admin Email'] || '',
          phone: domainInfo['Admin Phone'] || '',
        });
      } catch (err) {
        // Log any errors occurred during domain lookup
       // console.error(`Error for domain ${domain}: ${err}`);
       console.log(err);
      }
    }
  } catch (error) {
   // console.error('Error during extraction and database operation:', error);
   console.log(error);
  }
}

module.exports = {
  extractAndStoreDomainData,
};
