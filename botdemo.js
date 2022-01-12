function getAvailableDates(branchId, serviceId) {
    return fetch(`https://www.mrdappointments.gov.nl.ca/qwebbook/rest/schedule/branches/${branchId}/services/${serviceId}/dates?_=1641950911716`, {
        "headers": {},
        "method": "GET",
    }).then(res=>res.json())
}

function getAvailableTimes(branchId, serviceId, date) {
    return fetch(`https://www.mrdappointments.gov.nl.ca/qwebbook/rest/schedule/branches/${branchId}/services/${serviceId}/dates/${date}/times?_=1641950911734`, {
        "method": "GET",
    }).then(res=>res.json())
}
const gaandfall = 'a9589ef4b295c4ed509158d62054c0872a1d65220b56c1efb4ba2103e961e134'
const mtpearlId = "5d477794603a12d58dade02d08209d963fa21dcaf117ae35bb9f208029be4ad0"
const classFive = '378dcad3a2874a41a1018cb96d57a21c63912e1884dead32d94d14b244abe8ae'

setInterval(()=>{
    getAvailableDates(mtpearlId, classFive).then(res=>{
        res.forEach(r=>{
            getAvailableTimes(mtpearlId, classFive, r.date).then(timeRes=>{
                console.log(" available date on ", r.date, "times", timeRes)
            }
            )
        })
    })
}
, 10000)

// Puspam Bhai 
