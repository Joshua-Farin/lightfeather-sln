import data from "../data.js"



// const filtered = data.filter((supervisor) => parseInt(supervisor.id) > 40);
const jurisFilter = data.sort((a,b) => a.jurisdiction.localeCompare(b.jurisdiction));
const firstFilter = jurisFilter.sort((a,b) => a.firstName.localeCompare(b.firstName));
const lastFilter = firstFilter.sort((a,b) => a.lastName.localeCompare(b.lastName));
const filtered = lastFilter.filter((supervisor) => isNaN(supervisor.jurisdiction));



const formattedData = filtered.map((supervisor) => {
    return {
        supervisor: `<${supervisor.jurisdiction}>-<${supervisor.lastName}>,<${supervisor.firstName}>`,
    }
})



export default async function supervisors(req, res) {
    return res.status(200).send(formattedData);
}